import React from "react";
import { View, Text, StyleSheet } from "react-native";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type Props = { seconds?: number; variant?: "pill" | "box" };

export default function Countdown({ seconds = 3600, variant = "pill" }: Props) {
  const [left, setLeft] = React.useState(seconds);
  React.useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = Math.floor(left / 3600);
  const mm = Math.floor((left % 3600) / 60);
  const ss = left % 60;
  return (
    <View style={[styles.row, variant === "box" && { gap: 6 }]}>
      <Pill label={pad(hh)} variant={variant} />
      <Pill label={pad(mm)} variant={variant} />
      <Pill label={pad(ss)} variant={variant} />
    </View>
  );
}

function Pill({ label, variant }: { label: string; variant: "pill" | "box" }) {
  if (variant === "box") {
    return (
      <View style={styles.box}>
        <Text style={styles.boxTxt}>{label}</Text>
      </View>
    );
  }
  return (
    <View style={styles.pill}>
      <Text style={styles.pillTxt}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  // pill style (old)
  pill: {
    backgroundColor: "#FF6B57",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginHorizontal: 4,
  },
  pillTxt: { color: "#fff", fontWeight: "900", fontSize: 12 },
  // box style per Figma
  box: {
    width: 26,
    height: 26,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E53935",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },
  boxTxt: { color: "#fff", fontWeight: "900", fontSize: 12 },
});
