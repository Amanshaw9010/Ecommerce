import { ADD_TO_CART } from '../Constants'

let initialState = {
    cardData: []
}

export default function cardItems(state = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            console.log("hi add reducer");  
            return [
                ...state,
                action.data
            ]

        case "REMOVE_TO_CART":
            console.log("action reducer:", action.data.Cart);
            //    console.log( state.splice(action.data, 1));
            state = action.data.Cart
            return state

        default:
            return state
    }
}








