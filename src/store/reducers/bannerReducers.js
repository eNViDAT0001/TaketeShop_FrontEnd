import { SET_BANNER } from "../actions/banner";

const initialState = {
  banners: [],
};

export default (state = initialState, action) => {
    switch (action.type){
        case SET_BANNER:{
          return {banners: action.banners}
        }
    }
    return state;
}