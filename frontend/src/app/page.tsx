'use client'

import { ApplicationHeader } from '@/components/ApplicationHeader'
import { CalibrationAnalyticsView } from '@/components/CalibrationAnalyticsView'
import { CorpusManagementView } from '@/components/CorpusManagementView'
import { MetallicBackgroundCanvas } from '@/components/MetallicBackgroundCanvas'
import { ProductLandingView } from '@/components/ProductLandingView'
import { SearchStudioWorkspace } from '@/components/SearchStudioWorkspace'
import { NavigationTab } from '@/types/NavigationTab'
import { useState } from 'react'

export default function PrismOneApplication() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('landing')

  function renderActiveView() {
    if (activeTab === 'landing') {
      return <ProductLandingView onNavigate={setActiveTab} />
    }
    if (activeTab === 'studio') {
      return <SearchStudioWorkspace onNavigate={setActiveTab} />
    }
    if (activeTab === 'corpus') {
      return <CorpusManagementView />
    }
    return <CalibrationAnalyticsView />
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <MetallicBackgroundCanvas />
      <div className="relative z-10 flex flex-col min-h-screen">
        <ApplicationHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="flex-1 flex overflow-hidden">
          {renderActiveView()}
        </div>
      </div>
    </div>
  )
}
