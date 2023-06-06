import {FlatList, View} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({id}) => id}
      renderItem={({item}) => <CategoryGridTile {...item} />}
      numColumns={2}
    />
  )
}

export default CategoriesScreen
