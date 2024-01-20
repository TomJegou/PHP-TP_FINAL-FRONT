import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pussycat-agency',
  description: '',
}

export default function RootLayout({
  children,
}:
{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-outer-space flex flex-wrap flex-col justify-start items-center min-h-screen overflow-x-hidden'>{children}</body>
    </html>
  )
}
