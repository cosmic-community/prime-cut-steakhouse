import { getMenuItems } from '@/lib/cosmic'
import MenuGrid from '@/components/MenuGrid'
import CategoryFilter from '@/components/CategoryFilter'

export const metadata = {
  title: 'Menu | Prime Cut Steakhouse',
  description: 'Explore our carefully crafted menu featuring premium dry-aged steaks, appetizers, sides, and desserts.',
}

export default async function MenuPage() {
  const menuItems = await getMenuItems()

  if (menuItems.length === 0) {
    return (
      <div className="container section-padding">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-neutral-400">Menu items will appear here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container section-padding">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Menu</h1>
        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
          Discover our carefully curated selection of premium steaks, appetizers, sides, 
          and desserts, each crafted with the finest ingredients and expert technique.
        </p>
      </div>
      
      <CategoryFilter menuItems={menuItems} />
      <MenuGrid items={menuItems} />
    </div>
  )
}