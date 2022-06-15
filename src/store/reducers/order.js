import { GET_ALL_ORDER, SET_CANCEL_ORDERS, SET_CONFIRMED_ORDERS, SET_CURRENT_ORDER, SET_CURRENT_ORDER_ITEMS, SET_DELIVERED_ORDERS, SET_DELIVERING_ORDERS, SET_WAITING_ORDERS, UPDATE_CANCEL_ORDERS } from "../actions/order";

const initialState = {
  waitingOrders: [],
  confirmedOrders: [],
  deliveringOrders: [],
  deliveredOrders: [],
  cancelOrders: [],
  allOrders: [],
  currentOrder: {},
  currentOrderItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ORDER: {
        return {
            ...state,
            currentOrder: action.order,
          };
    }
    case SET_CURRENT_ORDER_ITEMS: {
      return {
        ...state,
        currentOrderItems: action.orderItems,
      };
    }
    case SET_WAITING_ORDERS: {
        return {
          ...state,
          waitingOrders: action.orderItems,
        };
    }
    case SET_CONFIRMED_ORDERS: {
        return {
          ...state,
          confirmedOrders: action.orderItems,
        };
    }
    case SET_DELIVERING_ORDERS: {
        return {
          ...state,
          deliveringOrders: action.orderItems,
        };
    }
    case SET_DELIVERED_ORDERS: {
        return {
          ...state,
          deliveredOrders: action.orderItems,
        };
    }
    case SET_CANCEL_ORDERS: {
        return {
          ...state,
          cancelOrders: action.orderItems,
        };
    }
    case GET_ALL_ORDER: {
        return {
          ...state,
          allOrders: action.orderItems,
        };
    }
    default:
      return state;
  }
};
// export const GET_ALL_ORDER = 'GET_ALL_ORDER';
// export const UPDATE_ORDER = 'UPDATE_ORDER';
// export const SET_WAITING_ORDERS = 'SET_WAITING_ORDERS';
// export const SET_CONFIRMED_ORDERS = 'SET_CONFIRMED_ORDERS';
// export const SET_DELIVERING_ORDERS = 'SET_DELIVERING_ORDERS';
// export const SET_DELIVERED_ORDERS = 'SET_DELIVERED_ORDERS';
// export const SET_CANCEL_ORDERS = 'SET_CANCEL_ORDERS';
// export const CONFIRM_ORDERS = 'CONFIRM_ORDERS';
// export const DELIVERING_ORDERS = 'DELIVERING_ORDERS';
// export const DELIVERED_ORDERS = 'DELIVERED_ORDERS';
// export const CANCEL_ORDERS = 'CANCEL_ORDERS';
// export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
// export const SET_CURRENT_ORDER_ITEMS = 'SET_CURRENT_ORDER';
