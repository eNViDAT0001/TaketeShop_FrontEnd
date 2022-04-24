import Product from '../../models/ProductModel';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch('http://localhost:5000/product/all');

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new Product(
            resData[key].id,
            resData[key].category_id,
            resData[key].user_id,
            resData[key].name,
            resData[key].descriptions,
            resData[key].price,
            resData[key].quantity,
            resData[key].unit_id,
            resData[key].discount,
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

export const createProduct = (
  name,
  description,
  price,
  quantity,
  unit_id,
  discount,
  category_id,
  user_id,
) => {
  return async dispatch => {
    // any async code you want!
    const response = await fetch('http://localhost:5000/product/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        price,
        quantity,
        unit_id,
        discount,
        category_id,
        user_id,
      }),
    });

    const resData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: resData.id,
        name,
        description,
        price,
        quantity,
        unit_id,
        discount,
        category_id,
        user_id,
      },
    });
  };
};
