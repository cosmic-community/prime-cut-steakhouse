import { ChefProfile } from '@/types'

interface ChefTeamProps {
  chefs: ChefProfile[]
}

export default function ChefTeam({ chefs }: ChefTeamProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet Our Culinary Team
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Our exceptional chefs bring years of experience and passion to create
            unforgettable dining experiences for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {chefs.map((chef) => (
            <div key={chef.id} className="flex flex-col md:flex-row gap-6 items-start">
              {chef.metadata.chef_photo?.imgix_url && (
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={`${chef.metadata.chef_photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                      alt={chef.metadata.chef_name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              )}
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-semibold mb-1">
                  {chef.metadata.chef_name}
                </h3>
                
                <p className="text-amber-400 font-medium mb-3">
                  {chef.metadata.title}
                </p>
                
                {chef.metadata.years_experience && (
                  <p className="text-neutral-400 text-sm mb-4">
                    {chef.metadata.years_experience} years of experience
                  </p>
                )}

                <div 
                  className="text-neutral-300 mb-4 prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: chef.metadata.bio }}
                />

                {chef.metadata.specialties && (
                  <div>
                    <h4 className="font-semibold mb-2 text-amber-400">
                      Specialties
                    </h4>
                    <p className="text-neutral-300 text-sm">
                      {chef.metadata.specialties}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}