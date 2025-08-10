import { createBucketClient } from '@cosmicjs/sdk'
import { MenuItem, WinePairing, ChefProfile } from '@/types'

// Ensure environment variables are available
const bucketSlug = process.env.COSMIC_BUCKET_SLUG
const readKey = process.env.COSMIC_READ_KEY

if (!bucketSlug || !readKey) {
  throw new Error('Missing required Cosmic environment variables. Please check COSMIC_BUCKET_SLUG and COSMIC_READ_KEY are set.')
}

const cosmic = createBucketClient({
  bucketSlug,
  readKey,
  apiEnvironment: "staging"
})

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'menu-items' })
      .props('id,slug,title,metadata')
      .depth(1)
    
    return objects as MenuItem[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching menu items:', error)
    throw error
  }
}

export async function getChefsSpecials(): Promise<MenuItem[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'menu-items', 'metadata.chefs_special': true })
      .props('id,slug,title,metadata')
      .depth(1)
    
    return objects as MenuItem[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching chef specials:', error)
    throw error
  }
}

export async function getWinePairings(): Promise<WinePairing[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'wine-pairings' })
      .props('id,slug,title,metadata')
      .depth(1)
    
    return objects as WinePairing[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching wine pairings:', error)
    throw error
  }
}

export async function getChefs(): Promise<ChefProfile[]> {
  try {
    const { objects } = await cosmic.objects
      .find({ type: 'chef-profiles' })
      .props('id,slug,title,metadata')
      .depth(1)
    
    return objects as ChefProfile[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    console.error('Error fetching chefs:', error)
    throw error
  }
}

export async function getChefProfiles(): Promise<ChefProfile[]> {
  // This is an alias for getChefs() to match the import in page.tsx
  return getChefs()
}