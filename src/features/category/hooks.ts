import { useMemo } from "react";
import { LEFT_RAIL_TITLES } from "./constants";
import { makeItems } from "./helpers";

export function useCategoryScreen() {
  const leftTitles = LEFT_RAIL_TITLES;
  const leftActiveIndex = 1; // mock active
  const section1 = useMemo(() => makeItems("s1", 6), []);
  const section2 = useMemo(() => makeItems("s2", 6), []);
  return { leftTitles, leftActiveIndex, section1, section2 } as const;
}
