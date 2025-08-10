import { MenuItem } from '@/types'
import MenuItemCard from '@/components/MenuItemCard'

interface FeaturedMenuProps {
  items: MenuItem[]
}

export default function FeaturedMenu({ items }: FeaturedMenuProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-neutral-800">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Chef's Specials</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Discover our signature dishes, carefully crafted by our expert culinary team 
            and featuring the finest ingredients available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item) => (
            <MenuItemCard key={item.id} item={item} featured />
          ))}
        </div>
      </div>
    </section>
  )
}