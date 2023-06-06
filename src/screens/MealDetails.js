import {StyleSheet, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";

const MealDetails = ({route, navigation}) => {
  const meal = MEALS.find((m) => m.id === route.params.mealId)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title
    })
  }, [meal])
  return (
    <View style={styles.container}>

    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
})
