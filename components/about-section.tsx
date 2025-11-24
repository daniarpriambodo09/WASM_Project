// purbaya-analytics/components/about-section.tsx
"use client";

export default function AboutSection() {
  const techStack = [
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "Pandas", icon: "🐼", category: "Data Processing" },
    { name: "NLTK", icon: "📚", category: "NLP" },
    { name: "Sastrawi", icon: "🇮🇩", category: "Stemming" },
    { name: "Scikit-learn", icon: "🤖", category: "ML" },
    { name: "Next.js", icon: "⚛️", category: "Frontend" },
    { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
    { name: "Chart.js", icon: "📈", category: "Visualization" },
  ];

  const features = [
    {
      icon: "📊",
      title: "Sentiment Analysis",
      description: "Advanced keyword-based analysis with emoji fusion and TextBlob fallback"
    },
    {
      icon: "🎯",
      title: "Topic Modeling",
      description: "LDA-based topic extraction identifying 5 key discussion themes"
    },
    {
      icon: "💭",
      title: "Emotion Detection",
      description: "7-category emotion classification: trust, joy, hope, sadness, fear, anger, happiness"
    },
    {
      icon: "☁️",
      title: "Word Cloud",
      description: "Visual representation of most frequent terms across all sentiments"
    }
  ];

  return (
    <div style={{ paddingBottom: '48px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '20px',
          background: 'rgba(0, 212, 255, 0.1)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          marginBottom: '16px'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#00d4ff' }}>
            ℹ️ ABOUT PROJECT
          </span>
        </div>
        <h1 style={{
          fontSize: '42px',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #ffffff 0%, #8892b0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Purbaya Effect Analytics
        </h1>
        <p style={{ fontSize: '16px', color: '#8892b0', lineHeight: '1.6' }}>
          A comprehensive sentiment analysis dashboard exploring public discourse around Indonesia's economic leadership
        </p>
      </div>

      {/* Overview Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        borderRadius: '20px',
        padding: '40px',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b2ff7)',
            borderRadius: '2px',
            display: 'inline-block'
          }}></span>
          Project Overview
        </h2>
        <p style={{
          fontSize: '15px',
          color: '#a0aec0',
          lineHeight: '1.8',
          marginBottom: '16px'
        }}>
          This dashboard presents a deep-dive analysis of <strong style={{ color: '#00d4ff' }}>2,631 YouTube comments</strong> discussing{' '}
          <strong style={{ color: '#00d4ff' }}>Purbaya</strong> and{' '}
          <strong style={{ color: '#00d4ff' }}>Sri Mulyani</strong> in the context of Indonesia's economic discourse.
          Using advanced NLP techniques and sentiment analysis, we uncover public sentiment, emotional responses, and key discussion topics.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '24px'
        }}>
          <div style={{
            padding: '16px',
            background: 'rgba(0, 212, 255, 0.05)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#00d4ff', marginBottom: '4px' }}>
              2,631
            </div>
            <div style={{ fontSize: '12px', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Comments Analyzed
            </div>
          </div>
          <div style={{
            padding: '16px',
            background: 'rgba(123, 47, 247, 0.05)',
            border: '1px solid rgba(123, 47, 247, 0.2)',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#7b2ff7', marginBottom: '4px' }}>
              5
            </div>
            <div style={{ fontSize: '12px', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Topic Models
            </div>
          </div>
          <div style={{
            padding: '16px',
            background: 'rgba(255, 0, 110, 0.05)',
            border: '1px solid rgba(255, 0, 110, 0.2)',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#ff006e', marginBottom: '4px' }}>
              7
            </div>
            <div style={{ fontSize: '12px', color: '#8892b0', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Emotion Categories
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b2ff7)',
            borderRadius: '2px',
            display: 'inline-block'
          }}></span>
          Key Features
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.6) 0%, rgba(37, 42, 74, 0.4) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{feature.icon}</div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#8892b0',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        borderRadius: '20px',
        padding: '40px',
        marginBottom: '32px'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b2ff7)',
            borderRadius: '2px',
            display: 'inline-block'
          }}></span>
          Methodology
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { label: "Data Source", value: "2,631 comments from YouTube video(s) discussing Indonesian economic policies" },
            { label: "Preprocessing", value: "Lowercase conversion, stopword removal (custom Indonesian list), stemming using Sastrawi" },
            { label: "Sentiment Analysis", value: "Hybrid approach: keyword-based detection + emoji analysis + TextBlob fallback" },
            { label: "Topic Modeling", value: "Latent Dirichlet Allocation (LDA) with 5 optimized topics" },
            { label: "Emotion Detection", value: "7-category classification: trust, joy, hope, sadness, fear, anger, happiness" },
          ].map((item, idx) => (
            <div key={idx} style={{
              padding: '16px 20px',
              background: 'rgba(0, 212, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderLeft: '3px solid #00d4ff',
              borderRadius: '8px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#00d4ff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '6px'
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#a0aec0',
                lineHeight: '1.6'
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <span style={{
            width: '4px',
            height: '24px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b2ff7)',
            borderRadius: '2px',
            display: 'inline-block'
          }}></span>
          Technology Stack
        </h2>
        <div className="tech-stack-grid">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.6) 0%, rgba(37, 42, 74, 0.4) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '24px 16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 212, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{tech.icon}</div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '6px'
              }}>
                {tech.name}
              </div>
              <div style={{
                fontSize: '10px',
                color: '#8892b0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {tech.category}
              </div>
            </div>
          ))}
        </div>
        
        <style jsx>{`
          .tech-stack-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 16px;
          }
          
          @media (max-width: 1400px) {
            .tech-stack-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .tech-stack-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
      </div>

      {/* Footer Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(30, 33, 57, 0.4) 0%, rgba(37, 42, 74, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        borderRadius: '20px',
        padding: '32px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '32px', marginBottom: '12px' }}>❤️</div>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#ffffff',
          marginBottom: '8px'
        }}>
          Built for Transparency
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#8892b0',
          lineHeight: '1.6',
          marginBottom: '16px'
        }}>
          Inspired by data journalism and NLP for social good.
          <br />
          Empowering informed discourse through data-driven insights.
        </p>
        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          fontSize: '12px',
          color: '#6b7280'
        }}>
          © {new Date().getFullYear()} • Purbaya Effect Analytics • All data anonymized for privacy
        </div>
      </div>
    </div>
  );
}