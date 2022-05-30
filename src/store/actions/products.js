import ImageModel from '../../models/image/imageModel';
import CategoryModel from '../../models/product/CategoryModels';
import ProductModel from '../../models/product/ProductModel';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_CURRENT_PRODUCTS = 'SET_CURRENT_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const PAGING_PRODUCTS = 'PAGING_PRODUCTS';
export const PAGING_WISHLIST_PRODUCTS = 'PAGING_WISHLIST_PRODUCTS';
export const PAGING_DISCOUNT_PRODUCTS = 'PAGING_DISCOUNT_PRODUCTS';
export const PAGING_BEST_SELLER_PRODUCTS = 'PAGING_BEST_SELLER_PRODUCTS';
export const PAGING_RECOMMENDER_PRODUCTS = 'PAGING_RECOMMENDER_PRODUCTS';
export const SET_DISCOUNT_PRODUCTS = 'SET_DISCOUNT_PRODUCTS';
export const SET_WISHLIST_PRODUCTS = 'SET_WISHLIST_PRODUCTS';
export const SET_BEST_SELLER_PRODUCTS = 'SET_BEST_SELLER_PRODUCTS';
export const SET_RECOMMENDER_PRODUCTS = 'SET_BEST_SELLER_PRODUCTS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_WITH_CATEGORY_ID = 'SET_PRODUCT_WITH_CATEGORY_ID';

export const fetchProducts = ({field, value, filter, sort, page}) => {
  return async dispatch => {
    try {
      const fieldConvert = field ? `field=${field}&` : '';
      const valueConvert = value ? `value=${value}&` : '';
      const filterConvert = filter ? `filter=${filter}&` : '';
      const sortConvert = sort ? `sort=${sort}&` : '';
      const pageConvert = page ? `page=${page}&` : '';

      const response = await fetch(
        'http://localhost:5000/product/all?' +
          fieldConvert +
          valueConvert +
          filterConvert +
          sortConvert +
          pageConvert,
      );

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

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

        loadedProducts.push(
          new ProductModel({
            productID: resData[key].id,
            categoryID: resData[key].category_id,
            unitID: resData[key].unit_id,
            userID: resData[key].user_id,
            name: resData[key].name,
            category: resData[key].category_name,
            description: resData[key].descriptions,
            price: resData[key].price,
            quantity: resData[key].quantity,
            unit: resData[key].unit,
            discount: resData[key].discount,
            liked: resData[key].liked,
            sold: resData[key].sold,
            image: images,
            createTime: resData[key].create_time,
            updateTime: resData[key].update_time,
          }),
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
export const fetchWishListProducts = ({filter, sort, page}) => {
  const filterConvert = filter ? `filter=${filter}&` : '';
  const sortConvert = sort ? `filter=discount&sort=${sort}&` : '';
  const pageConvert = page ? `page=${page}&` : '';
  return async dispatch => {
    try {
      const response = await fetch(
        'http://localhost:5000/product/all?field=liked&value=1&' +
          filterConvert +
          sortConvert +
          pageConvert,
      );

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

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

        loadedProducts.push(
          new ProductModel({
            productID: resData[key].id,
            categoryID: resData[key].category_id,
            unitID: resData[key].unit_id,
            userID: resData[key].user_id,
            name: resData[key].name,
            category: resData[key].category_name,
            description: resData[key].descriptions,
            price: resData[key].price,
            quantity: resData[key].quantity,
            unit: resData[key].unit,
            discount: resData[key].discount,
            liked: resData[key].liked,
            sold: resData[key].sold,
            image: images,
            createTime: resData[key].create_time,
            updateTime: resData[key].update_time,
          }),
        );
      }
      dispatch({type: SET_WISHLIST_PRODUCTS, products: loadedProducts});
    } catch (err) {
      // send to custom analytics server
      console.log(err);
      throw err;
    }
  };
};
export const fetchDiscountProducts = ({page}) => {
  const pageConvert = page ? `page=${page}&` : '';
  return async dispatch => {
    try {
      const response = await fetch(
        'http://localhost:5000/product/all?filter=discount&sort=DESC&' +
          pageConvert,
      );

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

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
        loadedProducts.push(
          new ProductModel({
            productID: resData[key].id,
            categoryID: resData[key].category_id,
            unitID: resData[key].unit_id,
            userID: resData[key].user_id,
            name: resData[key].name,
            category: resData[key].category_name,
            description: resData[key].descriptions,
            price: resData[key].price,
            quantity: resData[key].quantity,
            unit: resData[key].unit,
            discount: resData[key].discount,
            liked: resData[key].liked,
            sold: resData[key].sold,
            image: images,
            createTime: resData[key].create_time,
            updateTime: resData[key].update_time,
          }),
        );
      }
      dispatch({type: SET_DISCOUNT_PRODUCTS, products: loadedProducts});
    } catch (err) {
      // send to custom analytics server
      console.log(err);
      throw err;
    }
  };
};
export const fetchBestSellerProducts = ({page}) => {
  const pageConvert = page ? `page=${page}&` : '';

  return async dispatch => {
    try {
      const response = await fetch(
        'http://localhost:5000/product/all?filter=sold&sort=DESC&' +
          pageConvert,
      );

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

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

        loadedProducts.push(
          new ProductModel({
            productID: resData[key].id,
            categoryID: resData[key].category_id,
            unitID: resData[key].unit_id,
            userID: resData[key].user_id,
            name: resData[key].name,
            category: resData[key].category_name,
            description: resData[key].descriptions,
            price: resData[key].price,
            quantity: resData[key].quantity,
            unit: resData[key].unit,
            discount: resData[key].discount,
            liked: resData[key].liked,
            sold: resData[key].sold,
            image: images,
            createTime: resData[key].create_time,
            updateTime: resData[key].update_time,
          }),
        );
      }
      dispatch({type: SET_BEST_SELLER_PRODUCTS, products: loadedProducts});
    } catch (err) {
      // send to custom analytics server
      console.log(err);
      throw err;
    }
  };
};
export const fetchRecommenderProducts = ({
  field,
  value,
  filter,
  sort,
  page,
}) => {
  return async dispatch => {
    try {
      const fieldConvert = field ? `field=${field}&` : '';
      const valueConvert = value ? `value=${value}&` : '';
      const filterConvert = filter ? `filter=${filter}&` : '';
      const sortConvert = sort ? `sort=${sort}&` : '';
      const pageConvert = page ? `page=${page}&` : '';

      const response = await fetch(
        'http://localhost:5000/product/recommender?' +
          fieldConvert +
          valueConvert +
          filterConvert +
          sortConvert +
          pageConvert,
      );

      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

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

        loadedProducts.push(
          new ProductModel({
            productID: resData[key].id,
            categoryID: resData[key].category_id,
            unitID: resData[key].unit_id,
            userID: resData[key].user_id,
            name: resData[key].name,
            category: resData[key].category_name,
            description: resData[key].descriptions,
            price: resData[key].price,
            quantity: resData[key].quantity,
            unit: resData[key].unit,
            discount: resData[key].discount,
            liked: resData[key].liked,
            sold: resData[key].sold,
            image: images,
            createTime: resData[key].create_time,
            updateTime: resData[key].update_time,
          }),
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
      console.log(err);
      throw err;
    }
  };
};
export const fetchProductsWithCategoryID = ({value, filter, sort, page}) => {
  return async dispatch => {
    try {
      const valueConvert = value ? `value=${value}&` : '';
      const filterConvert = filter ? `filter=${filter}&` : '';
      const sortConvert = sort ? `sort=${sort}&` : '';
      const pageConvert = page ? `page=${page}&` : '';

      const response = await fetch(
        'http://localhost:5000/product/productlist?' +
          valueConvert +
          filterConvert +
          sortConvert +
          pageConvert,
      );
      if (response.error) {
        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedProducts = [];

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
        loadedProducts.push(
          new ProductModel({
            productID: resData[key].id,
            categoryID: resData[key].category_id,
            unitID: resData[key].unit_id,
            userID: resData[key].user_id,
            name: resData[key].name,
            category: resData[key].category_name,
            description: resData[key].descriptions,
            price: resData[key].price,
            quantity: resData[key].quantity,
            unit: resData[key].unit,
            discount: resData[key].discount,
            liked: resData[key].liked,
            sold: resData[key].sold,
            image: images,
            createTime: resData[key].create_time,
            updateTime: resData[key].update_time,
          }),
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
export const fetchProductDetail = id => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:5000/product/${id}`);
      if (response.error) {
        throw new Error(response.msg);
      }
      const resData = await response.json();
      const product = new ProductModel({
        productID: resData[key].id,
        categoryID: resData[key].category_id,
        unitID: resData[key].unit_id,
        userID: resData[key].user_id,
        name: resData[key].name,
        category: resData[key].category_name,
        description: resData[key].descriptions,
        price: resData[key].price,
        quantity: resData[key].quantity,
        unit: resData[key].unit,
        discount: resData[key].discount,
        liked: resData[key].liked,
        sold: resData[key].sold,
        image: images,
        createTime: resData[key].create_time,
        updateTime: resData[key].update_time,
      });
      dispatch({type: SET_CURRENT_PRODUCTS, product: product});
    } catch (error) {
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
