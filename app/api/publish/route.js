// app/api/publish/route.js

import fs from 'fs'
import path from 'path'

export async function POST(request) {
  const { id, html } = await request.json()

  const dir = path.join(process.cwd(), 'sites', id)

  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const filePath = path.join(dir, 'index.html')
    fs.writeFileSync(filePath, html, 'utf8')

    return new Response(`http://${id}.site-stellar.se`, { status: 200 })
  } catch (error) {
    console.error('Failed to save site:', error.message)
    return new Response('Error saving site', { status: 500 })
  }
}