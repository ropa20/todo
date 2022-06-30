// holds your current state and action


const todoReducer=(state=[], action)=>{
    switch(action.type)
    {
        case "ADD_TODO" :
        //For some reason the initial data of state is recieved as {} insted of null
        //so we had to change it to an array
        state = Object.keys(state).length === 0?[]:state
        return [
            ...state,
            action.data
        ]
        
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