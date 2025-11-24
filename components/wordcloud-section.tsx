// ===== WORDCLOUD SECTION =====
// purbaya-analytics/components/wordcloud-section.tsx
"use client";

import Image from "next/image";
import ComparisonSection from "./comparison-section";

interface WordcloudSectionProps {
  keywords: [string, number][];
  sentiment?: {
    positive?: { pct: number };
    negative?: { pct: number };
    neutral?: { pct: number };
  };
}

const WordCloudCard = ({
  title,
  imagePath,
  altText,
  width = 700,
  height = 350,
}: {
  title: string;
  imagePath: string;
  altText: string;
  width?: number;
  height?: number;
}) => (
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
        {title}
      </h2>
    </div>

    {/* Image Container */}
    <div style={{
      background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.04)',
      borderRadius: '20px',
      padding: '32px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px'
    }}>
      <Image
        src={imagePath}
        alt={altText}
        width={width}
        height={height}
        className="max-w-full h-auto"
        style={{
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}
        priority
      />
    </div>
  </div>
);

export default function WordcloudSection({ keywords, sentiment }: WordcloudSectionProps) {
  return (
    <div>
      {/* Complete Dataset Word Cloud */}
      <WordCloudCard
        title="Complete Dataset • Word Cloud"
        imagePath="/wordcloud_all.png"
        altText="Word Cloud - All Comments"
        width={900}
        height={500}
      />

      {/* Positive & Negative Word Clouds Side by Side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '32px',
        marginBottom: '48px'
      }}>
        <div>
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
              Positive Sentiment • Cloud
            </h2>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '350px'
          }}>
            <Image
              src="/wordcloud_positive.png"
              alt="Word Cloud - Positive Sentiment"
              width={500}
              height={300}
              className="max-w-full h-auto"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>

        <div>
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
              Negative Sentiment • Cloud
            </h2>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '350px'
          }}>
            <Image
              src="/wordcloud_negative.png"
              alt="Word Cloud - Negative Sentiment"
              width={500}
              height={300}
              className="max-w-full h-auto"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <ComparisonSection />
    </div>
  );
}