import { ReactNode } from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { SearchContextProvider } from '@/contexts/search'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Rick and Morty',
  description: 'Rick and Morty app built with Next.js + TailwindCSS',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="flex h-screen flex-col">
        <SearchContextProvider>
          <NavBar />
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </SearchContextProvider>
      </body>
    </html>
  )
}
