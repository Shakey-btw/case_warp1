import type { Metadata } from 'next'
import { Luckiest_Guy, Merriweather_Sans } from 'next/font/google'
import './globals.css'

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest',
})

const merriweatherSans = Merriweather_Sans({
  weight: '800',
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Case Warp1',
  description: 'Got the bA**$?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${luckiestGuy.variable} ${merriweatherSans.variable}`}>
        {children}
      </body>
    </html>
  )
}

