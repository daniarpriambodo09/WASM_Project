"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/header";
import MetricsGrid from "@/components/metrics-grid";
import SentimentCharts from "@/components/sentiment-charts";
import EmotionStats from "@/components/emotion-stats";
import KeywordsSection from "@/components/keywords-section";
import TopicsSection from "@/components/topics-section";
import WordcloudSection from "@/components/wordcloud-section";
import { useAnalytics } from "@/lib/useAnalytics";
// import RightSidebar from "@/components/right-sidebar"; // <-- baru!
import "./dashboard.css";

export default function Dashboard() {
  const { data, loading, error } = useAnalytics();

  if (loading) {
    return (
      <>
        <div className="noise"></div>
        <div className="container flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading analytics data...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !data) {
    return (
      <>
        <div className="noise"></div>
        <div className="container flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-500 mb-2">Error loading data</p>
            <p className="text-gray-400 text-sm">{error || "Unknown error"}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="noise"></div>

      {/* === MAIN CONTENT === */}
      <div className="container relative">
        {/* ====== SECTION 1: OVERVIEW ====== */}
        <section id="overview" className="mb-12">
          <Header totalComments={data.totalComments} />
          <MetricsGrid data={data} />
          <SentimentCharts sentiment={data.sentiment} />
          <EmotionStats emotion={data.emotion} />
        </section>

        {/* ====== SECTION 2: ANALYSIS ====== */}
        <section id="analysis" className="mb-12">
          <div className="chart-section">
            <div className="chart-header">
              <div className="chart-title">🔍 Deep Analysis • Keywords, Topics & Word Cloud</div>
            </div>
          </div>
          <KeywordsSection keywords={data.keywords} />
          <TopicsSection />
          <WordcloudSection keywords={data.keywords} sentiment={data.sentiment} />
        </section>

        {/* ====== SECTION 3: ABOUT ====== */}
        <section id="about" className="mb-12">
          <AboutSection />
        </section>
      </div>

      {/* ====== RIGHT SIDEBAR ====== */}
      {/* <RightSidebar /> */}
    </>
  );
}

// ====== COMPONENT: ABOUT SECTION ======
function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="chart-section">
        <div className="chart-header">
          <div className="chart-title">ℹ️ About This Dashboard</div>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="mb-4">
            This dashboard presents a deep-dive analysis of YouTube comments
            discussing <strong>Purbaya</strong> and <strong>Sri Mulyani</strong>
            in the context of Indonesia's economic discourse.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-white">Methodology</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Data Source</strong>: 2,631 comments from YouTube video(s)
            </li>
            <li>
              <strong>Preprocessing</strong>: Lowercase, stopword removal (custom Indonesian list), stemming (Sastrawi)
            </li>
            <li>
              <strong>Sentiment Analysis</strong>: Keyword-based + emoji fusion + TextBlob fallback
            </li>
            <li>
              <strong>Topic Modeling</strong>: Latent Dirichlet Allocation (LDA) with 5 topics
            </li>
            <li>
              <strong>Emotion Detection</strong>: 7-category classification (trust, joy, hope, etc.)
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3 text-white">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Python", icon: "🐍" },
              { name: "Pandas/NLTK", icon: "📊" },
              { name: "Sastrawi", icon: "🇮🇩" },
              { name: "Scikit-learn", icon: "🤖" },
              { name: "Next.js", icon: "⚛️" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Chart.js", icon: "📈" },
              { name: "Vercel", icon: "☁️" },
            ].map((item) => (
              <div key={item.name} className="bg-gray-800 p-4 rounded-lg text-center">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-sm">{item.name}</div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3 text-white">Credits</h3>
          <p>
            Built with ❤️ for transparency in public discourse.
            <br />
            Inspired by data journalism and NLP for social good.
          </p>

          <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-500">
            © {new Date().getFullYear()} • Purbaya Effect Analytics • All data anonymized.
          </div>
        </div>
      </div>
    </div>
  );
}