import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

// Import screens
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Account } from "./screen/Account";
import { Cart } from "./screen/Cart";
import { Home } from "./screen/Home";
import { List } from "./screen/List";

// Define screen names
const homeName = "Home";
const splashName = "Splash";
const listName = "list";
const accountName = "Account";
const cartName = "Cart";

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === splashName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === listName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === accountName) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === cartName) {
              iconName = focused ? "cart" : "cart-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} options={{ tabBarLabel: "" }} />
        <Tab.Screen name={listName} component={List} options={{ tabBarLabel: "" }} />
        <Tab.Screen name={cartName} component={Cart} options={{ tabBarLabel: "" }} />
        <Tab.Screen name={accountName} component={Account} options={{ tabBarLabel: "" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
