import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Computer Repairs and Tech Support in Toronto, York | Service №8',
  description: 'Service №8 offers computer repair and tech support services around GTA. Specializing in solving common computer and laptop problems, including diagnostics, maintenance, malware removal, and more. On-site or drop-off available. Contact us today!',
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
      <body id='app' className={`${inter.className}`}>{children}
        <Analytics />
      </body>
    </html>
  )
}
