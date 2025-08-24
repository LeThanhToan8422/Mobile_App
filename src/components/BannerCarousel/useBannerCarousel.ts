import React from "react";
import { Dimensions, LayoutChangeEvent } from "react-native";
import {
  BannerCarouselProps,
  BannerCarouselState,
} from "./BannerCarousel.types";

const { width: SCREEN_W } = Dimensions.get("window");

export const useBannerCarousel = (props: BannerCarouselProps) => {
  const {
    sources,
    loop = true,
    autoPlay = true,
    autoPlayIntervalMs = 3000,
  } = props;

  // Safety check for sources
  if (!sources || !Array.isArray(sources) || sources.length === 0) {
    return {
      listRef: React.useRef<any>(null),
      pageW: SCREEN_W,
      index: 0,
      canLoop: false,
      data: [],
      handleMomentumEnd: () => {},
      onLayout: () => {},
    };
  }

  const listRef = React.useRef<any>(null);
  const [pageW, setPageW] = React.useState<number>(SCREEN_W);
  const [index, setIndex] = React.useState(0);

  const canLoop = loop && sources.length > 1 && pageW > 0;
  const data = canLoop
    ? [sources[sources.length - 1], ...sources, sources[0]]
    : sources;

  React.useEffect(() => {
    if (canLoop && listRef.current) {
      requestAnimationFrame(() => {
        listRef.current?.scrollToOffset({ offset: pageW, animated: false });
      });
    }
  }, [canLoop, pageW]);

  const handleMomentumEnd = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const page = Math.round(x / pageW);
    if (canLoop) {
      if (page === 0) {
        listRef.current?.scrollToOffset({
          offset: pageW * sources.length,
          animated: false,
        });
        setIndex(sources.length - 1);
        return;
      }
      if (page === data.length - 1) {
        listRef.current?.scrollToOffset({ offset: pageW, animated: false });
        setIndex(0);
        return;
      }
      setIndex(page - 1);
    } else {
      setIndex(page);
    }
  };

  React.useEffect(() => {
    if (!autoPlay || pageW <= 0 || sources.length === 0) return;
    const id = setInterval(() => {
      const currentDataPage = canLoop ? index + 1 : index;
      const nextDataPage = currentDataPage + 1;
      listRef.current?.scrollToOffset({
        offset: nextDataPage * pageW,
        animated: true,
      });
    }, autoPlayIntervalMs);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayIntervalMs, canLoop, index, pageW, sources.length]);

  const onLayout = (e: LayoutChangeEvent) => {
    setPageW(Math.round(e.nativeEvent.layout.width));
  };

  return {
    listRef,
    pageW,
    index,
    canLoop,
    data,
    handleMomentumEnd,
    onLayout,
  };
};
