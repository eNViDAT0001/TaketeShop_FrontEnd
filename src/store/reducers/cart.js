import {
  CHECK_ALL_CART_ITEMS,
  DELETE_CART_ITEMS,
  SELECT_CART_ITEMS,
  SET_CART_ITEMS,
  UPDATE_CART_ITEMS,
} from '../actions/cart';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS: {
      return {
        ...state,
        cartItems: action.cartItems,
      };
    }
    case DELETE_CART_ITEMS: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id != action.id),
      };
    }
    case SELECT_CART_ITEMS: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map(item => {
            if (item.id === action.id)
              return {...item, isSelected: !item.isSelected};
            return item;
          }),
        ],
      };
    }
    case CHECK_ALL_CART_ITEMS: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map(item => {
              return {...item, isSelected: action.flag};
          }),
        ],
      };
    }
    case UPDATE_CART_ITEMS: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map(item => {
            if (item.id == action.id)
              return {...item, quantity: action.quantity};
            return item;
          }),
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
