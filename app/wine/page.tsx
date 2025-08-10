import { getWinePairings } from '@/lib/cosmic'
import { WinePairing } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wine Selection | Prime Cut Steakhouse',
  description: 'Explore our curated wine collection at Prime Cut Steakhouse. Hand-selected wines from renowned vineyards to perfectly complement your meal.',
}

export default async function WinePage() {
  const wines = await getWinePairings()

  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-900 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=2000&auto=format,compress')` 
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Wine Selection</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our carefully curated collection of fine wines, expertly chosen to complement our steakhouse menu
          </p>
        </div>
      </section>

      {/* Wine Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wines.map((wine: WinePairing) => (
              <div key={wine.id} className="bg-neutral-800 rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                {/* Wine Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`${wine.metadata.wine_photo?.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={wine.metadata.wine_name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {wine.metadata.price_per_glass}/glass
                  </div>
                </div>

                {/* Wine Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{wine.metadata.wine_name}</h3>
                    <p className="text-amber-600 font-semibold">{wine.metadata.vineyard}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    {wine.metadata.year && <span className="font-medium">{wine.metadata.year}</span>}
                    {wine.metadata.region && <span>{wine.metadata.region}</span>}
                  </div>

                  {wine.metadata.tasting_notes && (
                    <p className="text-gray-300 leading-relaxed">
                      {wine.metadata.tasting_notes}
                    </p>
                  )}

                  <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Per Bottle</p>
                      <p className="text-xl font-bold text-white">{wine.metadata.price_per_bottle}</p>
                    </div>
                    <span className="text-3xl">🍷</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className="py-16 px-4 bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Perfect Pairings</h2>
          <p className="text-gray-300 text-lg mb-8">
            Our sommelier has carefully selected each wine to enhance your dining experience. 
            Ask your server for personalized pairing recommendations with your meal.
          </p>
          <a
            href="/menu"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-amber-700 transition-colors"
          >
            View Our Menu
          </a>
        </div>
      </section>
    </main>
  )
}