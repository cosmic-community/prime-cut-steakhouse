'use client'

import { useState } from 'react'
import { MenuItem } from '@/types'
import MenuItemCard from './MenuItemCard'

interface MenuGridProps {
  items: MenuItem[]
}

export default function MenuGrid({ items }: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredItems = selectedCategory === 'all' 
    ? items 
    : items.filter(item => item.metadata.category?.key === selectedCategory)

  const categories = [
    { key: 'all', value: 'All Items' },
    { key: 'steaks', value: 'Steaks' },
    { key: 'appetizers', value: 'Appetizers' },
    { key: 'sides', value: 'Sides' },
    { key: 'desserts', value: 'Desserts' }
  ]

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`px-6 py-3 rounded-lg border transition-all duration-200 ${
              selectedCategory === category.key
                ? 'bg-amber-600 border-amber-600 text-white'
                : 'border-neutral-700 text-neutral-300 hover:border-amber-600 hover:text-amber-600'
            }`}
          >
            {category.value}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-400 text-lg">
            No items found for the selected category.
          </p>
        </div>
      )}
    </div>
  )
}