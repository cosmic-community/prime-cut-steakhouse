import { WinePairing } from '@/types'

interface WineSelectionProps {
  wines: WinePairing[]
}

export default function WineSelection({ wines }: WineSelectionProps) {
  return (
    <section className="section-padding bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Curated Wine Selection
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Discover exceptional wines carefully selected to complement our menu,
            featuring renowned vineyards from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine) => (
            <div 
              key={wine.id} 
              className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-amber-600 transition-all duration-300"
            >
              {wine.metadata.wine_photo?.imgix_url && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={`${wine.metadata.wine_photo.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={wine.metadata.wine_name || wine.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    width={800}
                    height={600}
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {wine.metadata.wine_name || wine.title}
                </h3>
                
                <p className="text-amber-400 font-medium mb-2">
                  {wine.metadata.vineyard}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                  {wine.metadata.year && (
                    <span>{wine.metadata.year}</span>
                  )}
                  {wine.metadata.year && wine.metadata.region && (
                    <span>•</span>
                  )}
                  {wine.metadata.region && (
                    <span>{wine.metadata.region}</span>
                  )}
                </div>

                {wine.metadata.tasting_notes && (
                  <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                    {wine.metadata.tasting_notes}
                  </p>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-neutral-800">
                  <div>
                    <span className="text-xs text-neutral-400">Glass</span>
                    <p className="font-semibold text-amber-400">
                      {wine.metadata.price_per_glass || 'N/A'}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs text-neutral-400">Bottle</span>
                    <p className="font-semibold text-amber-400">
                      {wine.metadata.price_per_bottle || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}