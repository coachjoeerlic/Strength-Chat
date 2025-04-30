import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strength Chat',
  description: 'A PWA chat application for strength training enthusiasts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 