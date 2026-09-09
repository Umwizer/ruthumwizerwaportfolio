// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruth Umwizerwa — Software Engineer",
  description: "Ruth Umwizerwa, a Software Engineer focused on backend development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"  className="dark"suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}