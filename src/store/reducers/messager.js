import {   
    GET_MESSAGER,
    ADD_MESSAGER
} from '../actions/chanelActions';


const initialState = {
    userID: '0000',
    _id: '62733fd62e26a5e0838ffad2',
    chanelId: '2733b142e26a5e0838ffab0',
    text: '123123',

};

export default  (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGER:
            return {
                userID: action.messager.userID,
                _id: action.messager._id,
                chanelId: action.messager.chanelId,                
            };
        //case  CREATE_CHANEL:
        default:
            return state;
    }
    return state;
};
