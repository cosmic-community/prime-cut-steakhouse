import { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
  isSpecial?: boolean
  featured?: boolean
}

export default function MenuItemCard({ item, isSpecial = false, featured = false }: MenuItemCardProps) {
  const { metadata } = item
  
  if (!metadata) {
    return null
  }

  const {
    dish_name,
    name,
    description,
    price,
    dish_photo,
    image,
    wine_pairing,
    chefs_special
  } = metadata

  // Use dish_name if available, otherwise fall back to name or title
  const displayName = dish_name || name || item.title
  // Use dish_photo if available, otherwise fall back to image
  const displayImage = dish_photo || image

  return (
    <div className={`bg-neutral-800 rounded-lg overflow-hidden hover:bg-neutral-750 transition-colors duration-300 ${
      isSpecial || chefs_special || featured ? 'ring-2 ring-accent-400' : ''
    }`}>
      {/* Dish Photo */}
      {displayImage?.imgix_url && (
        <div className="aspect-w-16 aspect-h-12 overflow-hidden">
          <img
            src={`${displayImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={displayImage.alt_text || displayName}
            className="w-full h-48 object-cover"
            width={600}
            height={400}
          />
        </div>
      )}

      <div className="p-6">
        {/* Chef's Special Badge */}
        {(isSpecial || chefs_special || featured) && (
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-400 text-neutral-900 mb-4">
            ⭐ Chef's Special
          </div>
        )}

        {/* Dish Info */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">
            {displayName}
          </h3>
          <span className="text-2xl font-bold text-accent-400 ml-4 flex-shrink-0">
            ${price}
          </span>
        </div>

        {/* Description */}
        <p className="text-neutral-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Wine Pairing */}
        {wine_pairing && wine_pairing.metadata && (
          <div className="border-t border-neutral-700 pt-4">
            <h4 className="text-sm font-semibold text-accent-400 mb-2 flex items-center">
              🍷 Recommended Wine Pairing
            </h4>
            <div className="text-sm text-neutral-300">
              <p className="font-medium">
                {wine_pairing.metadata.wine_name}
              </p>
              <p className="text-neutral-400">
                {wine_pairing.metadata.vineyard} • {wine_pairing.metadata.year}
              </p>
              {wine_pairing.metadata.price_per_glass && (
                <p className="text-accent-400 font-medium mt-1">
                  ${wine_pairing.metadata.price_per_glass} glass
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}