# Task Manager Application

A simple full-stack Task Manager application built using **React** and **FastAPI**.

## Features

* View all tasks
* Add new tasks
* Mark tasks as completed
* Delete tasks
* Loading and error states
* Clean responsive UI

## Tech Stack

* Frontend: React, Axios, CSS
* Backend: FastAPI, Python
* Storage: In-memory list

## Setup Instructions

### Backend

```powershell
cd backend
uvicorn main:app --reload
```

Runs on:

```text
http://127.0.0.1:8000
```

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

## API Endpoints

* `GET /` → Fetch all tasks
* `POST /tasks` → Create task
* `PATCH /tasks/{id}` → Toggle task status
* `DELETE /tasks/{id}` → Delete task

## Notes

This project uses **in-memory storage** to keep the implementation intentionally small and aligned with the assignment scope.


## Assumptions / Trade-offs

* Used in-memory storage instead of a database to keep the solution lightweight and within the expected 1–2 hour scope.
* Task completion update is implemented as a toggle endpoint.
* UI design was kept intentionally simple, focusing on clarity and functionality over advanced styling.
