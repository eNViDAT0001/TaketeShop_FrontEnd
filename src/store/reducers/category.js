import { SET_CATEGORY } from "../actions/category";

const initialState = {
  categorys: [],
};

export default (state = initialState, action) => {
    switch (action.type){
        case SET_CATEGORY:{
          return {categorys: action.categorys}
        }
    }
    return state;
}