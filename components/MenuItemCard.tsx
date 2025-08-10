import { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="bg-neutral-800 rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* Dish Image */}
      <div className="relative h-48 overflow-hidden">
        {item.metadata.dish_photo?.imgix_url ? (
          <img
            src={`${item.metadata.dish_photo.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={item.metadata.dish_name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            width={800}
            height={600}
          />
        ) : (
          <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Chef's Special Badge */}
        {item.metadata.chefs_special && (
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Chef's Special
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full font-bold">
          {item.metadata.price}
        </div>
      </div>

      {/* Dish Details */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{item.metadata.dish_name}</h3>
          <p className="text-gray-300 leading-relaxed">{item.metadata.description}</p>
        </div>

        {/* Wine Pairing */}
        {item.metadata.wine_pairing && (
          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-amber-600 font-semibold mb-2">Recommended Wine Pairing:</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{item.metadata.wine_pairing.metadata?.wine_name}</p>
                <p className="text-gray-400 text-sm">{item.metadata.wine_pairing.metadata?.vineyard}</p>
                {item.metadata.wine_pairing.metadata?.year && (
                  <p className="text-gray-400 text-sm">{item.metadata.wine_pairing.metadata.year}</p>
                )}
              </div>
              {item.metadata.wine_pairing.metadata?.price_per_glass && (
                <p className="text-amber-600 font-semibold">
                  {item.metadata.wine_pairing.metadata.price_per_glass}/glass
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}