import { getChefProfiles } from '@/lib/cosmic'
import { Chef } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Chefs | Prime Cut Steakhouse',
  description: 'Meet the talented culinary team at Prime Cut Steakhouse. Our chefs bring years of experience and passion for creating exceptional dining experiences.',
}

export default async function ChefsPage() {
  const chefs = await getChefProfiles()

  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-neutral-900 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=2000&auto=format,compress')` 
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Chefs</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Meet the culinary artists behind Prime Cut's exceptional dining experience
          </p>
        </div>
      </section>

      {/* Chef Profiles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {chefs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No chef profiles available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {chefs.map((chef: Chef) => (
                <div key={chef.id} className="group">
                  <div className="bg-neutral-800 rounded-lg overflow-hidden">
                    {/* Chef Image */}
                    <div className="relative h-80 overflow-hidden">
                      {chef.metadata.chef_photo?.imgix_url ? (
                        <img
                          src={`${chef.metadata.chef_photo.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                          alt={chef.metadata.chef_name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          width={800}
                          height={600}
                        />
                      ) : (
                        <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                          <span className="text-6xl">👨‍🍳</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      
                      {/* Years of Experience Badge */}
                      {chef.metadata.years_experience && (
                        <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {chef.metadata.years_experience} years
                        </div>
                      )}
                    </div>

                    {/* Chef Details */}
                    <div className="p-8 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{chef.metadata.chef_name}</h3>
                        <p className="text-amber-600 font-semibold text-lg">{chef.metadata.title}</p>
                      </div>

                      <div 
                        className="text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: chef.metadata.bio }}
                      />

                      {chef.metadata.specialties && (
                        <div className="pt-4 border-t border-gray-700">
                          <h4 className="text-amber-600 font-semibold mb-2">Specialties:</h4>
                          <p className="text-gray-300">{chef.metadata.specialties}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}