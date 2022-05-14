import {PRODUCT_ITEMS_DUMMY_DATA} from '../../dummy_database/dummy-data';
import ProductModel from '../../models/product/ProductModel';
import {
  CREATE_PRODUCT,
  SET_CATEGORIES,
  SET_PRODUCTS,
} from '../actions/products';

const initialState = {
  availableProducts: [],
  wishlistProducts: [],
  categories: [],
  units: [],
  // userProducts: [],
  recommenderProducts: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        availableProducts: action.products,
        wishlistProducts: action.products.filter(prod => prod.liked === true),
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        // userProducts: action.products.filter(prod => prod.ownerId === 5),
      };
    case CREATE_PRODUCT:
      const newProduct = new ProductModel(
        action.productData.id,
        action.productData.category_id,
        action.productData.unit_id,
        action.productData.user_id,
        action.productData.unit_id,
        action.productData.name,
        action.productData.descriptions,
        action.productData.price,
        action.productData.quantity,
        action.productData.unit,
        action.productData.discount,
        action.productData.false,
        action.productData.image,
        action.productData.discount,
        action.productData.sold,
        action.productData.create_time,
        action.productData.update_time,
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        // userProducts: state.userProducts.concat(newProduct),
      };
  }
  return state;
};
