
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './assets/screens/CategoriesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import MealsOverviewScreen from './assets/screens/MealsOverviewScreen';

const Stack= createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
    <Stack.Screen  name="MealsOverview" component={MealsOverviewScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
