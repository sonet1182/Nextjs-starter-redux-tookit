const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  todos: localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [],
};

const Slice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const data = {
        id: nanoid(),
        title: action.payload,
      };

      state.todos.push(data);
      localStorage.setItem('todo', JSON.stringify(current(state.todos)))
    },
    removeToDo: (state, action) => {
      const data = state.todos.filter((item) => item.id !== action.payload);
      state.todos = data;

      let toDo = JSON.stringify(state.todos);
      localStorage.setItem("todo", toDo);
    },
  },
});

export const { addToDo, removeToDo } = Slice.actions;
export default Slice.reducer;
