// Cosmic CMS Object Types
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  status: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
  metadata: any;
}

export interface MenuItem extends CosmicObject {
  metadata: {
    dish_name: string;
    description: string;
    price: string;
    category: {
      key: string;
      value: string;
    };
    chefs_special?: boolean;
    dish_photo?: {
      url: string;
      imgix_url: string;
    };
    wine_pairing?: {
      id: string;
      slug: string;
      title: string;
      type: string;
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
    };
  };
}

export interface ChefProfile extends CosmicObject {
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

// Alias for backward compatibility
export type Chef = ChefProfile;

export interface WinePairing extends CosmicObject {
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

// Alias for backward compatibility
export type WineItem = WinePairing;

// Menu Category type
export type MenuCategory = 'steaks' | 'appetizers' | 'sides' | 'desserts';

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  reservationRequest?: boolean;
  partySize?: number;
  preferredDate?: string;
  preferredTime?: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  partySize?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}