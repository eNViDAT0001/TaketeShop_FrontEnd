import BannerModel from "../../models/banner/BannerModel";

export const ADD_BANNER = 'ADD_BANNER';
export const SET_BANNER = 'SET_BANNER';
export const DELETE_BANNER = 'DELETE_BANNER';
export const fetchProducts = () => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch('http://localhost:5000/discount');

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new BannerModel(
            resData[key].id,
            resData[key].category_id,
            resData[key].user_id,
            resData[key].name,
            resData[key].descriptions,
            resData[key].price,
            resData[key].quantity,
            resData[key].discount,
            resData[key].unit_id,
            resData[key].create_time,
            resData[key].update_time,
          ),
        );
      }

      dispatch({type: SET_PRODUCTS, products: loadedProducts});
    } catch (err) {
      // send to custom analytics server
      console.log(err);
      throw err;
    }
  };
};