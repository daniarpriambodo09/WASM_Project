// purbaya-analytics/app/overview/page.tsx
"use client";

import Header from "../../components/header";
import MetricsGrid from "../../components/metrics-grid";
import SentimentCharts from "../../components/sentiment-charts";
import EmotionStats from "../../components/emotion-stats";
import { useAnalytics } from "../../lib/useAnalytics";

export default function OverviewPage() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <div className="container">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container">
        <div className="text-center py-12">
          <p className="text-red-500 mb-2">Error loading data</p>
          <p className="text-gray-400 text-sm">{error || "Unknown error"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Header totalComments={data.totalComments} />
      <MetricsGrid data={data} />
      <SentimentCharts sentiment={data.sentiment} />
      <EmotionStats emotion={data.emotion} />
    </div>
  );
}