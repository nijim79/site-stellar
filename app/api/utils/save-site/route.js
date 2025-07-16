// app/api/utils/save-site/route.js

// 🔍 Debug: Try resolving '@/utils/saveSiteLocally'
try {
  const resolvedPath = require.resolve('@/utils/saveSiteLocally')
  console.log('✅ Resolved @/utils/saveSiteLocally to:', resolvedPath)
} catch (e) {
  console.error('❌ Failed to resolve @/utils/saveSiteLocally:', e.message)
}

// ✅ Use the stable '@/' import
import { saveSite } from '@/utils/saveSiteLocally'

console.log('📄 Using import: @/utils/saveSiteLocally')

export async function POST(request) {
  try {
    const { id, html } = await request.json()

    if (!id || !html) {
      console.warn('⚠️ Missing id or HTML in request')
      return new Response('Missing id or HTML', { status: 400 })
    }

    console.log(`📝 Publishing site for ID: ${id}`)
    console.log(`📄 HTML size: ${html.length} characters`)

    const success = saveSite(id, html)

    if (success) {
      const previewUrl = `http://${id}.site-stellar.se`
      console.log(`✅ Published: ${previewUrl}`)
      return new Response(previewUrl, { status: 200 })
    } else {
      console.error(`❌ Failed to write files for ID: ${id}`)
      return new Response('Error saving site', { status: 500 })
    }
  } catch (error) {
    console.error('🚨 Server error:', error.message)
    return new Response('Internal server error', { status: 500 })
  }
}