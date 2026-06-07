"""
InterviewGPT AI - Users API Routes
User profile management and dashboard analytics.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from datetime import datetime, timezone
from bson import ObjectId

from app.models.user import UserResponse, UserUpdate
from app.core.security import get_current_user
from app.core.database import database

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/profile", response_model=UserResponse)
async def get_profile(current_user: dict = Depends(get_current_user)):
    """Get detailed user profile."""
    return UserResponse(
        id=current_user["_id"],
        email=current_user["email"],
        full_name=current_user["full_name"],
        role=current_user["role"],
        profile=current_user.get("profile"),
        created_at=current_user["created_at"],
    )


@router.put("/profile", response_model=UserResponse)
async def update_profile(
    update_data: UserUpdate,
    current_user: dict = Depends(get_current_user),
):
    """Update user profile."""
    update_fields = {}

    if update_data.full_name is not None:
        update_fields["full_name"] = update_data.full_name
    if update_data.profile is not None:
        update_fields["profile"] = update_data.profile.model_dump()

    update_fields["updated_at"] = datetime.now(timezone.utc)

    if update_fields:
        await database.users.update_one(
            {"_id": ObjectId(current_user["_id"])},
            {"$set": update_fields},
        )

    # Fetch updated user
    updated_user = await database.users.find_one({"_id": ObjectId(current_user["_id"])})

    return UserResponse(
        id=str(updated_user["_id"]),
        email=updated_user["email"],
        full_name=updated_user["full_name"],
        role=updated_user["role"],
        profile=updated_user.get("profile"),
        created_at=updated_user["created_at"],
    )


@router.get("/dashboard")
async def get_dashboard(current_user: dict = Depends(get_current_user)):
    """Get dashboard analytics data for the current user."""
    user_id = current_user["_id"]

    # Count interviews
    total_interviews = await database.interviews.count_documents({"user_id": user_id})
    completed_interviews = await database.interviews.count_documents({
        "user_id": user_id,
        "status": "completed",
    })

    # Get recent interviews
    recent_interviews = []
    cursor = database.interviews.find(
        {"user_id": user_id}
    ).sort("created_at", -1).limit(5)
    async for interview in cursor:
        interview["_id"] = str(interview["_id"])
        recent_interviews.append(interview)

    # Get average scores from feedback reports
    avg_scores = {
        "technical": 0,
        "behavioral": 0,
        "communication": 0,
        "coding": 0,
        "system_design": 0,
        "overall": 0,
    }

    reports_cursor = database.feedback_reports.find({"user_id": user_id})
    report_count = 0
    async for report in reports_cursor:
        report_count += 1
        avg_scores["technical"] += report.get("technical_score", 0)
        avg_scores["behavioral"] += report.get("behavioral_score", 0)
        avg_scores["communication"] += report.get("communication_score", 0)
        avg_scores["coding"] += report.get("coding_score", 0)
        avg_scores["system_design"] += report.get("system_design_score", 0)
        avg_scores["overall"] += report.get("overall_score", 0)

    if report_count > 0:
        for key in avg_scores:
            avg_scores[key] = round(avg_scores[key] / report_count, 1)

    # Get skill profile
    skill_profile = await database.skill_profiles.find_one({"user_id": user_id})
    if skill_profile:
        skill_profile["_id"] = str(skill_profile["_id"])

    return {
        "total_interviews": total_interviews,
        "completed_interviews": completed_interviews,
        "in_progress": total_interviews - completed_interviews,
        "average_scores": avg_scores,
        "recent_interviews": recent_interviews,
        "skill_profile": skill_profile,
        "streak_days": 0,  # TODO: Calculate from interview dates
    }
