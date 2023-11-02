import './globals.css'
import { Tajawal } from 'next/font/google'
import Header from '@/components/Header'
import { Toaster } from "@/components/ui/toaster"

const font = Tajawal({ 
  subsets: ['latin'],
  weight: ['400', '700'],
 })

export const metadata = {
  title: 'Guardian Angel',
  description: 'Aman is a mental health website that provides resources and information on mindfulness, meditation, and mental wellness',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" >
      <body className={font.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
