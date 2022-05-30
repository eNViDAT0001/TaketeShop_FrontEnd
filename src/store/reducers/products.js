import { PRODUCT_ITEMS_DUMMY_DATA } from '../../dummy_database/dummy-data';
import ProductModel from '../../models/product/ProductModel';
import {
  CREATE_PRODUCT,
  PAGING_BEST_SELLER_PRODUCTS,
  PAGING_DISCOUNT_PRODUCTS,
  PAGING_PRODUCTS,
  PAGING_RECOMMENDER_PRODUCTS,
  PAGING_WISHLIST_PRODUCTS,
  SET_BEST_SELLER_PRODUCTS,
  SET_CATEGORIES,
  SET_CURRENT_PRODUCTS,
  SET_DISCOUNT_PRODUCTS,
  SET_PRODUCTS,
  SET_PRODUCT_WITH_CATEGORY_ID,
  SET_RECOMMENDER_PRODUCTS,
  SET_WISHLIST_PRODUCTS,
} from '../actions/products';

const initialState = {
  currentProduct: {},
  availableProducts: [],
  discountProducts: [],
  wishlistProducts: [],
  bestSellerProducts: [],
  categories: [],
  units: [],
  recommenderProducts: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        availableProducts: action.products,
      };
    case SET_WISHLIST_PRODUCTS:
      return {
        ...state,
        wishlistProducts: action.products,
      };
    case SET_DISCOUNT_PRODUCTS:
      return {
        ...state,
        discountProducts: action.products,
      };
    case SET_BEST_SELLER_PRODUCTS:
      return {
        ...state,
        bestSellerProducts: action.products,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_RECOMMENDER_PRODUCTS:
      return {
        ...state,
        recommenderProducts: action.products,
      };
    case PAGING_PRODUCTS:
      return {
        ...state,
        availableProducts: state.availableProducts.concat(action.products),
      };
    case PAGING_WISHLIST_PRODUCTS:
      return {
        ...state,
        wishlistProducts: state.wishlistProducts.concat(action.products),
      };
    case PAGING_DISCOUNT_PRODUCTS:
      return {
        ...state,
        discountProducts: state.discountProducts.concat(action.products),
      };
    case PAGING_BEST_SELLER_PRODUCTS:
      return {
        ...state,
        bestSellerProducts: state.bestSellerProducts.concat(action.products),
      };
    case PAGING_RECOMMENDER_PRODUCTS:
      return {
        ...state,
        recommenderProducts: state.recommenderProducts.concat(action.products),
      };
    case SET_CURRENT_PRODUCTS:
      return {
        ...state,
        currentProduct: action.product,
      };
    case CREATE_PRODUCT:
      const newProduct = new ProductModel({
        productID: action.productData.id,
        categoryID: action.productData.category_id,
        unitID: action.productData.unit_id,
        userID: action.productData.user_id,
        name: action.productData.name,
        category: action.productData.category,
        description: action.productData.descriptions,
        price: action.productData.price,
        quantity: action.productData.quantity,
        unit: action.productData.unit,
        discount: action.productData.discount,
        liked: 0,
        sold: 0,
        image: action.productData.image,
      });
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        // userProducts: state.userProducts.concat(newProduct),
      };
  }
  return state;
};
