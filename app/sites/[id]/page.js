// app/sites/[id]/page.js

import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

export default function SitePreview({ params }) {
  const { id } = params || {}

  const filePath = path.join(process.cwd(), 'sites', id, 'index.html')

  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const html = fs.readFileSync(filePath, 'utf8')

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}