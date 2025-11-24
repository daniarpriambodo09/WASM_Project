// ===== TOPICS SECTION =====
// purbaya-analytics/components/topics-section.tsx
"use client";

import { useEffect, useState } from "react";

interface Topic {
  id: number;
  label: string;
  keywords: string[];
  count: number;
}

const TopicsSection = () => {
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch("/topics.json");
        if (!res.ok) throw new Error("Failed to load topics");
        const data: Topic[] = await res.json();
        setTopics(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return (
      <section style={{ marginBottom: '48px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-cyan-400 mx-auto mb-4"></div>
          <p style={{ color: '#8892b0' }}>Loading topics...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section style={{ marginBottom: '48px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#ff3366', fontSize: '18px' }}>⚠️ Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ marginBottom: '48px' }}>
      {/* Section Title */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '24px' 
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b2ff7)',
            borderRadius: '2px',
            display: 'inline-block'
          }}></span>
          Topic Modeling • LDA Analysis
        </h2>
        <span style={{
          fontSize: '13px',
          color: '#8892b0',
          fontWeight: '500'
        }}>
          {topics?.length || 0} topics identified
        </span>
      </div>

      {/* Topics List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {topics && topics.length > 0 ? (
          topics.map((topic) => (
            <div
              key={topic.id}
              style={{
                background: 'linear-gradient(90deg, rgba(30, 33, 57, 0.6) 0%, rgba(37, 42, 74, 0.3) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderLeft: '4px solid #00d4ff',
                borderRadius: '12px',
                padding: '24px 28px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftWidth = '6px';
                e.currentTarget.style.background = 'linear-gradient(90deg, rgba(0, 212, 255, 0.05) 0%, rgba(37, 42, 74, 0.4) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftWidth = '4px';
                e.currentTarget.style.background = 'linear-gradient(90deg, rgba(30, 33, 57, 0.6) 0%, rgba(37, 42, 74, 0.3) 100%)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#00d4ff',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px'
                }}>
                  {topic.label}
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#00d4ff',
                  fontFamily: '"JetBrains Mono", monospace',
                  background: 'rgba(0, 212, 255, 0.15)',
                  padding: '4px 12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 212, 255, 0.3)'
                }}>
                  {topic.count} mentions
                </div>
              </div>
              <div style={{
                color: '#8892b0',
                lineHeight: '1.8',
                fontSize: '15px'
              }}>
                {topic.keywords.slice(0, 15).join(", ")}
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', color: '#8892b0', padding: '48px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <p>No topics available</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopicsSection;