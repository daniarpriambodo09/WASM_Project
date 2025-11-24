// ===== ANALYSIS PAGE =====
// purbaya-analytics/app/analysis/page.tsx
"use client";

import KeywordsSection from "../../components/keywords-section";
import TopicsSection from "../../components/topics-section";
import WordcloudSection from "../../components/wordcloud-section";
import { useAnalytics } from "../../lib/useAnalytics";

export default function AnalysisPage() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <div className="container">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">Loading deep analysis...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="container">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-red-500 text-xl mb-2">⚠️ Error loading data</p>
            <p className="text-gray-400 text-sm">{error || "Unknown error occurred"}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <KeywordsSection keywords={data.keywords} />
      <TopicsSection />
      <WordcloudSection keywords={data.keywords} sentiment={data.sentiment} />
    </div>
  );
}