const { configureStore } = require("@reduxjs/toolkit");
import userSlice from './slice'
import toDoSlice from './toDoSlice';

export const store = configureStore({
    reducer : {
        userData : userSlice,
        todoData : toDoSlice
    }
})