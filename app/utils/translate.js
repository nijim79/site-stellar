// app/utils/translate.js

export async function getTranslations(lang = 'en') {
  try {
    const response = await fetch(`/locales/${lang}.json`)
    return await response.json()
  } catch (error) {
    console.error('Failed to load translations:', error)
    return {}
  }
}