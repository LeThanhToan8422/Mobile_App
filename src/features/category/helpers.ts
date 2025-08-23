import { CategoryItem } from "../../components/CategorySection";

export const makeItems = (prefix: string, n: number): CategoryItem[] =>
  new Array(n)
    .fill(null)
    .map((_, i) => ({ id: `${prefix}-${i}`, name: `Bộ lọc gió` }));
