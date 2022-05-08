export const ADD_BANNER = 'ADD_BANNER';

export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_BANNER,
    //bannerData: { items: cartItems, amount: totalAmount }
  };
};
