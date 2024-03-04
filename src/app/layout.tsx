import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Artemis Digital Solutions',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <body className={`${montserrat.className} `}>{children}</body>
    </html>
  )
}
