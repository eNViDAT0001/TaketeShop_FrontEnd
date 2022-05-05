import {
    CREATE_CHANEL,
    GET_CHANEL   
} from '../actions/chanelActions';

const initialState = {
    userID: '0000',
    _id: '2733b142e26a5e0838ffab0',

};


export default  (state = initialState, action) => {
    switch (action.type) {
        case GET_CHANEL:           
            return {                
                userID: action.chanel.userID,
                chanelId: action.chanel.chanelId,
            };
        //case  CREATE_CHANEL:
            // const newChanel = new CModel(
            //     resData[key].id,
            //     action.productData.category_id,
            //     action.productData.user_id,
            //     action.productData.name,
            //     action.productData.descriptions,
            //     action.productData.price,
            //     action.productData.quantity,
            //     action.productData.unit_id,
            //     action.productData.discount,
            //     action.productData.create_time,
            //     action.productData.update_time,
            //   );
            //   return {
            //     ...state,
            //     availableProducts: state.availableProducts.concat(newProduct),
            //     // userProducts: state.userProducts.concat(newProduct),
            //   };



        default:
            return state;
    }
    return state;
};
