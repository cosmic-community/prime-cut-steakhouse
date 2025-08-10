'use client'

import { useState, useEffect } from 'react'
import { getMenuItems } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'
import type { MenuItemWithWine } from '@/types'

const categories = [
  { key: 'all', label: 'All Items' },
  { key: 'steaks', label: 'Steaks' },
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'sides', label: 'Sides' },
  { key: 'desserts', label: 'Desserts' }
]

export default function MenuGrid() {
  const [menuItems, setMenuItems] = useState<MenuItemWithWine[]>([])
  const [filteredItems, setFilteredItems] = useState<MenuItemWithWine[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        setLoading(true)
        const items = await getMenuItems()
        setMenuItems(items)
        setFilteredItems(items)
      } catch (err) {
        console.error('Error fetching menu items:', err)
        setError('Failed to load menu items')
      } finally {
        setLoading(false)
      }
    }

    fetchMenuItems()
  }, [])

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(menuItems)
    } else {
      const filtered = menuItems.filter(item => 
        item.metadata.category?.key === activeCategory || 
        item.metadata.category?.value?.toLowerCase() === activeCategory
      )
      setFilteredItems(filtered)
    }
  }, [activeCategory, menuItems])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent-400"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === category.key
                ? 'bg-accent-600 text-white shadow-lg'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white border border-neutral-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-400">No items found in this category.</p>
        </div>
      )}
    </div>
  )
}