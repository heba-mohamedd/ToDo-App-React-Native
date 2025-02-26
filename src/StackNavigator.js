import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import TodoDetails from "./TodoDetails";
import TodoList from "./TodoList";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Todo App" }}
      />

      <Stack.Screen
        name="TodoDetails"
        component={TodoDetails}
        options={{ title: "Todo Details" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
