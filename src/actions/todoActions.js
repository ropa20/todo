export const addTodo = (data) => {

    return (dispatch) => {
        dispatch({
        type:"ADD_TODO", //WHAT TO DO
            data
        })
    }
}

export const addTitle= (data)=>{
    return (dispatch) => {
        dispatch({
        type:"ADD_TITLE", //WHAT TO DO
            data:data,
        })
    }
}

export const deleteTodo= (id)=>{
    return{
        type: "DELETE_TODO",
        id
    }
}

export const checkTodo= (id)=>{
    return{
        type: "CHECK_TODO",
        id
    }
}
