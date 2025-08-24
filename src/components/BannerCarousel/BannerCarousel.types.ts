export type BannerCarouselProps = {
  sources: any[];
  height?: number;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayIntervalMs?: number;
};

export type BannerCarouselState = {
  pageW: number;
  index: number;
};
