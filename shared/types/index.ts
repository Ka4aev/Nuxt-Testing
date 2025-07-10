export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: [];
  images?: [];
}

export interface Category {
  id: number;
  name?: string;
  slug: string;
  image: string;
}
