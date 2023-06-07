import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./src/screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import MealDetails from "./src/screens/MealDetails";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#351401'
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25'
      }
    }}>
      <Drawer.Screen
        name={"Categories"}
        component={CategoriesScreen}
        options={{
          title: 'All Categories'
        }}
      />
      <Drawer.Screen name={"Favorites"} component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style={"light"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#351401'
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: '#3f2f25'
          }
        }}>
          <Stack.Screen
            name={"Drawer"}
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name={"MealsOverview"}
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name={"MealDetails"}
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
