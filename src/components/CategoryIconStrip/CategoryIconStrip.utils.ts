import { StripItem } from "./CategoryIconStrip.types";

const ITEMS = [
  {
    name: "Bộ Lọc Không Khí",
    source: require("../../../assets/items/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
  },
  {
    name: "Bộ Lọc Dầu",
    source: require("../../../assets/items/2a4e99e118c2475e01b55c58b12926f711d51d89.png"),
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    source: require("../../../assets/items/2f86b08fd9774c29b5ea627f3e67a5c9cf1c382c.png"),
  },
  {
    name: "Bộ Lọc Trong Cabin",
    source: require("../../../assets/items/02f5748e60b4ba108ec0cc201b28e1f4980a1fe4.png"),
  },
  {
    name: "Bộ Lọc Không Khí",
    source: require("../../../assets/items/70780663158c02fc8434f4f8bf80205b1b085f61.png"),
  },
  {
    name: "Bộ Lọc Dầu",
    source: require("../../../assets/items/2a4e99e118c2475e01b55c58b12926f711d51d89.png"),
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    source: require("../../../assets/items/2f86b08fd9774c29b5ea627f3e67a5c9cf1c382c.png"),
  },
  {
    name: "Bộ Lọc Trong Cabin",
    source: require("../../../assets/items/02f5748e60b4ba108ec0cc201b28e1f4980a1fe4.png"),
  },
];

const PER_PAGE = 5; // fixed as in Figma

export const getCategoryIconStripData = () => {
  return { ITEMS, PER_PAGE };
};

export function paginate(items: StripItem[], perPage: number): StripItem[][] {
  const res: StripItem[][] = [];
  for (let i = 0; i < items.length; i += perPage) {
    const slice = items.slice(i, i + perPage);
    while (slice.length < perPage) slice.push({ placeholder: true });
    res.push(slice);
  }
  if (res.length === 0) {
    res.push(new Array(perPage).fill({ placeholder: true }));
  }
  return res;
}
