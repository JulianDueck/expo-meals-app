import { FlatList } from "react-native";
import { CATEGORIES } from "@/data/dummy-data";
import CategoryGridTile from "@/components/CategoryGridTile";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const pressHandler = (categoryId: string) => {
    router.navigate({
      pathname: "/mealsOverview",
      params: { categoryId },
    });
    return;
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={pressHandler.bind(null, item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
