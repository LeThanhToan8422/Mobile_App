import { NewsItem } from "./types";

export const items: NewsItem[] = new Array(6).fill(null).map((_, i) => ({
  id: String(i),
  title: "Đầu phun sprinkler là gì? Cấu tạo, ứng dụng...",
  date: "13/02/2025",
  image:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
}));
