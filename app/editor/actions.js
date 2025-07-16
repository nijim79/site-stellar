// app/editor/actions.js

export function generateSiteHTML(siteData) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${siteData.title}</title>
  <style>
    body {
      background-color: #ffffff;
      color: #111827;
      font-family: system-ui, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="content">
    <h1>${siteData.title}</h1>
    <p>${siteData.description}</p>
    <p><em>Template: ${siteData.templateId}</em></p>
  </div>
</body>
</html>
  `.trim()
}