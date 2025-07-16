// app/layout.js

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

// Context
import { LanguageProvider } from '@/app/context/LanguageContext'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Site Stellar – Build Your Website in Minutes',
  description: 'Create a simple website for your business in Sweden – no coding needed.',
}

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Top Header */}
          <header className="p-4 border-b border-gray-200 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-semibold text-indigo-700">Site Stellar</h1>
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </header>

          {/* Page Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer */}
          <footer className="py-4 px-6 text-center text-sm text-gray-500 border-t bg-white mt-auto">
            © {new Date().getFullYear()} Site Stellar – Made for small businesses in Sweden
          </footer>
        </body>
      </html>
    </LanguageProvider>
  )
}