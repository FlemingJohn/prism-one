'use client'

import { useState } from "react"

export function useSidebarState() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function toggleSidebar() {
    setIsCollapsed((previous) => !previous)
  }

  return {
    isCollapsed,
    toggleSidebar,
  }
}
