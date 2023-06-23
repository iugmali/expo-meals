import {Image, Platform, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import {useContext, useLayoutEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import {FavoritesContext} from "../store/context/favorites-context";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../store/redux/favorites";

const MealDetailsScreen = ({route, navigation}) => {
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

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(id);
  const mealIsFavorite = favoriteMealsIds.includes(id);
  const dispatch = useDispatch()

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(id);
      dispatch(removeFavorite({id}))
    } else {
      // favoriteMealsCtx.addFavorite(id);
      dispatch(addFavorite({id}))

    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
          <Pressable onPress={changeFavoriteStatusHandler}>
            <Ionicons name={mealIsFavorite ? "star" : "star-outline"} size={24} color={"white"} />
          </Pressable>
        )
    })
  }, [navigation, title, changeFavoriteStatusHandler])

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

export default MealDetailsScreen

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
