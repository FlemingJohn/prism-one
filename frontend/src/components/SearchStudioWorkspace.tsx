'use client'

import { DecisionInspectorModal } from '@/components/DecisionInspectorModal'
import { DocumentComparisonView } from '@/components/DocumentComparisonView'
import { MetricsRibbon } from '@/components/MetricsRibbon'
import { NavigationSidebar } from '@/components/NavigationSidebar'
import { SearchInputBar } from '@/components/SearchInputBar'
import { useSearchDocuments } from '@/hooks/useSearchDocuments'
import { useSidebarState } from '@/hooks/useSidebarState'
import { NavigationTab } from '@/types/NavigationTab'
import { useState } from 'react'

interface SearchStudioWorkspaceProps {
  onNavigate: (tab: NavigationTab) => void
}

export function SearchStudioWorkspace({}: SearchStudioWorkspaceProps) {
  const { isCollapsed, toggleSidebar } = useSidebarState()
  const {
    query,
    setQuery,
    filter,
    setFilter,
    lexicalResults,
    semanticResults,
    metrics,
    isLoading,
    selectedDocument,
    setSelectedDocument,
    handleSearch,
  } = useSearchDocuments()

  const [isInspectorOpen, setIsInspectorOpen] = useState(false)

  function handleInspect(item: typeof selectedDocument) {
    setSelectedDocument(item)
    setIsInspectorOpen(true)
  }

  function handleDepartmentChange(department: string) {
    setFilter((previous) => ({ ...previous, department }))
  }

  return (
    <div className="flex-1 flex overflow-hidden">
      <NavigationSidebar
        isCollapsed={isCollapsed}
        onToggle={toggleSidebar}
      />
      <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
        <SearchInputBar
          query={query}
          onQueryChange={setQuery}
          selectedDepartment={filter.department}
          onDepartmentChange={handleDepartmentChange}
          onSearch={handleSearch}
          isLoading={isLoading}
        />
        <MetricsRibbon metrics={metrics} />
        <DocumentComparisonView
          lexicalResults={lexicalResults}
          semanticResults={semanticResults}
          onInspect={handleInspect}
        />
      </main>
      <DecisionInspectorModal
        selectedDocument={selectedDocument}
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />
    </div>
  )
}
