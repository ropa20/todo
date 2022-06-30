// holds your current state and action
const initialData={
    todos:[], 
}

const todoReducer=(state=initialData, action)=>{
    switch(action.type)
    {
        case "ADD_TODO" :

        return{
            ...state, //previos state
            todos:[...state.todos,action.data]
        }
        
        case "DELETE_TODO" :
        const newList=state.todos.filter((elem)=>elem.id !== action.id)
            return{
                ...state, //previos state
                todos: newList
            }


        case "CHECK_TODO" :
        
            const index = state.todos.findIndex(todo => todo.id === action.id); //finding index
            const newArray = [...state.todos]; //making a new array
            newArray[index].check = !(newArray[index].check)//changing value in the new array
            return { 
                ...state,
                todos: newArray, //reassingning todos to new array
               }
    
        default: {
            return {
                ...state
            }
        }
    }
}
export default todoReducer;