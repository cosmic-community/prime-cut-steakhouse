import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prime Cut Steakhouse | Fine Dining Experience',
  description: 'Experience exceptional dry-aged steaks, curated wine pairings, and world-class culinary artistry at Prime Cut Steakhouse. Reserve your table today.',
  keywords: ['steakhouse', 'fine dining', 'dry-aged steaks', 'wine pairing', 'prime beef', 'restaurant'],
  openGraph: {
    title: 'Prime Cut Steakhouse | Fine Dining Experience',
    description: 'Experience exceptional dry-aged steaks, curated wine pairings, and world-class culinary artistry.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-neutral-100`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}