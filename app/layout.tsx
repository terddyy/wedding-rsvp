import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Sarah & Michael | Wedding',
  description: 'Join us as we celebrate our wedding day',
  keywords: ['wedding', 'Sarah', 'Michael', 'RSVP'],
  authors: [{ name: 'Sarah & Michael' }],
  openGraph: {
    title: 'Sarah & Michael | Wedding',
    description: 'Join us as we celebrate our wedding day',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
