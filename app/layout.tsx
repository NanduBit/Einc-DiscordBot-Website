import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Einc Discord Bot',
  description: 'Your Favorate Discord Bot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
