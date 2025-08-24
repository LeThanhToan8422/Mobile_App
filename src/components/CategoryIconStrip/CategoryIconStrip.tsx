import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { CategoryIconStripProps, Page } from "./CategoryIconStrip.types";
import { styles, getCategoryIconStripStyles } from "./CategoryIconStrip.styles";
import { getCategoryIconStripData, paginate } from "./CategoryIconStrip.utils";

export default function CategoryIconStrip({
  onCategoryPress,
}: CategoryIconStripProps) {
  const { ITEMS, PER_PAGE } = getCategoryIconStripData();
  const { SCREEN_W, H_PADDING, CONTENT_W, ITEM_W, ITEM_H, CARD_PADDING } =
    getCategoryIconStripStyles();

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
  }, [canLoop, SCREEN_W]);

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
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.card,
                    {
                      width: ITEM_W,
                      height: ITEM_H,
                      opacity: it.placeholder ? 0 : 1,
                    },
                  ]}
                  onPress={() => {
                    if (!it.placeholder && it.name && onCategoryPress) {
                      onCategoryPress(it.name, i);
                    }
                  }}
                  disabled={it.placeholder}>
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
                </TouchableOpacity>
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
