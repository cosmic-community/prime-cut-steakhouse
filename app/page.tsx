import Hero from '@/components/Hero'
import FeaturedMenu from '@/components/FeaturedMenu'
import WineSelection from '@/components/WineSelection'
import ChefTeam from '@/components/ChefTeam'
import { getChefsSpecials, getWinePairings, getChefProfiles } from '@/lib/cosmic'

export default async function HomePage() {
  const [featuredItems, wines, chefs] = await Promise.all([
    getChefsSpecials(),
    getWinePairings(),
    getChefProfiles()
  ])

  return (
    <div>
      <Hero />
      
      {featuredItems.length > 0 && (
        <FeaturedMenu items={featuredItems} />
      )}
      
      {wines.length > 0 && (
        <WineSelection wines={wines.slice(0, 3)} />
      )}
      
      {chefs.length > 0 && (
        <ChefTeam chefs={chefs} />
      )}
    </div>
  )
}