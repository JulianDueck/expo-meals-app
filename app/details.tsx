import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { MEALS } from "@/data/dummy-data";
import MealDetails from "@/components/MealDetails";
import SubTitle from "@/components/MealDetail/SubTitle";
import List from "@/components/MealDetail/List";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import HeaderIcon from "@/components/MealDetail/HeaderIcon";

export default function Details() {
  const { mealId } = useLocalSearchParams<{ mealId: string }>();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonHandler = () => {
    console.log("Button pressed");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: "#3f2f25", light: "#3f2f25" }}
      headerImage={
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
      }
    >
      <Stack.Screen
        options={{
          headerTitle: selectedMeal?.title,
          headerRight: () => {
            return (
              <HeaderIcon
                onPress={headerButtonHandler}
                color="white"
                name="star"
              />
            );
          },
        }}
      />
      <View style={styles.rootContainer}>
        <MealDetails
          duration={selectedMeal?.duration!}
          complexity={selectedMeal?.complexity!}
          affordability={selectedMeal?.affordability!}
          style={styles.detailsText}
        />
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal?.ingredients!} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal?.steps!} />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listContainer: {
    width: "90%",
  },
});
