import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("get/todos", async () => {
  const data = await AsyncStorage.getItem("todos");
  return JSON.parse(data);
});

const todoSlice = createSlice({
  name: getTodos || "todo",
  initialState: {
    todos: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      AsyncStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleStatus: (state, action) => {
      const id = action.payload;
      const itemIndex = state.todos.findIndex((element) => element.id === id);

      if (itemIndex === -1) return;
      const obj = {
        ...state.todos[itemIndex],
        completed: !state.todos[itemIndex].completed,
      };
      const allTodos = [...state.todos];
      allTodos[itemIndex] = obj;
      state.todos = allTodos;
      AsyncStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // toggleStatus: (state, action) => {
    //   const id = action.payload;
    //   const todo = state.todos.find((item) => item.id === id);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const newTodos = state.todos.filter((item) => item.id !== id);
      state.todos = newTodos;
      AsyncStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const { addTodo, toggleStatus, deleteTodo } = todoSlice.actions;
export default todoSlice;
