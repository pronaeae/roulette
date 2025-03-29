import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marble Roulette',
  description: 'A lucky draw by dropping marbles',
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