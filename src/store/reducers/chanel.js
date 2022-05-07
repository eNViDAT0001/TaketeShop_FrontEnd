import {
    CREATE_CHANEL,
    GET_CHANEL,
    GET_MESSAGER,
    ADD_MESSAGER
} from '../actions/chanelActions';
import messagerModel from '../../models/MessagerModel';

const initialState = {
    userID: '0000',
    _id: '2733b142e26a5e0838ffab0',
    DATA_MESSAGES: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CHANEL:
            console.log("GET_CHANEL")
            return {
                ...state,
                _id: action.chanel._id,
                userID: action.chanel.userID,
                // DATA_MESSAGES: [],
            };
        // case GET_ALL_CHANEL:
        //     return {
        //         ...state,
        //         userID: action.chanel.userID,
        //         _id: action.chanel.chanelId,
        //     };

        case GET_MESSAGER:
            console.log("GET_MESSAGER")
            return {
                ...state,
                //DATA_MESSAGES: state.DATA_MESSAGES.concat(newmessager),
                DATA_MESSAGES: action.message,
                // userProducts: state.userProducts.concat(newProduct),
            };
        case ADD_MESSAGER:
            console.log("ADD_MESSAGER")
            const newmessager = new messagerModel(
                resData[key]._id,
                action.message.chanelId,
                action.message.userID,
                action.message.text,
                action.message.isStaff,
                action.message.createAt,
            );
            return {
                ...state,
                DATA_MESSAGES: state.DATA_MESSAGES.concat(newmessager),
                // userProducts: state.userProducts.concat(newProduct),
            };

    }
    return state;
};
