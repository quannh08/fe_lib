export const addToStore = (id,info)=>{
    return {
        type:"ADD_TO_STORE",
        id:id,
        info:info
    }
}

export const deleteItem = (id)=>{
    return {
        type:"DELETE_ITEM",
        id:id
    }
}

export const deleteAll = ()=>{
    return{
        type:"DELETE_ALL",
    }
}