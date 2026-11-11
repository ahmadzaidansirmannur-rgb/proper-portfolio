import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import './globals.css';

// Import Inconsolata directly from Google Fonts
const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ligconsolata',
});

export const metadata: Metadata = {
  title: 'Zaidan - Portfolio',
  description: 'Digital Artist & Interior Designer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <body className="font-sans bg-[#FFFCE8] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}