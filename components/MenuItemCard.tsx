import type { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
  featured?: boolean
}

export default function MenuItemCard({ item, featured = false }: MenuItemCardProps) {
  if (!item?.metadata) {
    console.warn('MenuItemCard: Missing metadata for item:', item)
    return null
  }

  const { metadata } = item
  const dishPhoto = metadata.dish_photo
  const winePairing = metadata.wine_pairing
  const isSpecial = metadata.chefs_special === true

  return (
    <div className={`card relative overflow-hidden ${featured ? 'border-accent-600' : ''}`}>
      {/* Dish Image */}
      {dishPhoto?.imgix_url && (
        <div className="aspect-video mb-6 overflow-hidden rounded-lg">
          <img 
            src={`${dishPhoto.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={metadata.dish_name || 'Dish photo'}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Chef's Special Badge */}
      {isSpecial && (
        <div className="absolute top-4 right-4 bg-accent-600 text-neutral-900 px-3 py-1 rounded-full text-sm font-medium">
          Chef's Special
        </div>
      )}
      
      {/* Content */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-neutral-100">
            {metadata.dish_name || item.title}
          </h3>
          <span className="text-2xl font-bold text-accent-400 ml-4">
            {metadata.price}
          </span>
        </div>
        
        <p className="text-neutral-300 leading-relaxed">
          {metadata.description}
        </p>
        
        {/* Category */}
        {metadata.category && (
          <div className="text-sm text-accent-400">
            {metadata.category.value}
          </div>
        )}
        
        {/* Wine Pairing */}
        {winePairing?.metadata && (
          <div className="pt-4 border-t border-neutral-700">
            <h4 className="text-sm font-medium text-accent-400 mb-2">Recommended Pairing</h4>
            <div className="flex items-center gap-3">
              {winePairing.metadata.wine_photo?.imgix_url && (
                <img 
                  src={`${winePairing.metadata.wine_photo.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
                  alt={winePairing.metadata.wine_name || 'Wine photo'}
                  className="w-12 h-12 object-cover rounded"
                />
              )}
              <div>
                <p className="text-neutral-100 font-medium">
                  {winePairing.metadata.wine_name}
                </p>
                <p className="text-sm text-neutral-400">
                  {winePairing.metadata.vineyard}
                  {winePairing.metadata.year && ` • ${winePairing.metadata.year}`}
                </p>
                {winePairing.metadata.price_per_glass && (
                  <p className="text-sm text-accent-400">
                    Glass: {winePairing.metadata.price_per_glass}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}