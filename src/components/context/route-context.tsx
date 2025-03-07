"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type RouteContextType = {
  currentRoute: string
  navigateTo: (path: string) => void
  setInitialRoute: (path: string) => void
}

const RouteContext = createContext<RouteContextType | undefined>(undefined)

export function RouteProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState("/")
  const [isInitialized, setIsInitialized] = useState(false)

  const setInitialRoute = (path: string) => {
    if (!isInitialized) {
      setCurrentRoute(path)
      setIsInitialized(true)
    }
  }

  const navigateTo = (path: string) => {
    setCurrentRoute(path)
    window.scrollTo(0, 0)
  }

  return <RouteContext.Provider value={{ currentRoute, navigateTo, setInitialRoute }}>{children}</RouteContext.Provider>
}

export function useRoute() {
  const context = useContext(RouteContext)
  if (context === undefined) {
    throw new Error("useRoute must be used within a RouteProvider")
  }
  return context
}

