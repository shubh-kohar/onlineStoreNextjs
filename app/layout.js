import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CustomMonkey',
  description: 'College Group project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        <main className='min-h-screen'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
