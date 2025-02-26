import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TodoItem = ({ todos, filterTodos, setTodos, setFilterTodos }) => {
  const { navigate } = useNavigation();
  const [isActive, setActive] = useState("All");

  const toggleState = (id) => {
    const itemIndex = todos.findIndex((element) => element.id === id);

    if (itemIndex === -1) return;
    const obj = { ...todos[itemIndex], completed: !todos[itemIndex].completed };

    const allTodos = [...todos];
    allTodos[itemIndex] = obj;
    setTodos(allTodos);
  };

  const deleteItem = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const fillteTodos = (type) => {
    if (type === "inProgress") {
      const fillteredTodos = todos.filter((item) => !item.completed);
      setActive("inProgress");
      setFilterTodos(fillteredTodos);
    }
    if (type === "Done") {
      const fillteredTodos = todos.filter((item) => item.completed);
      setActive("Done");
      setFilterTodos(fillteredTodos);
    }
    if (type === "All") {
      setActive("All");
      setFilterTodos(todos);
    }
  };

  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            isActive === "All" && styles.activeFilterBtn,
          ]}
          activeOpacity={0.8}
          onPress={() => fillteTodos("All")}
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
          onPress={() => fillteTodos("inProgress")}
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
          onPress={() => fillteTodos("Done")}
        >
          <Text style={[styles.filterText, isActive === "Done" && styles.text]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.todosContainer}
        data={filterTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.todoText}
            onPress={() => navigate("TodoDetails", item)}
          >
            {item.completed ? (
              <AntDesign
                name="checkcircleo"
                size={24}
                color="green"
                onPress={() => toggleState(item.id)}
              />
            ) : (
              <AntDesign
                name="closecircleo"
                size={24}
                color="red"
                onPress={() => toggleState(item.id)}
              />
            )}
            <Text>{item.title}</Text>
            <View style={styles.edit}>
              <Feather
                name="trash"
                size={24}
                color="red"
                onPress={() => deleteItem(item.id)}
              />
              <MaterialIcons name="edit" size={24} color="black" />
            </View>
          </Pressable>
        )}
      />
    </>
  );
};

export default TodoItem;

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
