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
                { cardData: action.data }
            ]

        case "REMOVE_TO_CART":
           console.log("hi remove reducer");
           console.log( state.splice(action.data, 1));
           
            
        default:
            return state
    }
}








