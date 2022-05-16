import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../../models/UserModel';


export const GET_ALL_STAFF = 'GET_ALL_CHANEL';
export const GET_STAFF = 'GET_STAFF';
export const GET_USER = 'GET_USER';
export const LOGOUT = 'LOGOUT';

export const getAllStaff = () => {
    return async dispatch => {
        try {
            //const response = await fetch(`http://localhost:5000/chanel/`);
            const response = await fetch(`http://localhost:5000/user/getAllUser`);
            if (response.error) {
                throw new Error(response.error);
            }
            const resData = await response.json();
            console.log("GET_ALL_STAFF  Success:" + resData.length)
            const loadedAllChanel = [];
            // userID, username, password, name, birthday, gender, email, phone, type, avatar, createTime, updateTime
            for (const key in resData) {
                if (resData[key].type === 'STAFF') {
                    loadedAllChanel.push(
                        new User(                            
                            resData[key].id, //userID
                            resData[key].username, //username
                            resData[key].password, //pass
                            resData[key].name,
                            resData[key].birthday, //birth
                            resData[key].gender,//gender
                            resData[key].email,//email
                            resData[key].phone,//phone
                            resData[key].type,//type
                            resData[key].avatar,
                            resData[key].create_time, //createtime
                            resData[key].create_time, //updateTime
                        ),
                    );
                }

            }
            dispatch({ type: GET_ALL_STAFF, chanel: loadedAllChanel });
        } catch (err) {
            console.log(err);
            throw err;
        }
    };
};

export const getStaffFromUserID = (userId) => {
    return async dispatch => {

        const response = await fetch(`http://localhost:5000/user/${userId}`);

        const resData = await response.json();
        const error = resData.error;

        if (error) {
            console.log(resData.msg)
        }
        dispatch({
            type: GET_STAFF,
            user: {
                //token: resData.token,
                id: userId,
                name: resData.name,
                gender: resData.gender,
                birthday: resData.birthday,
                email: resData.email,
                avatar: resData.avatar,
                role: resData.role,
                phone: resData.phone,
            },
        });
    };
};

export const getUser = () => {
    return { type: GET_USER };
};

export const logout = () => {
    return { type: LOGOUT };
};

