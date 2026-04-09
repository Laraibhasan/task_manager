from pydantic import BaseModel
from datetime import datetime


class Task(BaseModel):
    id: int
    title: str
    completed: bool
    createdAt: str


class TaskCreate(BaseModel):
    title: str