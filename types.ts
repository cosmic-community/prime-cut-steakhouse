// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status: string;
  published_at: string;
}

// Menu Item interface
export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    dish_name: string;
    description: string;
    price: string;
    category?: {
      key: string;
      value: string;
    };
    chefs_special?: boolean;
    dish_photo?: {
      url: string;
      imgix_url: string;
    };
    wine_pairing?: WinePairing;
  };
}

// Wine Pairing interface
export interface WinePairing extends CosmicObject {
  type: 'wine-pairings';
  metadata: {
    wine_name: string;
    vineyard: string;
    year?: string;
    region?: string;
    tasting_notes?: string;
    price_per_glass?: string;
    price_per_bottle?: string;
    wine_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Chef Profile interface
export interface ChefProfile extends CosmicObject {
  type: 'chef-profiles';
  metadata: {
    chef_name: string;
    title: string;
    bio: string;
    years_experience?: number;
    specialties?: string;
    chef_photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Category type literals
export type MenuCategory = 'steaks' | 'appetizers' | 'sides' | 'desserts';

// API response interfaces
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isMenuItem(obj: CosmicObject): obj is MenuItem {
  return obj.type === 'menu-items';
}

export function isWinePairing(obj: CosmicObject): obj is WinePairing {
  return obj.type === 'wine-pairings';
}

export function isChefProfile(obj: CosmicObject): obj is ChefProfile {
  return obj.type === 'chef-profiles';
}

// Utility types - Fixed the type indexing issue
export type OptionalMetadata<T extends CosmicObject> = Partial<T['metadata']>;
export type CreateMenuItemData = Omit<MenuItem, 'id' | 'created_at' | 'modified_at'>;

// Helper function to safely access metadata
export function getMetadata<T extends CosmicObject>(obj: T): T['metadata'] {
  return obj.metadata;
}