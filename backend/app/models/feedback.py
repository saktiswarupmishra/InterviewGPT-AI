"""
InterviewGPT AI - Feedback & Report Models
Pydantic models for feedback reports, roadmaps, and analytics.
"""

from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime


class FeedbackReport(BaseModel):
    """Comprehensive interview feedback report."""
    id: str = ""
    interview_id: str
    user_id: str
    
    # Scores
    technical_score: float = 0
    behavioral_score: float = 0
    communication_score: float = 0
    coding_score: float = 0
    system_design_score: float = 0
    confidence_score: float = 0
    problem_solving_score: float = 0
    overall_score: float = 0
    
    # Analysis
    executive_summary: str = ""
    strengths: List[str] = []
    weaknesses: List[str] = []
    knowledge_gaps: List[str] = []
    communication_analysis: str = ""
    coding_analysis: str = ""
    system_design_analysis: str = ""
    
    # Improvement
    improvement_plan: str = ""
    roadmap_30_day: List[str] = []
    roadmap_60_day: List[str] = []
    roadmap_90_day: List[str] = []
    
    created_at: datetime = datetime.now()


class EmotionAnalytics(BaseModel):
    """Emotion analysis data from interview."""
    interview_id: str
    user_id: str
    
    # Aggregated scores
    eye_contact_score: float = 0
    confidence_score: float = 0
    attention_score: float = 0
    stress_level: float = 0
    nervousness_level: float = 0
    engagement_score: float = 0
    overall_behavioral_score: float = 0
    
    # Timeline data
    timeline: List[Dict] = []
    
    created_at: datetime = datetime.now()


class CareerRoadmap(BaseModel):
    """Personalized career roadmap."""
    user_id: str
    
    # 30/60/90 day plans
    plan_30_day: List[Dict] = []
    plan_60_day: List[Dict] = []
    plan_90_day: List[Dict] = []
    
    # Recommendations
    recommended_courses: List[Dict] = []
    recommended_books: List[Dict] = []
    recommended_projects: List[Dict] = []
    recommended_certifications: List[Dict] = []
    recommended_interview_plans: List[Dict] = []
    learning_paths: List[Dict] = []
    
    created_at: datetime = datetime.now()
    updated_at: datetime = datetime.now()


class CodingSubmission(BaseModel):
    """Coding interview submission."""
    id: str = ""
    interview_id: str
    user_id: str
    language: str
    code: str
    problem_id: str = ""
    problem_title: str = ""
    
    # Results
    is_correct: bool = False
    test_cases_passed: int = 0
    test_cases_total: int = 0
    execution_time_ms: float = 0
    memory_used_kb: float = 0
    
    # Scores
    correctness_score: float = 0
    complexity_score: float = 0
    readability_score: float = 0
    optimization_score: float = 0
    best_practices_score: float = 0
    overall_score: float = 0
    
    feedback: str = ""
    submitted_at: datetime = datetime.now()


class CompanyProfile(BaseModel):
    """Company profile for targeted interview preparation."""
    id: str = ""
    name: str
    industry: str = ""
    logo_url: str = ""
    description: str = ""
    interview_difficulty: str = "medium"
    common_domains: List[str] = []
    typical_rounds: List[str] = []
    tips: List[str] = []
    sample_questions: List[str] = []
