import React from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  LayoutChangeEvent,
} from "react-native";

const { width: SCREEN_W } = Dimensions.get("window");

type Props = {
  sources: any[];
  height?: number;
  loop?: boolean;
  autoPlay?: boolean;
  autoPlayIntervalMs?: number;
};

export default function BannerCarousel({
  sources,
  height = 140,
  loop = true,
  autoPlay = true,
  autoPlayIntervalMs = 3000,
}: Props) {
  const listRef = React.useRef<FlatList<any>>(null);
  const [pageW, setPageW] = React.useState<number>(SCREEN_W); // actual container width
  const canLoop = loop && sources.length > 1 && pageW > 0;
  const data = canLoop
    ? [sources[sources.length - 1], ...sources, sources[0]]
    : sources;
  const [index, setIndex] = React.useState(0); // real index 0..sources.length-1

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
      // Current visible data index
      const currentDataPage = canLoop ? index + 1 : index;
      const nextDataPage = currentDataPage + 1; // may point to clone; momentumEnd will normalize
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

  return (
    <View style={{ height }} onLayout={onLayout}>
      <FlatList
        ref={listRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, i) => String(i)}
        onMomentumScrollEnd={handleMomentumEnd}
        scrollEventThrottle={16}
        decelerationRate="normal"
        bounces={false}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{ width: pageW, height, borderRadius: 8 }}
          />
        )}
      />
      <View style={styles.dots}>
        {sources.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.5)",
    marginHorizontal: 3,
  },
  dotActive: { backgroundColor: "#fff", width: 16 },
});
