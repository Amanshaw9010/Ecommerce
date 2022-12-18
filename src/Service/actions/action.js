import { ADD_TO_CART } from '../Constants'
export const addToCart = (data) => {
    
    console.log("hi add action");
    return {
        type: ADD_TO_CART,
        data: data
    }
}


export const removeToCart = (data) => {
    console.log("hi remove action");
    return {
        type: "REMOVE_TO_CART",
        data: data
    }
}



