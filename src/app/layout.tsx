"use client"

import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'

export const metadata = {
  title: 'dolphindesign',
  description: 'create web page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        
        {children}

        <Footer />
      </body>
    </html>
  )
}
