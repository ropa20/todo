//holds your current state and action
const initialData={
    list2:[]
}

const listReducer=(state=initialData, action)=>{
    switch(action.type)
    {

        case "ADD_TITLE" :

            return{
                ...state,
                list2:[...state.list2, action.data]
            }
    
        default: {
            return {
                ...state
            }
        }
    }
}
export default listReducer;