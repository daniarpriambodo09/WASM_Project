// purbaya-analytics/components/comparison-section.tsx 
"use client";

import { useEffect, useState } from "react";

interface ComparisonData {
  purbaya: {
    total: number;
    positive: number;
    neutral: number;
    negative: number;
  };
  sri: {
    total: number;
    positive: number;
    neutral: number;
    negative: number;
  };
}

interface SentimentData {
  total: number;
  positive: number;
  neutral: number;
  negative: number;
}

// Progress Bar Component
const ProgressBar = ({ value, gradient }: { value: number; gradient: string }) => (
  <div style={{
    position: 'relative',
    width: '100%',
    height: '10px',
    background: 'rgba(30, 33, 57, 0.5)',
    borderRadius: '20px',
    overflow: 'hidden'
  }}>
    <div
      style={{
        height: '100%',
        width: `${value}%`,
        background: gradient,
        transition: 'width 0.7s ease-out',
        borderRadius: '20px'
      }}
    />
  </div>
);

// Sentiment Row Component
const SentimentRow = ({ 
  label, 
  value, 
  color, 
  gradient 
}: { 
  label: string; 
  value: number; 
  color: string; 
  gradient: string;
}) => (
  <div style={{ marginBottom: '16px' }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    }}>
      <span style={{
        fontSize: '11px',
        fontWeight: '700',
        color: color,
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {label}
      </span>
      <span style={{
        fontSize: '15px',
        fontWeight: '700',
        color: color,
        fontFamily: '"JetBrains Mono", monospace'
      }}>
        {value.toFixed(1)}%
      </span>
    </div>
    <ProgressBar value={value} gradient={gradient} />
  </div>
);

// Person Card Component
const PersonCard = ({ 
  name, 
  data, 
  icon 
}: { 
  name: string; 
  data: SentimentData; 
  icon: string;
}) => {
  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.6) 0%, rgba(37, 42, 74, 0.4) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      borderRadius: '16px',
      padding: '32px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {/* Top Gradient Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #00d4ff, #7b2ff7, #ff006e)'
      }} />

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(123, 47, 247, 0.2) 100%)',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          flexShrink: 0
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '4px'
          }}>
            {name}
          </h3>
          <div style={{
            fontSize: '12px',
            color: '#8892b0',
            fontFamily: '"JetBrains Mono", monospace'
          }}>
            {data.total.toLocaleString()} mentions analyzed
          </div>
        </div>
      </div>

      {/* Sentiment Breakdown */}
      <div>
        <SentimentRow 
          label="Positive" 
          value={data.positive} 
          color="#00ff88" 
          gradient="linear-gradient(90deg, #00ff88, #00d4ff)" 
        />
        <SentimentRow 
          label="Neutral" 
          value={data.neutral} 
          color="#8892b0" 
          gradient="linear-gradient(90deg, #8892b0, #b0b8d0)" 
        />
        <SentimentRow 
          label="Negative" 
          value={data.negative} 
          color="#ff3366" 
          gradient="linear-gradient(90deg, #ff3366, #ff006e)" 
        />
      </div>
    </div>
  );
};

export default function ComparisonSection() {
  const [data, setData] = useState<ComparisonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComparison = async () => {
      try {
        const res = await fetch("/comparison.json");
        if (!res.ok) throw new Error("Failed to load comparison data");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching comparison data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComparison();
  }, []);

  if (loading) {
    return (
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '20px',
          padding: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-cyan-400 mr-4"></div>
          <span style={{ color: '#8892b0', fontSize: '15px' }}>Loading comparison data...</span>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.04)',
          borderRadius: '20px',
          padding: '48px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#ff3366', fontSize: '16px' }}>
            ⚠️ Failed to load comparison data
          </p>
        </div>
      </div>
    );
  }

  const { purbaya, sri } = data;

  return (
    <div style={{ marginBottom: '48px' }}>
      {/* Section Title */}
      <div style={{ marginBottom: '24px' }}>
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
          Sentiment Comparison Analysis
        </h2>
      </div>

      {/* Comparison Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
        gap: '32px'
      }}>
        <PersonCard name="Purbaya" data={purbaya} icon="👤" />
        <PersonCard name="Sri Mulyani" data={sri} icon="👤" />
      </div>
    </div>
  );
}