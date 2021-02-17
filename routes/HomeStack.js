import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      //headerStyle: { backgroundColor: "#f0e" },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#f0e",
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default HomeStack;
