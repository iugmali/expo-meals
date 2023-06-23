import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";

const MealsList = ({items}) => {
  const renderMealItem = ({item}) => {
    return (
      <MealItem {...item}  />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={({id}) => id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
