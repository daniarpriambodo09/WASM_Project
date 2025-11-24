"use client"

import { useEffect, useState } from "react"

interface AnalyticsData {
  totalComments: number
  avgLength: number
  primarySentiment: number
  dominantEmotion: number
  sentiment: Record<string, { count: number; pct: number }>
  emotion: Record<string, { count: number; pct: number }>
  keywords: [string, number][]
  topics: Record<string, string>
}

export function useAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/analytics/data")

        if (!response.ok) {
          throw new Error("Failed to fetch analytics data")
        }

        const analyticsData = await response.json()
        setData(analyticsData)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
