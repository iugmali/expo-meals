import {FlatList, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({route}) => {
  const categoryId = route.params.categoryId
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0
  })

  const renderMealItem = ({item}) => {
    return (
      <MealItem {...item} />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Meals Overview: {categoryId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={({id}) => id}
        renderItem={renderMealItem}
        />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})
