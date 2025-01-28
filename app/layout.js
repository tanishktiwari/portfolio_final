import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MERN Stack Developer Portfolio',
  description: 'Portfolio showcasing my work as a MERN stack developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}