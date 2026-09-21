import { SearchFilter } from "@/types/SearchFilter"
import { SearchResponse } from "@/types/SearchResponse"

const BACKEND_URL = "http://localhost:8000/api/search"

export async function executeSearchQuery(
  query: string,
  filter: SearchFilter,
): Promise<SearchResponse> {
  const payload = {
    query,
    candidateLimit: 10,
    departmentFilter: filter.department === "All" ? null : filter.department,
    minimumConfidence: filter.minimumConfidence,
  }
  const response = await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error(`Search request failed with status ${response.status}`)
  }
  return response.json()
}
