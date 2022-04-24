import {CREATE_PRODUCT, SET_PRODUCTS} from '../actions/products';

const initialState = {
  availableProducts: [],
  userProducts: [],
  recommenderProducts: [],
  filteredProducts: [],
  favoriteProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        availableProducts: action.products,
        userProducts: action.products.filter(prod => prod.ownerId === 5),
      };
    case CREATE_PRODUCT:
      const newProduct = new Product(
        resData[key].id,
        action.productData.category_id,
        action.productData.user_id,
        action.productData.name,
        action.productData.descriptions,
        action.productData.price,
        action.productData.quantity,
        action.productData.unit_id,
        action.productData.discount,
        action.productData.create_time,
        action.productData.update_time,
      );
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
  }
};

export default productReducer;
