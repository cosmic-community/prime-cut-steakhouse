import { Suspense } from 'react'
import { getMenuItems } from '@/lib/cosmic'
import { MenuItem } from '@/types'
import MenuGrid from '@/components/MenuGrid'

// Loading component
function MenuLoading() {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent-400"></div>
      <p className="text-neutral-400 mt-4">Loading our delicious menu...</p>
    </div>
  )
}

// Server component that fetches data
async function MenuContent() {
  let menuItems: MenuItem[] = []
  
  try {
    menuItems = await getMenuItems()
  } catch (error) {
    console.error('Failed to fetch menu items:', error)
    return (
      <div className="text-center py-12">
        <p className="text-red-400 text-lg">
          Sorry, we're having trouble loading the menu. Please try again later.
        </p>
      </div>
    )
  }

  if (menuItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-400 text-lg">
          Our menu is being updated. Please check back soon!
        </p>
      </div>
    )
  }

  return <MenuGrid menuItems={menuItems} />
}

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

          {/* Menu Grid with server-side data fetching */}
          <Suspense fallback={<MenuLoading />}>
            <MenuContent />
          </Suspense>
        </div>
      </section>
    </main>
  )
}