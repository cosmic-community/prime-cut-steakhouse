import Hero from '@/components/Hero'
import FeaturedMenu from '@/components/FeaturedMenu'
import ChefTeam from '@/components/ChefTeam'
import WineSelection from '@/components/WineSelection'
import { cosmic } from '@/lib/cosmic'
import type { MenuItem, WinePairing } from '@/types'

async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(6)
    return objects || []
  } catch (error) {
    console.error('Failed to fetch menu items:', error)
    return []
  }
}

async function getWines(): Promise<WinePairing[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'wine-pairings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(3)
    return objects || []
  } catch (error) {
    console.error('Failed to fetch wines:', error)
    return []
  }
}

export default async function Home() {
  const [menuItems, wines] = await Promise.all([
    getMenuItems(),
    getWines()
  ])

  return (
    <main>
      <Hero />
      <FeaturedMenu items={menuItems} />
      <ChefTeam />
      <WineSelection wines={wines} />
    </main>
  )
}