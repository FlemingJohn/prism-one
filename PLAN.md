# PrismOne Plan

A semantic re-ranking and document classification application powered by TypeSafe Jev.

## Architecture

1. Backend: Python FastAPI service running on port 8000.
   - Stage 1: SQLite FTS5 lexical candidate search.
   - Stage 2: TypeSafe Jev System One evaluation using parallel Score, Choice, and Noul primitives.
   - Stage 3: Deterministic composite scoring and threshold routing.
2. Frontend: Next.js application with TypeScript, Tailwind CSS, and a pink and white theme.
   - Collapsible sidebar navigation.
   - Search console with live latency measurements.
   - Lexical baseline versus Jev re-ranked comparison list.
   - Slide-over inspector displaying calibrated probability distributions.

## Implementation Steps

1. Initialize Git repository inside `prism-one`.
2. Build FastAPI backend:
   - Configuration and environment settings.
   - SQLite FTS5 document index and sample corpus.
   - TypeSafe service supporting live API and local test simulator mode.
   - Search and document endpoints.
3. Build Next.js frontend:
   - Theme tokens in `theme.css`.
   - Types (one type or interface per file).
   - Core components (collapsible sidebar, search input, document cards, inspector).
   - Search results page.
4. Verify end-to-end integration and latency performance.
