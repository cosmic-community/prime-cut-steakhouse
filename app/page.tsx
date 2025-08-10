import Hero from '@/components/Hero'
import FeaturedMenu from '@/components/FeaturedMenu'
import ChefTeam from '@/components/ChefTeam'
import WineSelection from '@/components/WineSelection'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedMenu />
      <ChefTeam />
      <WineSelection />
    </main>
  )
}