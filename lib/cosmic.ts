import { createBucketClient } from '@cosmicjs/sdk'
import { MenuItem, WinePairing, ChefProfile } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
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
    throw error
  }
}