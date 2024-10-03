const bookReducer = (state=[],action) => {
    let newState =  [...state];
    switch (action.type) {
        case "ADD_TO_STORE":
            return [
                ...state,
                {
                    id:action.id,
                    info: action.info,
                }
            ]
        
        case "DELETE_ITEM":
            newState = newState.filter(item=> item.id !== action.id)
            return newState

        case "DELETE_ALL":
            return [] 
               
        default: return state;
    }
}

export default bookReducer;