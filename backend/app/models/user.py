"""
InterviewGPT AI - User Models
Pydantic models for user management.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum


class UserRole(str, Enum):
    CANDIDATE = "candidate"
    RECRUITER = "recruiter"
    ADMIN = "admin"
    INSTITUTE = "institute"
    UNIVERSITY = "university"
    CORPORATE = "corporate"


class UserProfile(BaseModel):
    """Extended user profile information."""
    full_name: str = ""
    phone: str = ""
    location: str = ""
    bio: str = ""
    avatar_url: str = ""
    linkedin_url: str = ""
    github_url: str = ""
    portfolio_url: str = ""
    experience_years: int = 0
    target_company: str = ""
    target_role: str = ""
    preferred_domains: List[str] = []


class UserRegister(BaseModel):
    """Schema for user registration."""
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)
    full_name: str = Field(..., min_length=2, max_length=100)
    role: UserRole = UserRole.CANDIDATE


class UserLogin(BaseModel):
    """Schema for user login."""
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    """Schema for user response (no sensitive data)."""
    id: str
    email: str
    full_name: str
    role: str
    profile: Optional[UserProfile] = None
    created_at: datetime
    is_active: bool = True


class UserUpdate(BaseModel):
    """Schema for updating user profile."""
    full_name: Optional[str] = None
    profile: Optional[UserProfile] = None


class TokenResponse(BaseModel):
    """Schema for authentication token response."""
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user: UserResponse


class RefreshTokenRequest(BaseModel):
    """Schema for token refresh."""
    refresh_token: str
