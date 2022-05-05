import AsyncStorage from '@react-native-async-storage/async-storage';

export const CREATE_CHANEL = 'CREATE_CHANEL';
export const GET_CHANEL = 'GET_CHANEL';

export const GET_MESSAGER = 'GET_MESSAGER';
export const ADD_MESSAGER = 'ADD_MESSAGER';
export const CHANGE_NAME = 'CHANGE_NAME';
//export const CHANGE_NAME = 'CHANGE_NAME';

export const getChanel = (userID) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/chanel/` + userID);//+userID);
        const json = await response.json();
        const error = json.error;
        if (error) {
            console.log(error)
        }
        // console.log(json[0]._id+ "chanelID")
        dispatch({
            type: GET_CHANEL,
            chanel: {
                chanelId: json[0]._id,
                userID: json[0].userID,
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
                userID: user_id,
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
                chanelId: resData[0]._id,
                userID: user_id,
            },
        });
    };
}

//export var DATA_MESSAGES = ([]);
//export const [messageFromChanelId, setMessageFromChanelId] = React.useState([]);

export const getMessagerFromChanelId = (chanelId) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:5000/message/chanel/` + chanelId);//+userID);
        const json = await response.json();
        const error = json.error;
        if (error) {
            console.log(error)
        }
        //DATA_MESSAGES.push(json);
        //console.log(DATA_MESSAGES);
        // setMessageFromChanelId(json);
        //console.log(json._id)
        // dispatch({
        //     type: GET_MESSAGER,
        //     messager: {
        //         _id: json._id,
        //         userID: json.userID,
        //         chanelId : json.chanelId,
        //         text : json.text,
        //         isStaff: json.isStaff,
        //         createAt: json.createAt,
        //     },
        // });
    };
};

export const addMessager = (chanelId, userID, text, isStaff) => {
    return async dispatch => {
        const timer = await Date.now;
        const response = await fetch(
            'http://localhost:5000/message/add/' + chanelId,
            {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chanelId: chanelId,
                    userID: userID,
                    text: text,
                    isStaff: isStaff,
                    createAt: timer,
                }),
            },
        );

        const resData = await response.json();
        const error = resData.error;
        if (error) {
            console.log(error)
        }
    };
};
