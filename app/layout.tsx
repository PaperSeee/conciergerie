import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ilias Conciergerie - Spécialiste Petits Propriétaires Airbnb',
  description: 'Gestion complète de votre appartement Airbnb à Bruxelles. Service personnalisé pour propriétaires d\'un seul logement. Tarifs accessibles et transparents.',
  keywords: 'conciergerie airbnb bruxelles, gestion airbnb, petit propriétaire, appartement airbnb, ilias conciergerie',
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
