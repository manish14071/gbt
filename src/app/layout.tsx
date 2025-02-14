import { Inter } from 'next/font/google'
import "@/app/global.css"
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Borders Travel',
  description: 'Your passport to extraordinary destinations worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}