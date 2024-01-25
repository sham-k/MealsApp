import "react-native-gesture-handler";
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './assets/screens/CategoriesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import MealsOverviewScreen from './assets/screens/MealsOverviewScreen';
import MealDetailScreen from './assets/screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './assets/screens/FavoritesScreen';


const Stack= createNativeStackNavigator();
const Drawer= createDrawerNavigator();

function DrawerNavigator(){
  return(
  <DrawerNavigator
    screenOptions={{
       headerStyle:{backgroundColor:'#351401'},
       headerTintColor:'white',
       sceneContainerStyle:{backgroundColor:'#3f2f25'}
    }}
  >
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title:'All Categories'
    }}/>
    <Drawer.Screen name= "Favorites" component={FavoritesScreen}/>
  </DrawerNavigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style="light"/>
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
       headerStyle:{backgroundColor:'#351401'},
       headerTintColor:'white',
       sceneContainerStyle:{backgroundColor:'#3f2f25'}
    }}
    >
    <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={{
      headerShown:false,

    }} />
    <Stack.Screen  name="MealsOverview" component={MealsOverviewScreen}
    />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
      title: 'About the Meal'
    }}
   />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
