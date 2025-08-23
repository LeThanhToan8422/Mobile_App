export interface CategoryFilter {
  id: string;
  name: string;
  image: any;
  isActive: boolean;
}

export interface CategoryProduct {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: any;
}

export interface CategorySection {
  id: string;
  title: string;
  products: CategoryProduct[];
}

export interface CategoryScreenState {
  selectedFilter: string;
  activeFilterIndex: number;
  sections: CategorySection[];
}
