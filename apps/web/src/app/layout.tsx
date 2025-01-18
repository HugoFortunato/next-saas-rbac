import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
