// Part1 : import the libraries
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import HomeScreen from './HomeScreen';
import Recommendation from './Recommendation';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


// Part 2 create component
const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Recommendation: { screen: Recommendation},
},
{
  initialRouteName: 'Home'
  
}
);


// part 2, step 2: export component
export default createAppContainer(AppNavigator);