import React from "react";
import { View, Text } from "react-native";
import { CountdownProps, PillProps } from "./Countdown.types";
import { styles } from "./Countdown.styles";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown({
  seconds = 3600,
  variant = "pill",
}: CountdownProps) {
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

function Pill({ label, variant }: PillProps) {
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
