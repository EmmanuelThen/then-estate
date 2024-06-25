'use client'
import { NextUIProvider } from "@nextui-org/react";
import './globals.css'
import './css/style.css'
import { metadata } from './metadata';
import { Questrial } from 'next/font/google'
import Footer from './ui/Footer'
import Navbar from './ui/Navbar'
import { PortfolioProvider } from './context/PortfolioContext'
import { ProformaProvider } from './context/ProFormaContext'
import Header from './components/ui/header'
import { Providers } from "./providers";



const inter = Questrial({ subsets: ['latin'], weight: '400' })

// export const metadata: Metadata = {
//   title: 'ThenEstate',
//   description: 'Home for all of your real estate needs',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        {/* Metadata will be applied here */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      {/* <NextUIProvider> */}
        <ProformaProvider>
          <PortfolioProvider>
            <body className={`${inter.className} antialiased bg-gray-50 text-gray-900 tracking-tight`}>
              {/* <Navbar /> */}
              {/* <Header /> */}
              <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
                <Providers>{children}</Providers>
              </div>
              {/* <Footer /> */}
            </body>
          </PortfolioProvider>
        </ProformaProvider>
      {/* </NextUIProvider> */}
    </html>
  )
}
