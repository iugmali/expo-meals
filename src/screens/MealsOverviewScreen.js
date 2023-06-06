import {FlatList, StyleSheet, Text, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";

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


  const renderMealItem = ({item}) => {
    const pressHandler = () => {
      navigation.navigate('MealDetails', {
        mealId: item.id
      })
    }
    return (
      <MealItem {...item} onPress={pressHandler} />
    )
  }

  return (
    <View style={styles.container}>
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
