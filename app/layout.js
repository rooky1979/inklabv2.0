import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The ink lab by Steve Kretz',
  icons: {
    icon: '/inkLogo.png',
  },
  description: 'High detail, realistic tattooing',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
