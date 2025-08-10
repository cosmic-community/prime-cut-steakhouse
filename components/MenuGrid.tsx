'use client'

import { useState, useEffect } from 'react'
import { getMenuItems } from '@/lib/cosmic'
import MenuItemCard from '@/components/MenuItemCard'
import type { MenuItem } from '@/types'

const categories = [
  { key: 'all', label: 'All Items' },
  { key: 'steaks', label: 'Steaks' },
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'sides', label: 'Sides' },
  { key: 'desserts', label: 'Desserts' }
]

export default function MenuGrid() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        setLoading(true)
        console.log('Fetching menu items...')
        const items = await getMenuItems()
        console.log('Fetched menu items:', items)
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
    console.log('Filtering items for category:', activeCategory)
    console.log('Available items:', menuItems.length)
    
    if (activeCategory === 'all') {
      setFilteredItems(menuItems)
    } else {
      const filtered = menuItems.filter(item => {
        const categoryKey = item.metadata?.category?.key
        console.log(`Item "${item.metadata?.dish_name}" has category:`, categoryKey)
        return categoryKey === activeCategory
      })
      console.log('Filtered items:', filtered.length)
      setFilteredItems(filtered)
    }
  }, [activeCategory, menuItems])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent-400"></div>
        <p className="mt-4 text-neutral-400">Loading menu items...</p>
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

      {/* Debug information */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-8 p-4 bg-neutral-800 rounded-lg text-sm text-neutral-400">
          <p>Total menu items: {menuItems.length}</p>
          <p>Filtered items: {filteredItems.length}</p>
          <p>Active category: {activeCategory}</p>
        </div>
      )}

      {/* Menu Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-neutral-400">
            {menuItems.length === 0 
              ? 'No menu items found.' 
              : `No items found in the "${categories.find(c => c.key === activeCategory)?.label}" category.`
            }
          </p>
        </div>
      )}
    </div>
  )
}