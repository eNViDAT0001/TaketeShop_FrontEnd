import { DELETE_CART_ITEMS, SET_CART_ITEMS} from "../actions/cart";

const initialState = {
    cartItems: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CART_ITEMS:{
            return {
                ...state,
                cartItems: action.cartItems
            }
        }
        case DELETE_CART_ITEMS:{
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id != action.id)
            }
        }
        default:{
            return state;
        }
    }
}

export default cartReducer;