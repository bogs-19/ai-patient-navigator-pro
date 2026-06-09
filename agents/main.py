from fastapi import FastAPI
from pydantic import BaseModel

from triage_agent import get_ai_response

app = FastAPI()


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "status": "running",
        "service": "AI Patient Navigator"
    }


@app.post("/chat")
def chat(data: ChatRequest):
    return get_ai_response(data.message)