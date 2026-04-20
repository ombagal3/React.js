import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value: []
}
 const todoSlice = createSlice ({
    name : "todo",
    initialState,
    reducers : {
        addTodo: (state,actions) => { state.value.push(actions.payload) },
        removeTodo:(state,actions) => { state.value.splice(actions.payload, 1)},

        updateTodo: (state, actions) => {
  const { index, newText } = actions.payload;
  state.value[index] = newText;
}
        
    }
})
export default todoSlice.reducer;
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;