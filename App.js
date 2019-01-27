import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./app/views/Home";
import Game from "./app/views/Game";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },
    Game: {
      screen: Game,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
