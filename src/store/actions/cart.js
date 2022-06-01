import CartItemsModel from '../../models/cart/CartItemsModel';
import CartModel from '../../models/cart/CartModel';
import ImageModel from '../../models/image/imageModel';

export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const DELETE_CART_ITEMS = 'DELETE_CART_ITEMS';

export const fetchCartWithUserID = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        'http://localhost:5000/cart/item/user/' + id,
      );
      if (response.error) {
        throw new Error(response.msg);
      }
      const resData = await response.json();
      const loadCartItems = [];

      for (const key in resData) {
        const images = [];
        if (!resData[key].images) {
          images.push(
            new ImageModel(
              -1,
              'https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2020/08/112815953-stock-vector-no-image-available-icon-flat-vector.jpg',
            ),
          );
        } else {
          const arrImage = resData[key].images.split(',');
          for (const image in arrImage) {
            const tempImage = arrImage[image].split(' ');
            images.push(new ImageModel(tempImage[0], tempImage[1]));
          }
        }

        loadCartItems.push(
          new CartItemsModel({
            id: resData[key].id,
            userID: resData[key].user_id,
            productID: resData[key].product_id,
            name: resData[key].product_name,
            quantity: resData[key].quantity,
            price: resData[key].price,
            discount: resData[key].discount,
            images: images,
            createTime: resData[key].createTime,
            updateTime: resData[key].updateTime,
          }),
        );
      }
      dispatch({type: SET_CART_ITEMS, cartItems: loadCartItems});
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
export const updateCartItemQuantityByID = (token, cartID, quantity) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:5000/cart/item/${cartID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      }).then(console.log("Cart Item left:",quantity));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
export const deleteCartItemByID = (token, cartID) => {
  return async dispatch => {
    try {
      console.log(`http://localhost:5000/cart/item/${cartID}`);
      await fetch(`http://localhost:5000/cart/item/${cartID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
      }).then(dispatch({type: DELETE_CART_ITEMS, id: cartID}));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
