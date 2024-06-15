import Meal from "@/models/meal";
import { StyleSheet, Text, TextProps, View } from "react-native";

type MealDetailsProps = TextProps & {
  duration: Meal["duration"];
  complexity: Meal["complexity"];
  affordability: Meal["affordability"];
};

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
}: MealDetailsProps) {
  return (
    <View style={styles.details}>
      <Text style={style}>{duration}m</Text>
      <Text style={style}>{complexity.toUpperCase()}</Text>
      <Text style={style}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    justifyContent: "center",
  },
});
