// app/components/LanguageSwitcher.js

'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '../context/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useContext(LanguageContext)
  const router = useRouter()

  const handleLangChange = (e) => {
    const newLang = e.target.value
    changeLanguage(newLang)
    router.refresh()
  }

  return (
    <select
      value={lang}
      onChange={handleLangChange}
      className="text-sm border border-gray-300 rounded px-2 py-1"
    >
      <option value="en">English</option>
      <option value="sv">Svenska</option>
    </select>
  )
}