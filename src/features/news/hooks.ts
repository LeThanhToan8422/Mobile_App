import React from "react";
import { items as DEFAULT_ITEMS } from "./constants";

export function useNewsScreen() {
  const items = DEFAULT_ITEMS;
  const keyExtractor = React.useCallback((it: { id: string }) => it.id, []);
  return { items, keyExtractor } as const;
}
