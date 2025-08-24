import { useMemo, useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { LEFT_RAIL_TITLES } from "./constants";
import { makeItems, createCategoryEventHandlers } from "./helpers";

export function useCategoryScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const leftTitles = LEFT_RAIL_TITLES;
  const leftActiveIndex = 1; // mock active

  // Lấy params từ navigation (nếu có)
  const params = route.params as any;
  const initialFilter = params?.selectedFilter || leftTitles[leftActiveIndex];
  const initialIndex =
    params?.filterIndex !== undefined ? params.filterIndex : leftActiveIndex;

  // State để theo dõi bộ lọc đang được chọn
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [activeFilterIndex, setActiveFilterIndex] =
    useState<number>(initialIndex);

  // Cập nhật state khi params thay đổi
  useEffect(() => {
    if (params?.selectedFilter && params?.filterIndex !== undefined) {
      setSelectedFilter(params.selectedFilter);
      setActiveFilterIndex(params.filterIndex);
    }
  }, [params]);

  // Mock data - thay đổi theo filter để tạo sự đa dạng
  const section1 = useMemo(
    () => makeItems("s1", 9, selectedFilter),
    [selectedFilter]
  );
  const section2 = useMemo(
    () => makeItems("s2", 9, selectedFilter),
    [selectedFilter]
  );

  // Handler functions
  const handleFilterPress = (filterName: string, index: number) => {
    setSelectedFilter(filterName);
    setActiveFilterIndex(index);
  };

  const handleBackPress = () => {
    // Navigate back to previous screen
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      // Fallback: Navigate to Home if can't go back
      (navigation as any).navigate("Home");
    }
  };

  const eventHandlers = createCategoryEventHandlers();

  return {
    // Data
    leftTitles,
    leftActiveIndex,
    section1,
    section2,

    // State
    selectedFilter,
    activeFilterIndex,

    // Handlers
    handleFilterPress,
    handleBackPress,
    ...eventHandlers,
  } as const;
}
