import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Form = ({ todos, setTodos, setFilterTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    const obj = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    if (title) {
      setTodos([...todos, obj]);
      setFilterTodos([...todos, obj]);
    }

    setDescription("");
    setTitle("");
  };

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonvalue = await AsyncStorage.getItem("todos");
        if (jsonvalue !== null) {
          const storedTodos = JSON.parse(jsonvalue);
          setTodos(storedTodos);
          setFilterTodos(storedTodos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilterTodos(todos);
    storeData();
  }, [todos]);

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
        onPress={addTodo}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.dividerLine}></Text>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
  },
  addHeader: {
    fontSize: 25,
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
  },
  todoText: {
    width: 400,
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    // textAlign: "center",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: { flexDirection: "row" },
  doneTodo: {
    textDecorationLine: "line-through",
  },
});
