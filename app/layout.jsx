import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:
    'Minaret Shop - Premium Dry Fruits, Honey, Islamic Items, Fashion & Dresses',
  description:
    'Discover a wide range of premium dry fruits, natural honey, authentic Islamic items, and trendy fashion & dresses at Minaret Shop. Shop quality products at great prices.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-800`}>{children}</body>
    </html>
  )
}
