'use client'

import { useState, useMemo } from 'react'
import { MenuItem, MenuCategory } from '@/types'
import MenuItemCard from './MenuItemCard'
import CategoryFilter from './CategoryFilter'

interface MenuGridProps {
  menuItems: MenuItem[]
}

export default function MenuGrid({ menuItems }: MenuGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all')

  // Filter menu items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return menuItems
    }
    return menuItems.filter(item => {
      const category = item.metadata?.category
      if (typeof category === 'string') {
        return category === selectedCategory
      }
      if (typeof category === 'object' && category && 'key' in category) {
        return (category as any).key === selectedCategory
      }
      return false
    })
  }, [menuItems, selectedCategory])

  // Group items by category for display
  const itemsByCategory = useMemo(() => {
    const categories: Record<string, MenuItem[]> = {
      steaks: [],
      appetizers: [],
      sides: [],
      desserts: []
    }

    filteredItems.forEach(item => {
      const category = item.metadata?.category
      let categoryKey: string | undefined
      
      if (typeof category === 'string') {
        categoryKey = category
      } else if (typeof category === 'object' && category && 'key' in category) {
        categoryKey = (category as any).key
      }
      
      if (categoryKey && categories[categoryKey]) {
        // Use optional chaining to satisfy noUncheckedIndexedAccess and avoid undefined access
        categories[categoryKey]?.push(item)
      }
    })

    return categories
  }, [filteredItems])

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Menu Items Display */}
      {selectedCategory === 'all' ? (
        // Show all categories when 'all' is selected
        <>
          {Object.entries(itemsByCategory).map(([category, items]) => 
            items && items.length > 0 ? (
              <div key={category} className="space-y-8">
                <h2 className="text-3xl font-bold text-white capitalize text-center">
                  {category === 'steaks' ? 'Prime Steaks' : 
                   category === 'appetizers' ? 'Appetizers' :
                   category === 'sides' ? 'Sides' :
                   'Desserts'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </>
      ) : (
        // Show single category when specific category is selected
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white capitalize text-center">
            {selectedCategory === 'steaks' ? 'Prime Steaks' : 
             selectedCategory === 'appetizers' ? 'Appetizers' :
             selectedCategory === 'sides' ? 'Sides' :
             'Desserts'}
          </h2>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Chef's Specials Section */}
      {selectedCategory === 'all' && (
        <div className="space-y-8 border-t border-neutral-700 pt-12">
          <h2 className="text-3xl font-bold text-white text-center">
            Chef's Specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.metadata?.chefs_special === true)
              .map((item) => (
                <MenuItemCard key={`special-${item.id}`} item={item} isSpecial />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}