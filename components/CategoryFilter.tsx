'use client'

import { MenuCategory } from '@/types'

interface CategoryFilterProps {
  selectedCategory: MenuCategory | 'all'
  onCategoryChange: (category: MenuCategory | 'all') => void
}

const categoryOptions: Array<{ key: MenuCategory | 'all'; label: string; emoji: string }> = [
  { key: 'all', label: 'All Items', emoji: '🍽️' },
  { key: 'steaks', label: 'Prime Steaks', emoji: '🥩' },
  { key: 'appetizers', label: 'Appetizers', emoji: '🍤' },
  { key: 'sides', label: 'Sides', emoji: '🥔' },
  { key: 'desserts', label: 'Desserts', emoji: '🍰' }
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categoryOptions.map(({ key, label, emoji }) => (
        <button
          key={key}
          onClick={() => onCategoryChange(key)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            selectedCategory === key
              ? 'bg-accent-400 text-neutral-900 shadow-lg transform scale-105'
              : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
          }`}
        >
          <span className="text-lg">{emoji}</span>
          {label}
        </button>
      ))}
    </div>
  )
}