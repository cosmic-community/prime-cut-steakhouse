import { Suspense } from 'react'
import MenuGrid from '@/components/MenuGrid'

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Header spacing */}
      <div className="h-20"></div>
      
      {/* Menu Section */}
      <section className="py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium steaks, appetizers, sides, 
              and desserts, each crafted with the finest ingredients and expert technique.
            </p>
          </div>

          {/* Menu Grid with built-in category filter */}
          <Suspense fallback={
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent-400"></div>
            </div>
          }>
            <MenuGrid />
          </Suspense>
        </div>
      </section>
    </main>
  )
}