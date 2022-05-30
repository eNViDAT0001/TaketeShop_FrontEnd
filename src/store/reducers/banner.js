import { SET_BANNER, GET_BANNER } from "../actions/banner";

const initialState = {
  currentBanner: {},
  banners: [],
};

export default (state = initialState, action) => {
    switch (action.type){
        case SET_BANNER:{
          return {banners: action.banners}
        }
        case GET_BANNER:{
          return { 
             ...state,
            currentBanner: action.banners,
          }}
    }
    return state;
}