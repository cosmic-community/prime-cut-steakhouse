'use client'

import { useState, useEffect } from 'react'
import { MenuItem } from '@/types'

interface CategoryFilterProps {
  menuItems: MenuItem[]
}

export default function CategoryFilter({ menuItems }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems)

  const categories = [
    { key: 'all', value: 'All Items' },
    { key: 'steaks', value: 'Steaks' },
    { key: 'appetizers', value: 'Appetizers' },
    { key: 'sides', value: 'Sides' },
    { key: 'desserts', value: 'Desserts' }
  ]

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(menuItems)
    } else {
      setFilteredItems(
        menuItems.filter(item => item.metadata.category?.key === selectedCategory)
      )
    }
  }, [selectedCategory, menuItems])

  return (
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
  )
}