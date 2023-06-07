import {Platform, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";

const MealDetails = ({route, navigation}) => {
  const {id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree} = MEALS.find((m) => m.id === route.params.mealId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title
    })
  }, [title])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View>
          {ingredients.map((ingredient, index) => <Text key={index} style={styles.sectionItem}>- {ingredient}</Text>)}
        </View>
        <Text style={styles.sectionTitle}>Steps</Text>
        <View>
          {steps.map((step, index) => <Text key={index} style={styles.sectionItem}>{index + 1} - {step}</Text>)}
        </View>
      </ScrollView>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white'
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16
  },
  sectionItem: {

  }
})
