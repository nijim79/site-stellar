// utils/saveSiteLocally.js

console.log('📁 saveSiteLocally.js loaded')

import fs from 'fs'
import path from 'path'

export function saveSite(id, html) {
  const dir = path.join(process.cwd(), 'sites', id)

  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(path.join(dir, 'index.html'), html)
    console.log(`✅ Site saved at ${dir}/index.html`)
    return true
  } catch (error) {
    console.error(`❌ Failed to write site:`, error.message)
    return false
  }
}