import type { ReactNode } from "react";
import "@/styles/globals.css";

/**
 * Props for the root layout.
 */
export type RootLayoutProps = {
  children: ReactNode;
};

/**
 * Root layout shared across the application.
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
