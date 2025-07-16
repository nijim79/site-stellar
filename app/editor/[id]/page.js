// app/editor/[id]/page.js

'use client'

import { useState, useContext } from 'react'
import { useRouter, useParams } from 'next/navigation'

// Context
import { LanguageContext } from '@/app/context/LanguageContext'

// Actions
import { generateSiteHTML } from '@/app/editor/actions'

export default function EditorPage() {
  const params = useParams()
  const { id } = params || {}

  const { lang } = useContext(LanguageContext)
  const router = useRouter()

  const [siteData, setSiteData] = useState({
    title: 'Welcome to My Site',
    description: 'This is my awesome new website.',
    bgColor: 'bg-white',
    textColor: 'text-gray-900',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSiteData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePublish = async () => {
    const generatedHTML = generateSiteHTML({
      ...siteData,
      templateId: id
    })

    console.log('📤 Publishing site:', id)
    console.log('📄 Generated HTML length:', generatedHTML.length)

    try {
      const response = await fetch('/api/utils/save-site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, html: generatedHTML }),
      })

      if (response.ok) {
        const previewUrl = await response.text()
        alert(`✅ Published! Live at ${previewUrl}`)
      } else {
        throw new Error('Server responded with error')
      }
    } catch (err) {
      console.error('🔴 Publish error:', err.message)
      alert('❌ Failed to publish – check terminal')
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-indigo-700 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Site Stellar Editor</h1>
          <button
            onClick={handlePublish}
            className="px-4 py-2 bg-white text-indigo-700 rounded-md font-medium hover:bg-indigo-50 transition"
          >
            Preview & Publish
          </button>
        </div>
      </header>

      {/* Editor + Preview */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left - Editor Form */}
        <div className="w-full md:w-1/3 p-6 bg-gray-50 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Customize Your Site</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Title
              </label>
              <input
                type="text"
                name="title"
                value={siteData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={siteData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Background Color
              </label>
              <select
                name="bgColor"
                value={siteData.bgColor}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="bg-white">White</option>
                <option value="bg-gray-100">Light Gray</option>
                <option value="bg-indigo-50">Light Blue</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Text Color
              </label>
              <select
                name="textColor"
                value={siteData.textColor}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="text-gray-900">Dark</option>
                <option value="text-gray-700">Gray</option>
                <option value="text-indigo-700">Indigo</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right - Live Preview */}
        <div className="hidden md:block w-2/3 bg-gray-100 p-8 overflow-y-auto">
          <div
            className={`max-w-md mx-auto p-8 rounded-lg shadow-lg ${siteData.bgColor} ${siteData.textColor}`}
          >
            <h1 className="text-3xl font-bold">{siteData.title}</h1>
            <p className="mt-2">{siteData.description}</p>
            <p className="mt-4 text-sm text-gray-500">
              Template: <strong>{id || 'default'}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 px-6 text-center text-sm text-gray-500 border-t bg-white">
        © {new Date().getFullYear()} Site Stellar – Made for small businesses in Sweden
      </footer>
    </main>
  )
}