import {Image, Platform, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

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
      title: title,
      headerRight: () => (
          <Pressable>
            <Ionicons name={"star"} size={24} color={"white"} />
          </Pressable>
        )
    })
  }, [navigation, title])

  return (
      <ScrollView>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View>
          {ingredients.map((ingredient, index) =>
            <View key={index} style={styles.sectionContainer}>
              <Text style={styles.sectionItem}>- {ingredient}</Text>
            </View>
          )}
        </View>
        <Text style={styles.sectionTitle}>Steps</Text>
        <View>
          {steps.map((step, index) =>
            <View key={index} style={styles.sectionContainer}>
              <Text style={styles.sectionItem}>{index + 1}) {step}</Text>
            </View>
          )}
        </View>
      </ScrollView>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  headerRight: {
    color: 'white'
  },
  image: {
    width: '100%',
    height: 250
  },
  sectionContainer: {
    backgroundColor: '#8a766f',
    marginVertical: 4,
    marginHorizontal:24,
    borderRadius: 8,
    padding: 8
  },
  sectionTitle: {
    color: 'white',
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16
  },
  sectionItem: {
    color: '#3f2f25'
  }
})
