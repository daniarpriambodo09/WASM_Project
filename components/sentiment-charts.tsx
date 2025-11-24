"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"
import ChartDataLabels from "chartjs-plugin-datalabels"

interface SentimentChartProps {
  sentiment: Record<string, { count: number; pct: number }>
}

export default function SentimentCharts({ sentiment }: SentimentChartProps) {
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const pieChartRef = useRef<HTMLCanvasElement>(null)
  const barChartInstance = useRef<Chart | null>(null)
  const pieChartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    // Di dalam useEffect, sebelum membuat chart
    Chart.defaults.color = '#8892b0';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.06)';
    Chart.defaults.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    Chart.register(ChartDataLabels)

    const labels = Object.keys(sentiment).map((k) => k.charAt(0).toUpperCase() + k.slice(1))
    const counts = Object.values(sentiment).map((v) => v.count)
    const percentages = Object.values(sentiment).map((v) => v.pct)
    const colors = ["#00ff88", "#8892b0", "#ff3366"]

    // Bar Chart - Sentiment Distribution
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext("2d")
      if (ctx) {
        barChartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Sentiment Count",
                data: counts,
                backgroundColor: colors,
                borderRadius: 8,
                borderSkipped: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              datalabels: {
                color: "#ffffff",
                font: { weight: "bold", size: 12 },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: { color: "rgba(255,255,255,0.05)" },
                ticks: { color: "#8892b0" },
              },
              x: { grid: { display: false }, ticks: { color: "#8892b0" } },
            },
          },
        })
      }
    }

    // Pie Chart - Sentiment Breakdown
    if (pieChartRef.current) {
      const ctx = pieChartRef.current.getContext("2d")
      if (ctx) {
        pieChartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels,
            datasets: [
              {
                data: percentages,
                backgroundColor: colors,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: { color: "#ffffff", padding: 20 },
              },
              datalabels: {
                color: "#ffffff",
                font: { weight: "bold" },
              },
            },
          },
        })
      }
    }

    return () => {
      barChartInstance.current?.destroy()
      pieChartInstance.current?.destroy()
    }
  }, [sentiment])

  return (
    <div className="chart-grid">
      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title">Sentiment Distribution</div>
        </div>
        <div className="chart-wrapper">
          <canvas ref={barChartRef}></canvas>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title">Sentiment Breakdown</div>
        </div>
        <div className="pie-wrapper">
          <canvas ref={pieChartRef}></canvas>
        </div>
      </div>
    </div>
  )
}
