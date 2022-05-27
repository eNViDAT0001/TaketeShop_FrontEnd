import CartModel from "../../models/cart/CartModel";

export const ADD_CART_ITEMS = 'ADD_CART_ITEMS';
export const MINUS_CART_ITEMS = 'MINUS_CART_ITEMS';
export const SET_CART = 'SET_CART';
export const SET_CART_ITEMS = 'SET_CART_ITEMS';

export const fetchCart = id => {
  try {
    const response = fetch('http://localhost:5000/item/all/' + id);
    if (response.error) {
      throw new Error(response.msg);
    }
    const resData = await response.json();
    const loadCart = [];
    for (const key in resData) {
        loadCart.push(new CartModel({
            id: resData.id,
            userId: resData.user_id,
        }))
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
