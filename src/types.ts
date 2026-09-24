export type ServiceId = 
  | 'cleaning'
  | 'deep-cleaning'
  | 'commercial-cleaning'
  | 'painting-decorating'
  | 'gardening'
  | 'landscaping'
  | 'property-maintenance'
  | 'pressure-washing';

export type PropertyType = 'House' | 'Apartment' | 'Office' | 'Commercial' | 'Rental';

export type FrequencyType = 'One-Off' | 'Weekly' | 'Fortnightly' | 'Monthly' | 'Quarterly' | '6-Month' | '12-Month' | 'Custom';

export interface ServiceDetail {
  id: ServiceId;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  startingPrice: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  packages: {
    name: string;
    description: string;
    price: string;
    items: string[];
    popular?: boolean;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  beforeAfter?: {
    title: string;
    location: string;
    beforeImg: string;
    afterImg: string;
    description: string;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteRequestData {
  propertyType: PropertyType;
  selectedServices: string[];
  frequency: FrequencyType;
  bedrooms: string;
  bathrooms: string;
  approxSqFt?: string;
  postcode: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate?: string;
  notes?: string;
}
