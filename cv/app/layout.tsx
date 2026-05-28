import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'David Barreto Ferreira',
  description: 'Backend Engineer & Tech Lead',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const saved = localStorage.getItem('theme')
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
              if (saved === 'dark' || (!saved && prefersDark)) {
                document.documentElement.classList.add('dark')
              }
            })()
          `
        }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        {children}
      </body>
    </html>
  )
}