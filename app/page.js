// app/page.js

'use client'

import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

// Context
import { LanguageContext } from '@/app/context/LanguageContext'

// Translation loader
import { getTranslations } from '@/app/utils/translate'

export default function Home() {
  const router = useRouter()
  const { lang } = useContext(LanguageContext)

  const [t, setTranslations] = useState(null)

  // Load translations when lang changes
  useEffect(() => {
    getTranslations(lang).then(data => setTranslations(data))
  }, [lang])

  if (!t) return <div>Loading...</div>

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">{t['hero.title']}</span>
          <span className="block text-indigo-600">{t['hero.subtitle']}</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {t['hero.description']}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <button
              onClick={() => router.push('/templates')}
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 sm:px-8"
            >
              {t['cta.try']}
            </button>
            <a
              href="#features"
              className="flex items-center justify-center px-4 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-md shadow-sm hover:bg-indigo-50 sm:px-8"
            >
              {t['cta.learn']}
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          {t['features.section.title']}
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t['feature.fast']}</h3>
            <p>{t['feature.fast.description']}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t['feature.domain']}</h3>
            <p>{t['feature.domain.description']}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t['feature.sweden']}</h3>
            <p>{t['feature.sweden.description']}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{t['feature.easy']}</h3>
            <p>{t['feature.easy.description']}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t['cta.ready']}
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          {t['cta.ready.description']}
        </p>
        <button
          onClick={() => router.push('/templates')}
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
        >
          {t['cta.select']}
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-sm text-gray-500 mt-12 border-t bg-white">
        © {new Date().getFullYear()} Site Stellar — {t['footer.sweden']}
      </footer>
    </main>
  )
}