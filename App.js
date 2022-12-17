import React from "React";
import {createStackNavigator,createAppContainer} from "react-navigation";

import HomeScreen from "./Screens/Homescreen";
import Basketballscreen from "./Screens/Basketballscreen";
import AmericanFootballscreen from "./Screens/AmericanFootballscreen";
import FootballScreen from "./Screens/Footballscreen";


const AppStackNavigator = createStackNavigator({
  HomeScreen:HomeScreen,
  Basketballscreen:Basketballscreen,
  AmericanFootballscreen:AmericanFootballscreen,
  FootballScreen:FootballScreen
})

const AppNavigator = createAppContainer(AppStackNavigator)
function App(){
  return(
    <AppNavigator/>
  );
}

export default App;