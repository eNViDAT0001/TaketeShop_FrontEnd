import ImageModel from '../../models/image/imageModel';
import CategoryModel from '../../models/product/CategoryModels';
import ProductModel from '../../models/product/ProductModel';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

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
        const images = [];
        if (!resData[key].images){
          images.push(new ImageModel(-1, 'https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2020/08/112815953-stock-vector-no-image-available-icon-flat-vector.jpg'));
        } else {
          const arrImage = resData[key].images.split(',')
          for (const image in arrImage){
            const tempImage = arrImage[image].split(' ');
            images.push(new ImageModel(tempImage[0], tempImage[1]))
          }
        }
        loadedProducts.push(
          new ProductModel(
            resData[key].id,
            resData[key].category_id,
            resData[key].unit_id,
            resData[key].user_id,
            resData[key].unit_id,
            resData[key].name,
            resData[key].category_name,
            resData[key].descriptions,
            resData[key].price,
            resData[key].quantity,
            resData[key].unit,
            resData[key].discount,
            resData[key].false,
            images,
            resData[key].sold,
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
export const fetchCategory = () => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch('http://localhost:5000/category/all');

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new CategoryModel(
            resData[key].id,
            resData[key].name,
            resData[key].discount,
            resData[key].image,
            resData[key].create_time,
            resData[key].update_time,
          ),
        );
      }

      dispatch({type: SET_CATEGORIES, categories: loadedProducts});
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
  image,
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
        image,
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
        image,
        unit_id,
        discount,
        category_id,
        user_id,
      },
    });
  };
};
