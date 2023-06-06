import {FlatList, View} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = ({item}) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: item.id
      })
    }
    return (
      <CategoryGridTile
        {...item}
        onPress={pressHandler}
        />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({id}) => id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
