# InterviewGPT AI

> AI-powered virtual interview simulator — the world's most realistic interview preparation platform.

## ✨ Features

- **8 Interview Modes** — Technical, Behavioral, HR, Coding, System Design, Campus Placement, FAANG Simulation, Custom Company
- **Multi-Agent AI Architecture** — 8 specialized AI agents powered by Google Gemini 2.5 Pro
- **Resume-Aware Questions** — Upload your resume for personalized interview preparation
- **Live Coding Arena** — In-browser code editor with 7+ language support
- **System Design Canvas** — Interactive architecture design interviews
- **Detailed Analytics** — Score tracking, skill heatmaps, progress over time
- **Career Coach** — 30/60/90-day learning roadmaps with curated resources
- **Emotion Analysis** — Webcam-based confidence and engagement tracking

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, ShadCN UI |
| Backend | FastAPI, Python 3.11+ |
| Database | MongoDB 7.0 |
| Cache | Redis 7.0 |
| AI/LLM | Google Gemini 2.5 Pro |
| Agents | LangChain, LangGraph |
| Vector DB | ChromaDB |
| DevOps | Docker, Docker Compose |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose (for MongoDB and Redis)

### 1. Clone & Install

```bash
# Clone the repository
git clone <repo-url>
cd "InterviewGPT AI"

# Frontend
cd frontend
npm install

# Backend
cd ../backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your API keys
```

### 2. Start Infrastructure

```bash
# From project root
docker-compose up -d
```

### 3. Start Development Servers

```bash
# Terminal 1 — Frontend
cd frontend
npm run dev

# Terminal 2 — Backend
cd backend
uvicorn main:app --reload --port 8000
```

### 4. Open in Browser

- Frontend: http://localhost:8768
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 📁 Project Structure

```
InterviewGPT AI/
├── frontend/            # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Page components
│   │   ├── stores/      # Zustand state management
│   │   ├── services/    # API client
│   │   ├── types/       # TypeScript interfaces
│   │   └── lib/         # Utilities
│   └── ...
├── backend/             # FastAPI + Python
│   ├── app/
│   │   ├── api/v1/      # REST API routes
│   │   ├── agents/      # LangGraph AI agents
│   │   ├── core/        # Config, DB, Security
│   │   ├── models/      # Pydantic schemas
│   │   ├── rag/         # RAG pipeline
│   │   └── websocket/   # Real-time interview
│   ├── main.py          # App entry point
│   └── requirements.txt
├── docker-compose.yml   # MongoDB + Redis
└── README.md
```

## 📜 License

MIT
