from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models.Document import Document
from app.models.SearchRequest import SearchRequest
from app.models.SearchResponse import SearchResponse
from app.services.documentStore import (
    getAllDocuments,
    initializeDocumentStore,
    insertDocument,
)
from app.services.rankingCoordinator import searchAndRerank


@asynccontextmanager
async def lifespan(application: FastAPI):
    initializeDocumentStore()
    yield


application = FastAPI(title="PrismOne", lifespan=lifespan)

application.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@application.get("/api/health")
async def getHealthStatus():
    return {
        "status": "ready",
        "service": "PrismOne",
        "model": "jev-latest",
    }


@application.get("/api/documents")
async def getDocuments() -> list[Document]:
    return getAllDocuments()


@application.post("/api/documents")
async def addDocument(document: Document) -> Document:
    insertDocument(document)
    return document


@application.post("/api/search")
async def executeSearch(request: SearchRequest) -> SearchResponse:
    return await searchAndRerank(request)
