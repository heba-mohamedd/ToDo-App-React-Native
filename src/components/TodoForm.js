import { useDispatch } from "react-redux";

import { Text } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";

import { styles } from "../styles";
import { addTodo } from "../Redux/Slices/todo.slice";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const HandleAddTodo = () => {
    const obj = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    if (title) {
      dispatch(addTodo(obj));
    }
    setDescription("");
    setTitle("");
  };
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Description"
        onChangeText={(value) => setDescription(value)}
      />
      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.8}
        onPress={HandleAddTodo}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.dividerLine}></Text>
    </>
  );
};

export default TodoForm;
