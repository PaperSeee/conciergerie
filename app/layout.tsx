import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conciergerie Airbnb - Spécialiste Petits Propriétaires',
  description: 'Gestion complète de votre appartement Airbnb. Service personnalisé pour propriétaires d\'un seul logement. Tarifs accessibles et transparents.',
  keywords: 'conciergerie airbnb, gestion airbnb, petit propriétaire, appartement airbnb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
