// server.js

const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

// Serve static files (optional)
app.use(express.static('public'))

// Subdomain handler
app.use((req, res, next) => {
  const hostname = req.hostname // e.g., cafe.site-stellar.se
  const id = hostname.split('.')[0] // 'cafe'

  const filePath = path.join(process.cwd(), 'sites', id, 'index.html')

  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8')
    res.type('html').send(html)
  } else {
    res.status(404).send(`
      <h1>Site Not Found</h1>
      <p>The site "${id}" has not been published yet.</p>
    `)
  }
})

// Start server on port 8000
const PORT = 8000
app.listen(PORT, () => {
  console.log(`🌐 Subdomain server running at http://site-stellar.se:${PORT}`)
  console.log(`Test with:`)
  console.log(`http://cafe.site-stellar.se:${PORT}`)
})