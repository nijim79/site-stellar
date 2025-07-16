// app/context/LanguageContext.js

'use client'

import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  // Load saved language
  useEffect(() => {
    const savedLang = localStorage.getItem('lang')
    if (savedLang && ['en', 'sv'].includes(savedLang)) {
      setLang(savedLang)
    }
  }, [])

  const changeLanguage = (newLang) => {
    if (['en', 'sv'].includes(newLang)) {
      setLang(newLang)
      localStorage.setItem('lang', newLang)
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}