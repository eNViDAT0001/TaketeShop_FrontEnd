import AsyncStorage from '@react-native-async-storage/async-storage';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const CHANGE_NAME = 'CHANGE_NAME';

let timer;

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
    dispatch(setLogoutTimer(expiryTime));
    dispatch({type: AUTHENTICATE, userId: userId, token: token});
  };
};

export const signup = (
  username,
  password,
  name,
  birthday,
  gender,
  email,
  type,
) => {
  return async dispatch => {
    const response = await fetch('http://localhost:5000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
        birthday: birthday,
        gender: gender,
        email: email,
        type: type,
      }),
    });

    const resData = await response.json();
    const error = resData.error;
    let message = 'Something went wrong!';

    if (error) {
      message = resData.msg;
      throw new Error(message);
    }

    console.log(resData);
    dispatch(
      authenticate(
        resData.localId,
        resData.idToken,
        parseInt(resData.expiresIn) * 1000,
      ),
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000,
    );
    saveDataToStorage(resData.idToken, resData.localId, expirationDate);
  };
};

export const login = (username, password) => {
  return async dispatch => {
    const response = await fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const resData = await response.json();
    const error = resData.error;

    if (error) {
      throw new Error(resData.msg);
    }

    console.log(resData);

    dispatch({
      type: LOGIN,
      user: {
        token: resData.token,
        id: resData.userID,
        name: resData.name,
        sex: resData.gender,
        birthday: resData.birthday,
        email: resData.email,
        avatar: resData.avatar,
        role: resData.roles,
      },
    });
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return {type: LOGOUT};
};

export const changeName = (name) => {
  return {type: CHANGE_NAME, name}
}



const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString(),
    }),
  );
};

