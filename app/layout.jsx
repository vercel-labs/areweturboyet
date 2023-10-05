import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Are We Turbo Yet?',
  description: 'Progress of enabling Turbopack in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><div id="root">{children}</div></body>
    </html>
  )
}
