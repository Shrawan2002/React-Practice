import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:"abc", task: "demo-task", isDone: false}]

}

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        addTodo: (state,action) =>{
            let newTodo = {
               id: nanoid(),
               task: action.payload,
               isDone: false
            }
            state.todos.push(newTodo);
        },

        deleteTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id != action.payload);
        },

        marksAsDone : (state, action)=>{
             state.todos = state.todos.map((todo)=>{

                if(todo.id === action.payload){
                   return {...todo,isDone:true}
                }else{
                    return todo;
                }
             })
        }
    }
})

export const {addTodo, deleteTodo, marksAsDone} = todoSlice.actions;
export default todoSlice.reducer;