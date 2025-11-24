interface MetricsData {
  totalComments: number
  avgLength: number
  primarySentiment: number
  dominantEmotion: number
}

interface MetricsGridProps {
  data: MetricsData
}

export default function MetricsGrid({ data }: MetricsGridProps) {
  const metrics = [
    {
      label: "Total Comments",
      icon: "💬",
      value: data.totalComments.toLocaleString(),
      subtitle: "Analyzed responses",
    },
    {
      label: "Avg Length",
      icon: "📝",
      value: data.avgLength,
      subtitle: "characters per comment",
    },
    {
      label: "Primary Sentiment",
      icon: "😊",
      value: `${data.primarySentiment}%`,
      subtitle: "Positive responses",
    },
    {
      label: "Dominant Emotion",
      icon: "🤝",
      value: `${data.dominantEmotion}%`,
      subtitle: "Trust detected",
    },
  ]

  return (
    <div className="metrics-grid">
      {metrics.map((metric, idx) => (
        <div key={idx} className="metric-card">
          <div className="metric-header">
            <div className="metric-label">{metric.label}</div>
            <div className="metric-icon">{metric.icon}</div>
          </div>
          <div className="metric-value">{metric.value}</div>
          <div className="metric-subtitle">{metric.subtitle}</div>
        </div>
      ))}
    </div>
  )
}