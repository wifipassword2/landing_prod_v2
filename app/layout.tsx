import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Computer repairs service',
  description: 'Computer repairs service landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
          <link rel="icon" href="favicon.ico" />
          <link rel="canonical" href="https://www.service8.ca/"/>
        </head>
      <body id='app' className={`${inter.className}`}>{children}</body>
    </html>
  )
}
