import Meal from "@/models/meal";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "./MealDetails";

type MealItemProps = {
  item: Meal;
};

export default function MealItem({ item }: MealItemProps) {
  const router = useRouter();

  const pressHandler = () => {
    router.navigate({
      pathname: "/details",
      params: { mealId: item.id },
    });
    return;
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <MealDetails
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
