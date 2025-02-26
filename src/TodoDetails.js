import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const { params } = useRoute();
  return (
    <SafeAreaView>
      <Text>{params.id}</Text>
      <Text>{params.title}</Text>
      <Text>{params.description}</Text>
      <Text>{params.completed}</Text>
    </SafeAreaView>
  );
};

export default TodoDetails;
