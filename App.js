import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchScreen from "./Screens/SearchScreen";
import BookTransactionScreen from "./Screens/BookTransactionScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Search: { screen: SearchScreen },
    Transaction: { screen: BookTransactionScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        //console.log(routeName);
        if (routeName === "Transaction") {
          return (
            <Image
              source={require("./assets/book.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          );
        } else if (routeName === "Search") {
          return (
            <Image
              source={require("./assets/searchingbook.png")}
              style={{ width: 40, height: 40 }}
            ></Image>
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);
