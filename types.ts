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
    name: string;
    description: string;
    price: number;
    category: string;
    image?: {
      imgix_url: string;
      alt_text?: string;
    };
    dietary_restrictions?: string[];
    ingredients?: string[];
    spice_level?: number;
    featured?: boolean;
    available?: boolean;
  };
}

export interface Chef extends CosmicObject {
  metadata: {
    name: string;
    title: string;
    bio: string;
    experience_years: number;
    specialties: string[];
    image?: {
      imgix_url: string;
      alt_text?: string;
    };
    awards?: string[];
    signature_dish?: string;
  };
}

export interface WineItem extends CosmicObject {
  metadata: {
    name: string;
    type: string;
    vintage: number;
    region: string;
    price: number;
    description: string;
    alcohol_content: number;
    serving_temperature?: string;
    food_pairing?: string[];
    image?: {
      imgix_url: string;
      alt_text?: string;
    };
    availability?: boolean;
    awards?: string[];
  };
}

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