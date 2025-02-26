import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Form from "./Form";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Form todos={todos} setTodos={setTodos} setFilterTodos={setFilterTodos} />
      <TodoItem
        todos={todos}
        filterTodos={filterTodos}
        setTodos={setTodos}
        setFilterTodos={setFilterTodos}
      />
    </SafeAreaView>
  );
};

export default TodoList;

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
