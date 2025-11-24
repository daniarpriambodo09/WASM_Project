"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import ChartDataLabels from "chartjs-plugin-datalabels"

interface EmotionData {
  [key: string]: { count: number; pct: number }
}

interface EmotionStatsProps {
  emotion: EmotionData
}

const emotionColors: Record<string, string> = {
  trust: "#4caf50",
  joy: "#ffd700",
  hope: "#00bcd4",
  sadness: "#2196f3",
  fear: "#9c27b0",
  happiness: "#ff69b4",
  anger: "#f44336",
}

export default function EmotionStats({ emotion }: EmotionStatsProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  const emotionsData = Object.entries(emotion)
    .map(([name, data]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value: data.pct,
      class: name,
      color: emotionColors[name] || "#999999",
    }))
    .sort((a, b) => b.value - a.value)

  useEffect(() => {
    Chart.defaults.color = '#8892b0';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.06)';
    Chart.register(ChartDataLabels)

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: emotionsData.map((e) => e.name),
            datasets: [
              {
                label: "Emotion %",
                data: emotionsData.map((e) => e.value),
                backgroundColor: emotionsData.map((e) => e.color),
                borderRadius: 8,
                borderSkipped: false,
              },
            ],
          },
          options: {
            indexAxis: "y" as const,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              datalabels: { color: "#ffffff", font: { weight: "bold" } },
            },
            scales: {
              x: {
                beginAtZero: true,
                grid: { color: "rgba(255,255,255,0.05)" },
                ticks: { color: "#8892b0" },
              },
              y: { grid: { display: false }, ticks: { color: "#8892b0" } },
            },
          },
        })
      }
    }

    return () => {
      chartInstance.current?.destroy()
    }
  }, [emotionsData])

  return (
    <div className="chart-section">
      <div className="chart-header">
        <div className="chart-title">Emotional Response Spectrum</div>
      </div>
      <div className="chart-wrapper">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="emotion-stats">
        {emotionsData.map((emotion) => (
          <div key={emotion.class} className={`emotion-item ${emotion.class}`}>
            <div className="emotion-label">{emotion.name}</div>
            <div className="emotion-value">{emotion.value.toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}
