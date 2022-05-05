import AsyncStorage from '@react-native-async-storage/async-storage';


export const CREATE_CHANEL = 'CREATE_CHANEL';
export const GET_CHANEL = 'GET_CHANEL';

export const GET_MESSAGER = 'GET_MESSAGER';
export const ADD_MESSAGER = 'ADD_MESSAGER';
export const CHANGE_NAME = 'CHANGE_NAME';
//export const CHANGE_NAME = 'CHANGE_NAME';

export const getChanel = (userID) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/chanel/`+userID);//+userID);
        const json = await response.json();
        const error = json.error;
        if (error) {
            console.log(error)
        }
        console.log(json[0].userId)
        dispatch({
            type: GET_CHANEL,
            chanel: {
                _id: json[0]._id,
                userId: json[0].userId,
            },
        });
    };
};

export const createChanel = (user_id) => {
    return async dispatch => {
        // any async code you want!
        const response = await fetch('http://localhost:5000/chanel/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user_id,
            }),
        });

        const resData = await response.json();
        const error = resData.error;
        if (error) {
            console.log("create Chanel error")
        }
        console.log("create Chanel ok")
        dispatch({
            type: CREATE_CHANEL,
            chanel: {
                chanelId: resData._id,
                userId: user_id,
               
            },
        });
    };
}


export const getMessager = (userID) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/message/`+userID);//+userID);
        const json = await response.json();
        const error = json.error;
        if (error) {
            console.log(error)
        }
        //console.log(json[0]._id)
        dispatch({
            type: GET_MESSAGER,
            chanel: {
                _id: json[0]._id,
                userId: json[0].userId,
                chanelId : json[0].chanelId,
                text : json[0].text,
                isStaff: json[0].isStaff,
            },
        });
    };
};


export const addMessager = (
    chanelId,
    userId,
    text,
    isStaff    
    ) => {
    return async dispatch => {
        // any async code you want!
        const response = await fetch('http://localhost:5000/message/'+userId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chanelId: chanelId,
                userId: userId,                
                text : text,
                isStaff : isStaff,
            }),
        });

        const resData = await response.json();

        dispatch({
            type: ADD_MESSAGER,
            chanel: {
                chanelId: chanelId,
                userId: userId,
                text : text,
                isStaff : isStaff,               
            },
        });
    };
}