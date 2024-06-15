import MealItem from "@/components/MealItem";
import { CATEGORIES, MEALS } from "@/data/dummy-data";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function MealsOverview() {
  const { categoryId } = useLocalSearchParams<{
    categoryId: string;
  }>();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({ headerTitle: categoryTitle });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId as never);
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
