import sqlite3
from app.models.Document import Document
from app.services.sampleDocuments import getSampleDocuments

DATABASE_PATH = ":memory:"
connection = sqlite3.connect(DATABASE_PATH, check_same_thread=False)


def initializeDocumentStore() -> None:
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE VIRTUAL TABLE IF NOT EXISTS documents USING fts5(
            id UNINDEXED,
            title,
            content,
            department
        )
        """
    )
    connection.commit()
    seedSampleDocuments()


def seedSampleDocuments() -> None:
    for document in getSampleDocuments():
        insertDocument(document)


def insertDocument(document: Document) -> None:
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO documents(id, title, content, department) VALUES(?, ?, ?, ?)",
        (document.id, document.title, document.content, document.department),
    )
    connection.commit()


def searchLexicalDocuments(
    query: str,
    limit: int = 10,
    departmentFilter: str | None = None,
) -> list[tuple[Document, float]]:
    cursor = connection.cursor()
    sanitizedQuery = sanitizeQueryString(query)
    if not sanitizedQuery:
        return getAllDocumentsAsFallback(limit, departmentFilter)
    return executeLexicalQuery(cursor, sanitizedQuery, limit, departmentFilter)


def executeLexicalQuery(
    cursor: sqlite3.Cursor,
    sanitizedQuery: str,
    limit: int,
    departmentFilter: str | None,
) -> list[tuple[Document, float]]:
    sql = """
        SELECT id, title, content, department, rank
        FROM documents
        WHERE documents MATCH ?
    """
    parameters: list[str | int] = [sanitizedQuery]
    if departmentFilter:
        sql += " AND department = ?"
        parameters.append(departmentFilter)
    sql += " ORDER BY rank LIMIT ?"
    parameters.append(limit)
    cursor.execute(sql, parameters)
    rows = cursor.fetchall()
    if not rows:
        return getAllDocumentsAsFallback(limit, departmentFilter)
    return [
        (
            Document(id=row[0], title=row[1], content=row[2], department=row[3]),
            round(abs(float(row[4])), 2),
        )
        for row in rows
    ]


def getAllDocumentsAsFallback(
    limit: int,
    departmentFilter: str | None,
) -> list[tuple[Document, float]]:
    cursor = connection.cursor()
    sql = "SELECT id, title, content, department FROM documents"
    parameters: list[str | int] = []
    if departmentFilter:
        sql += " WHERE department = ?"
        parameters.append(departmentFilter)
    sql += " LIMIT ?"
    parameters.append(limit)
    cursor.execute(sql, parameters)
    return [
        (
            Document(id=row[0], title=row[1], content=row[2], department=row[3]),
            1.0,
        )
        for row in cursor.fetchall()
    ]


def getAllDocuments() -> list[Document]:
    cursor = connection.cursor()
    cursor.execute("SELECT id, title, content, department FROM documents")
    return [
        Document(id=row[0], title=row[1], content=row[2], department=row[3])
        for row in cursor.fetchall()
    ]


def sanitizeQueryString(rawQuery: str) -> str:
    cleanedWords = [
        word for word in "".join(
            character if character.isalnum() else " " for character in rawQuery
        ).split()
        if len(word) > 2
    ]
    if not cleanedWords:
        return ""
    return " OR ".join(cleanedWords)
