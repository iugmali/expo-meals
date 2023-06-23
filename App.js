import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from "./src/screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import MealDetailsScreen from "./src/screens/MealDetailsScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoritesContextProvider from "./src/store/context/favorites-context";
import {Provider} from "react-redux";
import {store} from "./src/store/redux/store";

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
      },
      drawerContentStyle: {
        backgroundColor: '#351401'
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#d9aa8d'
    }}>
      <Drawer.Screen
        name={"Categories"}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => <Ionicons name={"list"} color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name={"Favorites"}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => <Ionicons name={"star"} color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style={"light"} />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
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
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
