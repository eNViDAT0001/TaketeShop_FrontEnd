import CategoryModel from "../../models/category/CategoryModel";
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SET_CATEGORY = 'SET_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

export const fetchCategory = () => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch('http://localhost:5000/category/all');

      if (response.error) {

        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedCategory = [];
      for (const key in resData) {

        loadedCategory.push(
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

      dispatch({type: SET_CATEGORY, categorys: loadedCategory});
    } catch (err) {
      // send to custom analytics server
      console.log(err);
      throw err;
    }
  };
};