// app/api/utils/save-site/route.js

import { saveSite } from '@/utils/saveSiteLocally'

export async function POST(request) {
  try {
    // Log that request was received
    console.log('📥 Received publish request')

    const body = await request.json()
    console.log('📄 Raw request:', body)

    const { id, html } = body

    if (!id || !html) {
      console.warn('⚠️ Missing id or HTML in request')
      return new Response('Missing id or HTML', { status: 400 })
    }

    const success = saveSite(id, html)

    if (success) {
      console.log(`✅ Published: http://${id}.site-stellar.se`)
      return new Response(`http://${id}.site-stellar.se`, { status: 200 })
    } else {
      console.error('❌ Failed to save site')
      return new Response('Error saving site', { status: 500 })
    }
  } catch (error) {
    console.error('🚨 Server error:', error.message)
    return new Response('Internal server error', { status: 500 })
  }
}