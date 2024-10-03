import {  del, get, post } from "../utils/request"

export const getProductList = async ()=>{
    const result = await get("products");
    return result
}
export const getCategory = async ()=>{
      const result = await get("category");
      return result
}

export const createBookStore = async(options)=>{
    const result = await post("store",options)
    return result
}
  
export const getBookStore = async ()=>{
    const result = await get("store");
    return result
}

export const delBookStore = async(id)=>{
    const result = await del(`store/${id}`)
    return result
}