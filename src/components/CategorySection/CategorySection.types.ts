export type CategoryItem = {
  id: string;
  name: string;
};

export interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
}
