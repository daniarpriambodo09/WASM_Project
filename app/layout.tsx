// purbaya-analytics/app/layout.tsx
import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSidebar from "../components/left-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Purbaya Effect Analytics",
  description: "Deep dive analysis dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="noise"></div>
        <LeftSidebar />
        <main style={{ 
          marginLeft: '260px',
          minHeight: '100vh',
          position: 'relative'
        }}>
          {children}
        </main>
      </body>
    </html>
  );
}