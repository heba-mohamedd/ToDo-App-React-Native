import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../Redux/Slices/todo.slice";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Todo = ({ todo }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.todoText}
      onPress={() => navigate("TodoDetails", todo)}
    >
      <AntDesign
        name={todo.completed ? "checkcircleo" : "closecircleo"}
        size={24}
        color={todo.completed ? "green" : "red"}
        onPress={(e) => {
          e.stopPropagation();
          dispatch(toggleStatus(todo.id));
        }}
      />

      <Text>{todo.title}</Text>
      <View style={styles.edit}>
        <Feather
          name="trash"
          size={24}
          color="red"
          onPress={() => dispatch(deleteTodo(todo.id))}
        />
        <MaterialIcons name="edit" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export default Todo;
