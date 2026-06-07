"""
InterviewGPT AI - Database Connection
Async MongoDB connection using Motor.
"""

from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings


class Database:
    """MongoDB async database manager."""

    client: AsyncIOMotorClient = None
    db: AsyncIOMotorDatabase = None

    async def connect(self):
        """Establish connection to MongoDB."""
        self.client = AsyncIOMotorClient(settings.MONGODB_URI)
        self.db = self.client[settings.MONGODB_DB_NAME]
        # Verify connection
        try:
            await self.client.admin.command("ping")
            print(f"Connected to MongoDB: {settings.MONGODB_DB_NAME}")
        except Exception as e:
            print(f"MongoDB connection failed: {e}")
            raise

    async def disconnect(self):
        """Close MongoDB connection."""
        if self.client:
            self.client.close()
            print("MongoDB connection closed")

    # Collection accessors
    @property
    def users(self):
        return self.db["users"]

    @property
    def resumes(self):
        return self.db["resumes"]

    @property
    def interviews(self):
        return self.db["interviews"]

    @property
    def questions(self):
        return self.db["questions"]

    @property
    def answers(self):
        return self.db["answers"]

    @property
    def coding_submissions(self):
        return self.db["coding_submissions"]

    @property
    def feedback_reports(self):
        return self.db["feedback_reports"]

    @property
    def emotion_analytics(self):
        return self.db["emotion_analytics"]

    @property
    def skill_profiles(self):
        return self.db["skill_profiles"]

    @property
    def roadmaps(self):
        return self.db["roadmaps"]

    @property
    def companies(self):
        return self.db["companies"]

    @property
    def token_blacklist(self):
        return self.db["token_blacklist"]


# Singleton instance
database = Database()
