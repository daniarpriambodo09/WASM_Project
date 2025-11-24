// ===== KEYWORDS SECTION =====
// purbaya-analytics/components/keywords-section.tsx
interface KeywordsSectionProps {
  keywords: [string, number][]
}

export default function KeywordsSection({ keywords }: KeywordsSectionProps) {
  const transformedKeywords = keywords.slice(0, 10).map(([name, count]) => ({
    name: name.toLowerCase(),
    count,
  }));

  return (
    <section style={{ marginBottom: '48px' }}>
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
          Top Keywords Frequency
        </h2>
      </div>

      {/* Keywords Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px'
      }}>
        {transformedKeywords.map((keyword, idx) => (
          <div
            key={idx}
            style={{
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(123, 47, 247, 0.08) 100%)',
              border: '1px solid rgba(0, 212, 255, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 212, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600'
            }}>
              {keyword.name}
            </span>
            <span style={{
              color: '#00d4ff',
              fontSize: '16px',
              fontWeight: '700',
              fontFamily: '"JetBrains Mono", monospace',
              background: 'rgba(0, 212, 255, 0.15)',
              padding: '4px 12px',
              borderRadius: '8px'
            }}>
              {keyword.count.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}