"""
InterviewGPT AI - Resume Models
Pydantic models for resume parsing and skill profiles.
"""

from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime


class SkillEntry(BaseModel):
    """A single skill with proficiency."""
    name: str
    proficiency: float = 0  # 0-100
    category: str = ""  # e.g., "programming", "framework", "database"
    years_of_experience: float = 0


class ProjectEntry(BaseModel):
    """A project from the resume."""
    name: str
    description: str = ""
    technologies: List[str] = []
    role: str = ""
    duration: str = ""
    highlights: List[str] = []


class EducationEntry(BaseModel):
    """Education entry from resume."""
    institution: str
    degree: str = ""
    field_of_study: str = ""
    graduation_year: str = ""
    gpa: str = ""
    achievements: List[str] = []


class ExperienceEntry(BaseModel):
    """Work experience entry."""
    company: str
    role: str = ""
    duration: str = ""
    start_date: str = ""
    end_date: str = ""
    description: str = ""
    responsibilities: List[str] = []
    technologies: List[str] = []


class CertificationEntry(BaseModel):
    """Certification entry."""
    name: str
    issuer: str = ""
    date: str = ""
    credential_id: str = ""


class ResumeAnalysis(BaseModel):
    """Complete resume analysis output."""
    raw_text: str = ""
    full_name: str = ""
    email: str = ""
    phone: str = ""
    location: str = ""
    summary: str = ""
    skills: List[SkillEntry] = []
    projects: List[ProjectEntry] = []
    education: List[EducationEntry] = []
    experience: List[ExperienceEntry] = []
    certifications: List[CertificationEntry] = []
    achievements: List[str] = []
    total_experience_years: float = 0
    skill_matrix: Dict[str, float] = {}
    strengths: List[str] = []
    improvement_areas: List[str] = []


class ResumeResponse(BaseModel):
    """Resume response schema."""
    id: str
    user_id: str
    filename: str
    analysis: Optional[ResumeAnalysis] = None
    uploaded_at: datetime
    analyzed_at: Optional[datetime] = None


class SkillProfile(BaseModel):
    """Candidate skill profile."""
    user_id: str
    skills: List[SkillEntry] = []
    skill_matrix: Dict[str, float] = {}
    proficiency_levels: Dict[str, str] = {}  # skill -> beginner/intermediate/advanced/expert
    last_updated: datetime = datetime.now()
