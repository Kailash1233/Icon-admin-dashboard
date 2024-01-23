import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Icon admin dashboard',
  description: 'View all event registrations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body classNameName={inter.classNameName}>{children}</body>
    </html>
  )
}
