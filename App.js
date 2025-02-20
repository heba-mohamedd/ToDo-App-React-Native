import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
// import {  } from "react-native";

const Data = [
  {
    id: "1",
    title: "Buy groceries",
    completed: false,
  },
  {
    id: "2",
    title: "Finish React project",
    completed: true,
  },
  {
    id: "3",
    title: "Go to the gym",
    completed: false,
  },
  {
    id: "4",
    title: "Read a book",
    completed: false,
  },
  {
    id: "5",
    title: "Call mom",
    completed: true,
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.addHeader}>todo app</Text>
      <TextInput style={styles.input} placeholder="Enter title" />
      <TextInput style={styles.input} placeholder="Enter Description" />
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.dividerLine}></Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.activeFilterBtn} activeOpacity={0.8}>
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
          <Text style={styles.filterText}>In progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.8}>
          <Text style={styles.filterText}>Done</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.todosContainer}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.todoText}>{item.title}</Text>
        )}
      />
    </SafeAreaView>
  );
}

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
    fontSize: 18,
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
    width: 250,
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    textAlign: "center",
    padding: 5,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
});
