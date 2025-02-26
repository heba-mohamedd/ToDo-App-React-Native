import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { styles } from "../styles";
import { getTodos } from "../Redux/Slices/todo.slice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [isActive, setActive] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive === "inProgress") {
      setFilteredTodos(todos.filter((item) => !item.completed));
    } else if (isActive === "Done") {
      setFilteredTodos(todos.filter((item) => item.completed));
    } else {
      setFilteredTodos(todos);
    }
  }, [isActive, todos]);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            isActive === "All" && styles.activeFilterBtn,
          ]}
          activeOpacity={0.8}
          onPress={() => setActive("All")}
        >
          <Text style={[styles.filterText, isActive === "All" && styles.text]}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterBtn,
            isActive === "inProgress" && styles.activeFilterBtn,
          ]}
          activeOpacity={0.8}
          onPress={() => setActive("inProgress")}
        >
          <Text
            style={[
              styles.filterText,
              isActive === "inProgress" && styles.text,
            ]}
          >
            In progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterBtn,
            isActive === "Done" && styles.activeFilterBtn,
          ]}
          activeOpacity={0.8}
          onPress={() => setActive("Done")}
        >
          <Text style={[styles.filterText, isActive === "Done" && styles.text]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.dividerLine}></Text>

      {filteredTodos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
