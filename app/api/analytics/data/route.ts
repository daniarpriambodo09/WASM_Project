import { supabase } from "../../../../lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { data, error } = await supabase.from("data_analisis_wasm").select("*")

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("[v0] Raw data from Supabase:", data?.length, "records")
    const transformedData = transformAnalyticsData(data || [])
    console.log("[v0] Transformed data:", {
      keywords: transformedData.keywords.length,
      topics: transformedData.topics.length,
    })

    return NextResponse.json(transformedData)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Failed to fetch analytics data" }, { status: 500 })
  }
}

interface RawData {
  id: string
  sentiment?: string
  emotion?: string
  keywords?: string
  topic?: string
  komentar?: string
  processed_comment?: string
  raw_comment?: string
  dominant_topic?: number
  [key: string]: any
}

interface TransformedData {
  totalComments: number
  avgLength: number
  primarySentiment: number
  dominantEmotion: number
  sentiment: Record<string, { count: number; pct: number }>
  emotion: Record<string, { count: number; pct: number }>
  keywords: [string, number][]
  topics: Array<{ id: number; label: string; keywords: string[]; count: number }>
}

function transformAnalyticsData(rawData: RawData[]): TransformedData {
  const totalComments = rawData.length

  if (rawData.length > 0) {
    console.log("[v0] First record sample:", JSON.stringify(rawData[0], null, 2))
    console.log("[v0] All columns:", Object.keys(rawData[0]))
  }

  // Calculate average comment length
  const avgLength =
    rawData.reduce((sum, item) => {
      const textLength = (item.processed_comment || item.raw_comment || "").toString().length
      return sum + textLength
    }, 0) / Math.max(totalComments, 1)

  // Count sentiments
  const sentimentCounts: Record<string, number> = {
    positive: 0,
    neutral: 0,
    negative: 0,
  }

  rawData.forEach((item) => {
    const sentiment = (item.sentiment || "neutral").toLowerCase()
    if (sentiment in sentimentCounts) {
      sentimentCounts[sentiment]++
    }
  })

  // Count emotions
  const emotionCounts: Record<string, number> = {}

  rawData.forEach((item) => {
    const emotion = (item.emotion || "").toLowerCase().trim()
    if (emotion) {
      emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1
    }
  })

  const keywordCounts: Record<string, number> = {}

  rawData.forEach((item) => {
    const commentText = item.processed_comment || item.raw_comment || ""

    if (commentText) {
      const words = commentText
        .toString()
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 2)

      words.forEach((word) => {
        const cleaned = word.replace(/[^\w]/g, "")
        if (cleaned.length > 2) {
          keywordCounts[cleaned] = (keywordCounts[cleaned] || 0) + 1
        }
      })
    }
  })

  console.log("[v0] Keywords found:", Object.keys(keywordCounts).length, keywordCounts)

  const topicCounts: Record<number, number> = {}

  rawData.forEach((item) => {
    const topicId = item.dominant_topic

    if (topicId !== null && topicId !== undefined && !isNaN(topicId)) {
      topicCounts[topicId] = (topicCounts[topicId] || 0) + 1
    }
  })

  console.log("[v0] Topics found:", Object.keys(topicCounts).length, topicCounts)

  // Transform sentiment data
  const sentimentData: Record<string, { count: number; pct: number }> = {}
  Object.entries(sentimentCounts).forEach(([key, count]) => {
    sentimentData[key] = {
      count,
      pct: Math.round((count / totalComments) * 10000) / 100,
    }
  })

  // Transform emotion data
  const emotionData: Record<string, { count: number; pct: number }> = {}
  Object.entries(emotionCounts).forEach(([key, count]) => {
    emotionData[key] = {
      count,
      pct: Math.round((count / totalComments) * 10000) / 100,
    }
  })

  const stopWords = new Set(["yang", "dan", "apa", "ini", "itu", "ada", "dari", "ke", "di", "untuk", "dengan", "atau"])
  const topKeywords = Object.entries(keywordCounts)
    .filter(([kw]) => !stopWords.has(kw))
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([kw, count]) => [kw, count] as [string, number])

  const topicKeywordsMap: Record<number, string[]> = {
    0: ["purbaya", "rakyat", "sri", "mulyani", "pajak", "pro", "ekonomi", "negara", "mau", "tim"],
    1: ["purbaya", "bijak", "apa", "uang", "beliau", "ekonomi", "semua", "tri", "indonesia", "baru"],
    2: ["rokok", "naik", "cukai", "purbaya", "rakyat", "gak", "kalau", "bukan", "turun", "kerja"],
    3: ["uang", "bank", "buat", "duit", "usaha", "masyarakat", "judol", "banyak", "kerja", "kredit"],
    4: ["ekonomi", "indonesia", "rakyat", "baik", "purbaya", "investor", "negara", "asing", "banyak", "buat"],
  }

  // Format topics with keywords
  const topTopics = Object.entries(topicCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([topicIdStr, count]) => {
      const topicId = Number.parseInt(topicIdStr)
      return {
        id: topicId,
        label: `Topic ${String(topicId + 1).padStart(2, "0")}`,
        keywords: topicKeywordsMap[topicId] || [],
        count,
      }
    })

  console.log("[v0] Top keywords:", topKeywords.length, topKeywords)
  console.log("[v0] Top topics:", topTopics.length, topTopics)

  // Get primary sentiment percentage
  const primarySentiment = sentimentData.positive?.pct || 0

  // Get dominant emotion percentage
  const dominantEmotion = Math.max(...Object.values(emotionData).map((e) => e.pct))

  return {
    totalComments,
    avgLength: Math.round(avgLength),
    primarySentiment,
    dominantEmotion,
    sentiment: sentimentData,
    emotion: emotionData,
    keywords: topKeywords,
    topics: topTopics,
  }
}
