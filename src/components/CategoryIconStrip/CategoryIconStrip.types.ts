export type StripItem = {
  name?: string;
  source?: any;
  placeholder?: boolean;
};

export type Page = {
  key: string;
  items: StripItem[];
};

export interface CategoryIconStripProps {
  onCategoryPress?: (categoryName: string, index: number) => void;
}
