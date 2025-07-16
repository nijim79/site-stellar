'use client'

import { useRouter } from 'next/navigation'

export default function TemplatesPage() {
  const router = useRouter()

  const templates = [
    {
      id: 'cafe',
      name: 'Café',
      description: 'Perfect for small cafés and bakeries',
      image: 'https://picsum.photos/seed/cafe/400/300 '
    },
    {
      id: 'freelancer',
      name: 'Freelancer',
      description: 'Great for consultants, designers, developers',
      image: 'https://picsum.photos/seed/freelancer/400/300 '
    },
    {
      id: 'shop',
      name: 'Shop',
      description: 'Ideal for local shops and boutiques',
      image: 'https://picsum.photos/seed/shop/400/300 '
    },
    {
      id: 'blog',
      name: 'Blog',
      description: 'Start your personal or business blog',
      image: 'https://picsum.photos/seed/blog/400/300 '
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Template</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pick a starting point for your website. All templates are mobile-friendly and customizable.
        </p>
      </section>

      {/* Template Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{template.name}</h3>
                <p className="text-gray-600 mt-1">{template.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-indigo-600 text-sm group-hover:underline">Preview</span>
                  <button
                    onClick={() => router.push(`/editor/${template.id}`)}
                    className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
                  >
                    Choose Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-gray-500 text-sm mt-12 border-t bg-white">
        © {new Date().getFullYear()} Site Stellar – Made for small businesses in Sweden
      </footer>
    </main>
  )
}