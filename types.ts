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
}

// Category object type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
  };
}

// Page object type
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    title?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: Category;
  };
}

// Cosmic API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}