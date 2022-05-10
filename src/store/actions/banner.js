import BannerModel from "../../models/banner/BannerModel";

export const ADD_BANNER = 'ADD_BANNER';
export const SET_BANNER = 'SET_BANNER';
export const DELETE_BANNER = 'DELETE_BANNER';
export const fetchBanner = () => {
  return async dispatch => {
    // any async code you want!
    try {
      const response = await fetch('http://localhost:5000/banner/all');

      if (response.error) {
      console.log("sdfsdfdsfdsfdsf")

        throw new Error(response.msg);
      }

      const resData = await response.json();
      const loadedBanner = [];
      for (const key in resData) {
        loadedBanner.push(
          new BannerModel(
            resData[key].id,
            resData[key].title,
            resData[key].discount,
            resData[key].endTime,
            resData[key].image,
            resData[key].create_time,
            resData[key].update_time,
          ),
        );
      }

      dispatch({type: SET_BANNER, banners: loadedBanner});
    } catch (err) {
      // send to custom analytics server
      console.log(err);
      throw err;
    }
  };
};