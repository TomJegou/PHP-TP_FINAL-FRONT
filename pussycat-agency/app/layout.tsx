import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pussycat-agency',
  description: '',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='bg-outer-space flex flex-wrap flex-col justify-center items-center min-h-screen'>{children}</body>
    </html>
  )
}
