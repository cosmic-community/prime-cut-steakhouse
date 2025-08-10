import { createBucketClient } from '@cosmicjs/sdk'
import { MenuItem, WinePairing, ChefProfile, CosmicResponse, MenuCategory } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all menu items with wine pairings
export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'menu-items' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(50);
    
    return response.objects as MenuItem[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch menu items');
  }
}

// Fetch menu items by category
export async function getMenuItemsByCategory(category: MenuCategory): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'menu-items',
        'metadata.category.key': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(20);
    
    return response.objects as MenuItem[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error(`Failed to fetch menu items for category: ${category}`);
  }
}

// Fetch chef's specials
export async function getChefsSpecials(): Promise<MenuItem[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'menu-items',
        'metadata.chefs_special': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(10);
    
    return response.objects as MenuItem[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch chef specials');
  }
}

// Fetch single menu item by slug
export async function getMenuItem(slug: string): Promise<MenuItem | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'menu-items',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const menuItem = response.object as MenuItem;
    
    if (!menuItem || !menuItem.metadata) {
      return null;
    }
    
    return menuItem;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch menu item: ${slug}`);
  }
}

// Fetch all wine pairings
export async function getWinePairings(): Promise<WinePairing[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'wine-pairings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .limit(50);
    
    return response.objects as WinePairing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch wine pairings');
  }
}

// Fetch single wine pairing by slug
export async function getWinePairing(slug: string): Promise<WinePairing | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'wine-pairings',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata']);
    
    const wine = response.object as WinePairing;
    
    if (!wine || !wine.metadata) {
      return null;
    }
    
    return wine;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch wine pairing: ${slug}`);
  }
}

// Fetch all chef profiles
export async function getChefProfiles(): Promise<ChefProfile[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'chef-profiles' })
      .props(['id', 'title', 'slug', 'metadata'])
      .limit(20);
    
    return response.objects as ChefProfile[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch chef profiles');
  }
}

// Fetch single chef profile by slug
export async function getChefProfile(slug: string): Promise<ChefProfile | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'chef-profiles',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata']);
    
    const chef = response.object as ChefProfile;
    
    if (!chef || !chef.metadata) {
      return null;
    }
    
    return chef;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch chef profile: ${slug}`);
  }
}