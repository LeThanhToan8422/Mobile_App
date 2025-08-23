import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import { Colors } from "../theme/colors";

const { width: SCREEN_W } = Dimensions.get("window");

const FIGMA_CONTENT_W = 369; // inner content width in Figma
const H_PADDING = 16;
const CONTENT_W = SCREEN_W - H_PADDING * 2;
const SCALE = CONTENT_W / FIGMA_CONTENT_W;

const ITEM_W = 79 * SCALE;
const ITEM_H = 110 * SCALE; // slightly taller to fit 2 lines
const CARD_RADIUS = 8;
const CARD_PADDING = 4 * SCALE;
const PER_PAGE = 5; // fixed as in Figma

const ITEMS = [
  {
    name: "Bộ Lọc Không Khí",
    source: require("../../assets/items/3efca5a09429cf058dbaf27f6f3f241f69d16190.png"),
  },
  {
    name: "Bộ Lọc Dầu",
    source: require("../../assets/items/2a4e99e118c2475e01b55c58b12926f711d51d89.png"),
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    source: require("../../assets/items/2f86b08fd9774c29b5ea627f3e67a5c9cf1c382c.png"),
  },
  {
    name: "Bộ Lọc Trong Cabin",
    source: require("../../assets/items/02f5748e60b4ba108ec0cc201b28e1f4980a1fe4.png"),
  },
  {
    name: "Bộ Lọc Không Khí",
    source: require("../../assets/items/70780663158c02fc8434f4f8bf80205b1b085f61.png"),
  },
  {
    name: "Bộ Lọc Dầu",
    source: require("../../assets/items/2a4e99e118c2475e01b55c58b12926f711d51d89.png"),
  },
  {
    name: "Bộ Lọc Nhiên Liệu",
    source: require("../../assets/items/2f86b08fd9774c29b5ea627f3e67a5c9cf1c382c.png"),
  },
  {
    name: "Bộ Lọc Trong Cabin",
    source: require("../../assets/items/02f5748e60b4ba108ec0cc201b28e1f4980a1fe4.png"),
  },
];

type StripItem = { name?: string; source?: any; placeholder?: boolean };
type Page = { key: string; items: StripItem[] };

function paginate(items: StripItem[], perPage: number): StripItem[][] {
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

export default function CategoryIconStrip() {
  const realPages = React.useMemo(
    () =>
      paginate(ITEMS, PER_PAGE).map((arr, i) => ({ key: `p${i}`, items: arr })),
    []
  );
  const canLoop = false;
  const data: Page[] = realPages;
  const listRef = React.useRef<FlatList<Page>>(null);
  const [page, setPage] = React.useState(0); // 0..realPages.length-1

  React.useEffect(() => {
    if (canLoop && listRef.current) {
      requestAnimationFrame(() =>
        listRef.current?.scrollToOffset({ offset: SCREEN_W, animated: false })
      );
    }
  }, [canLoop]);

  const onMomentumEnd = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const p = Math.round(x / SCREEN_W);
    if (canLoop) {
      if (p === 0) {
        listRef.current?.scrollToOffset({
          offset: SCREEN_W * realPages.length,
          animated: false,
        });
        setPage(realPages.length - 1);
        return;
      }
      if (p === data.length - 1) {
        listRef.current?.scrollToOffset({ offset: SCREEN_W, animated: false });
        setPage(0);
        return;
      }
      setPage(p - 1);
    } else {
      setPage(p);
    }
  };

  return (
    <View>
      <FlatList
        ref={listRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(it) => it.key}
        onMomentumScrollEnd={onMomentumEnd}
        scrollEventThrottle={16}
        decelerationRate="normal"
        bounces={false}
        renderItem={({ item }) => (
          <View style={{ width: SCREEN_W, paddingHorizontal: H_PADDING }}>
            <View
              style={{
                width: CONTENT_W,
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              {item.items.map((it, i) => (
                <View
                  key={i}
                  style={[
                    styles.card,
                    {
                      width: ITEM_W,
                      height: ITEM_H,
                      opacity: it.placeholder ? 0 : 1,
                    },
                  ]}>
                  {!it.placeholder && (
                    <>
                      <Image
                        source={it.source}
                        style={[
                          styles.icon,
                          {
                            width: ITEM_W - CARD_PADDING * 2,
                            height: ITEM_W - CARD_PADDING * 2,
                          },
                        ]}
                      />
                      <Text style={styles.name} numberOfLines={2}>
                        {it.name}
                      </Text>
                    </>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}
      />
      <View style={styles.pager}>
        {realPages.map((_, i) => (
          <View key={i} style={[styles.dot, i === page && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: CARD_RADIUS,
    padding: CARD_PADDING,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  icon: {
    resizeMode: "contain",
    borderRadius: CARD_RADIUS - 2,
    marginBottom: 4,
  },
  name: {
    fontSize: 11,
    lineHeight: 14,
    color: Colors.text,
    textAlign: "center",
    paddingHorizontal: 2,
  },
  pager: {
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  dot: {
    width: 24 * (CONTENT_W / 360),
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E0E6EF",
    marginHorizontal: 3,
  },
  dotActive: { backgroundColor: Colors.primary },
});
