import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Jheifer | Wedding',
  description: 'Join us as we celebrate our wedding day',
  keywords: ['wedding', 'Jhe', 'Eifer', 'RSVP'],
  authors: [{ name: 'Jerome & Jennifer' }],
  openGraph: {
    title: 'Jheifer | Wedding',
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
