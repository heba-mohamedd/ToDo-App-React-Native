import React from "react";
import { SafeAreaView } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Todos from "./components/Todos";

import { styles } from "./styles";

import TodoForm from "./components/TodoForm";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoForm />
      <Todos />
    </SafeAreaView>
  );
};

export default Home;
