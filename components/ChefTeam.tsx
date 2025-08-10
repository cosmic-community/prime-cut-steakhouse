import { getChefProfiles } from '@/lib/cosmic'
import { Chef } from '@/types'

export default async function ChefTeam() {
  const chefs = await getChefProfiles()

  return (
    <section className="section-padding bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Meet Our Chefs</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Our talented culinary team brings together decades of experience and passion for creating exceptional steakhouse cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chefs.map((chef: Chef) => (
            <div key={chef.id} className="bg-neutral-900 rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  {chef.metadata.chef_photo?.imgix_url ? (
                    <img
                      src={`${chef.metadata.chef_photo.imgix_url}?w=400&h=500&fit=crop&auto=format,compress`}
                      alt={chef.metadata.chef_name}
                      className="w-full h-64 md:h-full object-cover"
                      width={400}
                      height={500}
                    />
                  ) : (
                    <div className="w-full h-64 md:h-full bg-neutral-800 flex items-center justify-center">
                      <span className="text-4xl">👨‍🍳</span>
                    </div>
                  )}
                  {chef.metadata.years_experience && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {chef.metadata.years_experience} years
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{chef.metadata.chef_name}</h3>
                  <p className="text-amber-400 font-semibold mb-4">{chef.metadata.title}</p>
                  <div 
                    className="text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: chef.metadata.bio }}
                  />
                  {chef.metadata.specialties && (
                    <div className="mt-4 pt-4 border-t border-neutral-800">
                      <p className="text-xs text-neutral-400 mb-1">Specialties</p>
                      <p className="text-neutral-300 text-sm">{chef.metadata.specialties}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}