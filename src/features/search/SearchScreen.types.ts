export interface SearchScreenProps {
  // Navigation props will be handled by React Navigation
}

export interface SearchScreenState {
  query: string;
  results: any[];
  isLoading: boolean;
}

export interface SearchScreenActions {
  handleSearchInput: (text: string) => void;
  handleSearchSubmit: () => void;
  handleClearSearch: () => void;
  handleProductPress: (product: any) => void;
  handleBuyNow: (product: any) => void;
  handleBackPress: () => void;
}

export interface SearchScreenData {
  legacyResults: any[];
}
