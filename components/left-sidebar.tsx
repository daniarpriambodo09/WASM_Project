// purbaya-analysis/components/left-sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart2, Info } from "lucide-react";

export default function LeftSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/overview", label: "Overview", icon: LayoutDashboard },
    { href: "/analysis", label: "Analysis", icon: BarChart2 },
    { href: "/about", label: "About", icon: Info },
  ];

  const sidebarStyles = {
    container: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '260px',
      height: '100vh',
      background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.98) 0%, rgba(21, 25, 50, 0.98) 100%)',
      backdropFilter: 'blur(20px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.08)',
      display: 'flex',
      flexDirection: 'column' as const,
      zIndex: 50,
    },
    header: {
      padding: '24px 20px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logo: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    logoText: {
      color: 'white',
      fontWeight: 'bold' as const,
      fontSize: '18px',
    },
    brandTitle: {
      color: 'white',
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: 1.3,
      margin: 0,
    },
    brandSubtitle: {
      fontSize: '12px',
      color: '#6b7280',
      margin: 0,
    },
    nav: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column' as const,
      padding: '24px 16px',
      minHeight: 0,
    },
    menu: {
      width: '100%',
    },
    footer: {
      padding: '16px 20px',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    status: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '12px',
    },
    statusDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#4ade80',
      animation: 'pulse 2s ease-in-out infinite',
    },
    statusText: {
      fontSize: '11px',
      fontWeight: 600,
      color: '#00d4ff',
    },
    copyright: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '11px',
      color: '#4b5563',
    },
  };

  const getMenuItemStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 16px',
    marginBottom: '6px',
    borderRadius: '10px',
    color: isActive ? 'white' : '#9ca3af',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    position: 'relative' as const,
    fontSize: '14px',
    fontWeight: isActive ? 600 : 500,
    background: isActive 
      ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(123, 47, 247, 0.15) 100%)' 
      : 'transparent',
    border: isActive ? '1px solid rgba(0, 212, 255, 0.3)' : '1px solid transparent',
    boxShadow: isActive ? '0 4px 16px rgba(0, 212, 255, 0.15)' : 'none',
  });

  const activeIndicatorStyle = {
    position: 'absolute' as const,
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '3px',
    height: '28px',
    borderRadius: '0 3px 3px 0',
    background: 'linear-gradient(180deg, #00d4ff 0%, #7b2ff7 100%)',
  };

  return (
    <aside style={sidebarStyles.container}>
      {/* Header Section */}
      <div style={sidebarStyles.header}>
        <div style={sidebarStyles.logoWrapper}>
          <div style={sidebarStyles.logo}>
            <span style={sidebarStyles.logoText}>P</span>
          </div>
          <div>
            <h1 style={sidebarStyles.brandTitle}>Purbaya Effect</h1>
            <p style={sidebarStyles.brandSubtitle}>Analytics</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav style={sidebarStyles.nav}>
        <div style={sidebarStyles.menu}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                style={getMenuItemStyle(isActive)}
              >
                {isActive && <div style={activeIndicatorStyle} />}
                <Icon 
                  size={20} 
                  strokeWidth={2}
                  style={{ color: isActive ? '#00d4ff' : 'currentColor' }}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div style={sidebarStyles.footer}>
        <div style={sidebarStyles.status}>
          <div style={sidebarStyles.statusDot} />
          <span style={sidebarStyles.statusText}>System Active</span>
        </div>
        <div style={sidebarStyles.copyright}>
          <span>© {new Date().getFullYear()}</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </aside>
  );
}