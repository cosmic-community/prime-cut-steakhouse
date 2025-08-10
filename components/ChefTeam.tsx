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
          {chefs.map((chef) => {
            const name =
              chef.metadata.name ?? chef.metadata.chef_name ?? chef.title
            const imgUrl =
              chef.metadata.image?.imgix_url ??
              chef.metadata.chef_photo?.imgix_url
            const years =
              chef.metadata.experience_years ??
              chef.metadata.years_experience ??
              undefined
            const specialtiesVal = chef.metadata.specialties
            const specialtiesText = Array.isArray(specialtiesVal)
              ? specialtiesVal.join(', ')
              : specialtiesVal || undefined

            return (
              <div key={chef.id} className="flex flex-col md:flex-row gap-6 items-start">
                {imgUrl && (
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={`${imgUrl}?w=400&h=400&fit=crop&auto=format,compress`}
                        alt={name}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                )}
                
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-1">
                    {name}
                  </h3>
                  
                  <p className="text-amber-400 font-medium mb-3">
                    {chef.metadata.title}
                  </p>
                  
                  {typeof years === 'number' && (
                    <p className="text-neutral-400 text-sm mb-4">
                      {years} years of experience
                    </p>
                  )}

                  <div 
                    className="text-neutral-300 mb-4 prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: chef.metadata.bio || '' }}
                  />

                  {specialtiesText && (
                    <div>
                      <h4 className="font-semibold mb-2 text-amber-400">
                        Specialties
                      </h4>
                      <p className="text-neutral-300 text-sm">
                        {specialtiesText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}