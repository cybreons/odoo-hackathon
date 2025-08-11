import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuickCourt - AI-Powered Sports Facility Booking Platform',
  description: 'Join 2.5M+ players using AI-powered recommendations to book premium sports facilities across 847+ cities in India. Trusted by millions worldwide.',
  keywords: 'AI sports booking, smart court booking, facility booking, badminton, tennis, football, basketball, sports venues, artificial intelligence',
  authors: [{ name: 'QuickCourt Team' }],
  creator: 'QuickCourt',
  publisher: 'QuickCourt',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quickcourt.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'QuickCourt - AI-Powered Sports Facility Booking Platform',
    description: 'Join 2.5M+ players using AI-powered recommendations. Book premium sports facilities instantly.',
    url: 'https://quickcourt.ai',
    siteName: 'QuickCourt',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QuickCourt - AI-Powered Sports Facility Booking',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickCourt - AI-Powered Sports Facility Booking Platform',
    description: 'Join 2.5M+ players using AI-powered recommendations. Book premium sports facilities instantly.',
    images: ['/og-image.jpg'],
    creator: '@quickcourt',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}