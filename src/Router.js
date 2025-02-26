import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import CompletedTodos from "./CompletedTodos";

const Router = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Main"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Tabs.Screen name="CompletedTodos" component={CompletedTodos} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Router;
