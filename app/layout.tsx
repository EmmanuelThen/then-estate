import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './ui/Footer'
import Navbar from './ui/Navbar'
import { PortfolioProvider } from './context/PortfolioContext'
import { ProformaProvider } from './context/ProFormaContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThenEstate',
  description: 'Home for all of your real estate needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ProformaProvider>
        <PortfolioProvider>
          <body className={`${inter.className} overflow-x-hidden`}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </PortfolioProvider>
      </ProformaProvider>
    </html>
  )
}
