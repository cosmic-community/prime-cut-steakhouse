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
  bucket?: string;
  thumbnail?: string;
  published_at?: string;
  modified_by?: string;
  created_by?: string;
}

// File/Media interface
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Category interface for select-dropdown metafields
export interface MenuCategoryOption {
  key: string;
  value: string;
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
    wine_photo?: CosmicFile;
  };
}

// Menu Item interface - Updated to match actual API response
export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    dish_name: string;
    description: string;
    price: string;
    category: MenuCategoryOption;
    chefs_special: boolean;
    dish_photo?: CosmicFile;
    wine_pairing?: WinePairing;
  };
}

// Menu Item with Wine (alias for MenuItem with wine pairing)
export type MenuItemWithWine = MenuItem;

// Chef Profile interface
export interface ChefProfile extends CosmicObject {
  type: 'chef-profiles';
  metadata: {
    chef_name: string;
    title: string;
    bio: string;
    years_experience?: number;
    specialties?: string;
    chef_photo?: CosmicFile;
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

// Utility types
export type OptionalMetadata<T extends CosmicObject> = Partial<T['metadata']>;
export type CreateMenuItemData = Omit<MenuItem, 'id' | 'created_at' | 'modified_at'>;

// Helper function to safely access metadata
export function getMetadata<T extends CosmicObject>(obj: T): T['metadata'] {
  return obj.metadata;
}