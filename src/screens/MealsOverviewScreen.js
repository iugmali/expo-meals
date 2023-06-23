import {FlatList, StyleSheet, Text, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
  const categoryId = route.params.categoryId
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId).title
    navigation.setOptions({
      title: categoryTitle
    })
  }, [navigation, categoryId])


  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen

