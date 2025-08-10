export interface CosmicMedia {
  url: string
  imgix_url: string
}

export interface MenuItem {
  id: string
  slug: string
  title: string
  metadata: {
    dish_name: string
    description: string
    price: string
    category: {
      key: string
      value: string
    }
    chefs_special?: boolean
    dish_photo?: CosmicMedia
    wine_pairing?: WinePairing
  }
}

export interface WinePairing {
  id: string
  slug: string
  title: string
  metadata: {
    wine_name: string
    vineyard: string
    year?: string
    region?: string
    tasting_notes?: string
    price_per_glass?: string
    price_per_bottle?: string
    wine_photo?: CosmicMedia
  }
}

export interface ChefProfile {
  id: string
  slug: string
  title: string
  metadata: {
    chef_name: string
    title: string
    bio: string
    years_experience?: number
    specialties?: string
    chef_photo?: CosmicMedia
  }
}