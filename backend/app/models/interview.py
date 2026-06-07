"""
InterviewGPT AI - Interview Models
Pydantic models for interviews, questions, and answers.
"""

from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum


class InterviewMode(str, Enum):
    TECHNICAL = "technical"
    BEHAVIORAL = "behavioral"
    HR = "hr"
    CODING = "coding"
    SYSTEM_DESIGN = "system_design"
    CAMPUS_PLACEMENT = "campus_placement"
    FAANG_SIMULATION = "faang_simulation"
    CUSTOM_COMPANY = "custom_company"


class InterviewStatus(str, Enum):
    PLANNED = "planned"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    CANCELLED = "cancelled"


class DifficultyLevel(str, Enum):
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"
    EXPERT = "expert"


class TechnicalDomain(str, Enum):
    JAVA = "java"
    PYTHON = "python"
    JAVASCRIPT = "javascript"
    REACT = "react"
    NODEJS = "nodejs"
    SPRING_BOOT = "spring_boot"
    DATABASE = "database"
    SYSTEM_DESIGN = "system_design"
    CLOUD = "cloud"
    CYBER_SECURITY = "cyber_security"
    DSA = "dsa"
    ALGORITHMS = "algorithms"
    ML = "machine_learning"
    AI = "artificial_intelligence"
    DEVOPS = "devops"
    DOCKER = "docker"
    KUBERNETES = "kubernetes"
    OS = "operating_systems"
    NETWORKS = "computer_networks"
    OOP = "oop"
    DBMS = "dbms"


class InterviewCreate(BaseModel):
    """Schema for creating a new interview."""
    mode: InterviewMode
    target_company: str = ""
    target_role: str = ""
    experience_level: str = "fresher"
    domains: List[str] = []
    difficulty: DifficultyLevel = DifficultyLevel.MEDIUM
    num_questions: int = Field(default=10, ge=5, le=50)


class InterviewResponse(BaseModel):
    """Schema for interview response."""
    id: str
    user_id: str
    mode: str
    target_company: str
    target_role: str
    status: str
    difficulty: str
    domains: List[str]
    num_questions: int
    current_question: int = 0
    scores: Optional[Dict[str, float]] = None
    created_at: datetime
    completed_at: Optional[datetime] = None


class QuestionModel(BaseModel):
    """Schema for an interview question."""
    id: str = ""
    interview_id: str = ""
    domain: str = ""
    difficulty: str = "medium"
    question_type: str = "technical"
    content: str
    follow_ups: List[str] = []
    expected_topics: List[str] = []
    max_score: int = 100
    order: int = 0


class AnswerModel(BaseModel):
    """Schema for a candidate answer."""
    interview_id: str
    question_id: str
    content: str
    time_taken_seconds: int = 0


class AnswerEvaluation(BaseModel):
    """Schema for answer evaluation."""
    question_id: str
    score: float = 0
    max_score: float = 100
    feedback: str = ""
    strengths: List[str] = []
    weaknesses: List[str] = []
    follow_up: Optional[str] = None


class ScoreBreakdown(BaseModel):
    """Scoring framework."""
    technical_accuracy: float = 0
    communication: float = 0
    problem_solving: float = 0
    confidence: float = 0
    coding: float = 0
    system_design: float = 0
    behavior: float = 0
    overall: float = 0


class InterviewPlan(BaseModel):
    """Generated interview plan."""
    interview_id: str
    mode: str
    company: str
    role: str
    difficulty: str
    total_questions: int
    estimated_duration_minutes: int
    question_roadmap: List[Dict[str, Any]] = []
    focus_areas: List[str] = []
    tips: List[str] = []
