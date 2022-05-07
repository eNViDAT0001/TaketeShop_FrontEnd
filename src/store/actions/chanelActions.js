import AsyncStorage from '@react-native-async-storage/async-storage';
import messagerModel from '../../models/MessagerModel';
import ChanelModel from '../../models/ChanelModel';

export const CREATE_CHANEL = 'CREATE_CHANEL';
export const GET_CHANEL = 'GET_CHANEL';

export const GET_MESSAGER = 'GET_MESSAGER';
export const ADD_MESSAGER = 'ADD_MESSAGER';
export const CHANGE_NAME = 'CHANGE_NAME';
//export const CHANGE_NAME = 'CHANGE_NAME';


export const getAllChanel = () => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/chanel/`);//+userID);
        const resData = await response.json();
        const error = resData.error;
        if (error) {
            console.log(error)
        }
        console.log("get all chanel:" + resData._id,)
        const allChanel = [];

        for (const key in resData) {
            allChanel.push(
                new ChanelModel(
                    resData[key]._id,
                    resData[key].userId,
                ),
            );
        }
        dispatch({ type: GET_ALL_CHANEL, chanel: allChanel });
    };
};
export const getChanel = (userID) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/chanel/` + userID);//+userID);
        const resData = await response.json();
        const error = resData.error;
        if (error) {
            console.log(error)
        }
        console.log("get chanel:" + resData[0]._id);
        // const chanel = new ChanelModel(
        //     resData[0]._id,
        //     resData[0].userId,
        const id = resData[0]._id;
        const uid = resData[0].userId;
        // )
        dispatch({
            type: GET_CHANEL,
            chanel: new ChanelModel(
                id, uid
            ),
        });
    };
};

export const createChanel = (userID) => {
    return async dispatch => {
        // any async code you want!
        const response = await fetch('http://localhost:5000/chanel/' + userID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userID,
            }),
        });

        const resData = await response.json();
        const error = resData.error;
        if (error) {
            console.log("create Chanel error")
        }
        console.log("create Chanel ok")
        const id = resData[0]._id
        dispatch({
            type: CREATE_CHANEL,
            chanel: {
                chanelId: id,
                userID: userID,
            },
        });
    };
}

//export var DATA_MESSAGES = ([]);

export const getMessagerFromChanelId = (chanelId) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/message/chanel/` + chanelId);//+userID);
        const resData = await response.json();
        const error = resData.error;
        //console.log(resData);
        if (error) {
            console.log(error)
        }
        const loadedMessager = [];

        for (const key in resData) {
            loadedMessager.push(
                new messagerModel(
                    resData[key]._id,
                    resData[key].chanelId,
                    resData[key].userId,
                    resData[key].text,
                    resData[key].isStaff,
                    resData[key].createAt
                ),
            );
        }
        dispatch({ type: GET_MESSAGER, message: loadedMessager });

    };
};

export const addMessager = (chanelId, userID, text, isStaff) => {
    return async dispatch => {
        console.log(userID);
        console.log(text);
        const response = await fetch('http://localhost:5000/message/add/' + chanelId,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chanelId,
                    userID,
                    text,
                    isStaff,
                    // createAt: timer,
                }),
            },
        );

        const resData = await response.json();
        console.log("Them messager thanh cong :" + resData[0].createAt);
        const error = resData.error;
        // DATA_MESSAGES.push(json);
        if (error) {
            console.log(error)
        }
        
        dispatch({
            type: ADD_MESSAGER,
            message: {
                _id: resData[0]._id,
                chanelId,
                userID,
                text,
                isStaff,
                createAt: resData[0].createAt,
            },
        });
    };
};
