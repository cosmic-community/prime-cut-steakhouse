import { getChefs } from '@/lib/cosmic'
import { ChefProfile } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Chefs | Prime Cut Steakhouse',
  description: 'Meet our talented culinary team at Prime Cut Steakhouse. Our award-winning chefs bring exceptional expertise and passion to every dish.',
}

export default async function ChefsPage() {
  const chefs = await getChefs()

  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-900 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&auto=format,compress')` 
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Culinary Team</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Meet the exceptional chefs who bring passion, expertise, and innovation to every dish at Prime Cut Steakhouse
          </p>
        </div>
      </section>

      {/* Chefs Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {chefs.map((chef: ChefProfile) => (
              <div key={chef.id} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Chef Photo */}
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                    <img
                      src={`${chef.metadata.chef_photo?.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
                      alt={chef.metadata.chef_name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Chef Info */}
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{chef.metadata.chef_name}</h2>
                      <p className="text-amber-600 text-lg font-semibold">{chef.metadata.title}</p>
                    </div>

                    {chef.metadata.years_experience && (
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span className="text-2xl">👨‍🍳</span>
                        <span>{chef.metadata.years_experience} Years Experience</span>
                      </div>
                    )}

                    <div 
                      className="text-gray-300 prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: chef.metadata.bio }}
                    />

                    {chef.metadata.specialties && (
                      <div className="pt-4 border-t border-gray-800">
                        <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2">
                          Specialties
                        </h3>
                        <p className="text-gray-400">{chef.metadata.specialties}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience Our Culinary Excellence</h2>
          <p className="text-gray-300 text-lg mb-8">
            Join us for an unforgettable dining experience crafted by our talented team
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