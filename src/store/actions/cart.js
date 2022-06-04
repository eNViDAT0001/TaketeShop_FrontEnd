import CartItemsModel from '../../models/cart/CartItemsModel';
import CartModel from '../../models/cart/CartModel';
import ImageModel from '../../models/image/imageModel';

export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const DELETE_CART_ITEMS = 'DELETE_CART_ITEMS';
export const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS';
export const SELECT_CART_ITEMS = 'SELECT_CART_ITEMS';
export const CHECK_ALL_CART_ITEMS = 'CHECK_ALL_CART_ITEMS';
export const PICK_CART_ITEMS = 'BUY_CART_ITEMS';
export const PICK_ADDRESS = 'PICK_ADDRESS';
export const MAKE_ORDER = 'MAKE_ORDER';

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
            categoryID: resData[key].categoryID,
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
export const updateCartItemQuantityByID = (token, itemID, quantity) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:5000/cart/item/${itemID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      }).then(
        dispatch({type: UPDATE_CART_ITEMS, id: itemID, quantity: quantity}),
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
export const selectCartItem = (itemID, flag) => {
  return async dispatch => {
    dispatch({type: SELECT_CART_ITEMS, id: itemID, flag: flag});
  };
};
export const checkAllCartItems = flag => {
  return async dispatch => {
    dispatch({type: CHECK_ALL_CART_ITEMS, flag: flag});
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
export const pickCartItems = (items, quantity, totalBill) => {
  return async dispatch => {
    dispatch({type: PICK_CART_ITEMS, items: items, quantity: quantity, totalBill: totalBill });
  };
};
export const pickAddress = address => {
  return async dispatch => {
    dispatch({type: PICK_ADDRESS, address: address});
  };
};

export const makeOrder = (token, user, items, address, quantity, totalBill, payment) => {
  return async dispatch => {
    await fetch(`http://localhost:5000/order/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        userID: user.userID,
        addressID: address.addressID,
        name: user.name,
        gender: user.gender,
        phone: user.phone,
        province: address.province,
        district: address.district,
        ward: address.province,
        quantity: quantity,
        totalCost: totalBill,
        payment: payment,
      }),
    }).then(() => console.log("Make order Success"));
  };
};
