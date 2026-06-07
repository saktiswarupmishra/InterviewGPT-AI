"""
InterviewGPT AI - Main Application
FastAPI application entry point with CORS, middleware, and route mounting.
"""

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.database import database
from app.api.v1 import auth, users


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifespan: startup and shutdown events."""
    # Startup
    print(f"Starting {settings.APP_NAME} v{settings.APP_VERSION}")
    await database.connect()

    # Create database indexes
    await database.users.create_index("email", unique=True)
    await database.interviews.create_index("user_id")
    await database.feedback_reports.create_index("user_id")
    await database.skill_profiles.create_index("user_id")
    await database.token_blacklist.create_index("token")

    print(f"Database indexes created")
    print(f"{settings.APP_NAME} is ready!")

    yield

    # Shutdown
    await database.disconnect()
    print(f"{settings.APP_NAME} shut down")


# Create FastAPI application
app = FastAPI(
    title=settings.APP_NAME,
    description="AI-powered virtual interview simulator using Google Gemini",
    version=settings.APP_VERSION,
    lifespan=lifespan,
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount API routes
app.include_router(auth.router, prefix="/api/v1")
app.include_router(users.router, prefix="/api/v1")


@app.get("/", tags=["Health"])
async def root():
    """Health check endpoint."""
    return {
        "name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "running",
        "docs": "/docs",
    }


@app.get("/health", tags=["Health"])
async def health_check():
    """Detailed health check."""
    try:
        await database.client.admin.command("ping")
        db_status = "connected"
    except Exception:
        db_status = "disconnected"

    return {
        "status": "healthy",
        "database": db_status,
        "version": settings.APP_VERSION,
    }
