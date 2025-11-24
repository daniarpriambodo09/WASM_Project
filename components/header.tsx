interface HeaderProps {
  totalComments: number
}

export default function Header({ totalComments }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-badge">
          <div className="status-dot"></div>
          Dashboard Analytics
        </div>
      </div>
      <h1>Purbaya Effect Analytics</h1>
      <p className="subtitle">
        Deep dive analysis • <span>Pertaruhan Ekonomi Indonesia</span> •{" "}
        <span id="total-comments-display">{totalComments.toLocaleString()}</span> responses
      </p>
    </header>
  )
}