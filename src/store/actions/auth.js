import AsyncStorage from '@react-native-async-storage/async-storage';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_GENDER = 'CHANGE_GENDER';
export const CHANGE_BIRTHDAY = 'CHANGE_BIRTHDAY';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PHONE = 'CHANGE_PHONE';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

let timer;

export const authenticate = (userId, token, expiryTime) => {
  return async dispatch => {
    dispatch(setLogoutTimer(expiryTime));

    const response = await fetch(`http://localhost:5000/user/${userId}`);

    const resData = await response.json();
    const error = resData.error;

    if (error) {
      throw new Error(resData.msg);
    }

    dispatch({
      type: LOGIN,
      user: {
        token: token,
        id: userId,
        name: resData[0].name,
        sex: resData[0].gender,
        birthday: resData[0].birthday,
        email: resData[0].email,
        avatar: resData[0].avatar,
        role: resData[0].roles,
        phone: resData[0].phone,
      },
    });
  };
};

export const signup = (
  username,
  password,
  name,
  birthday,
  gender,
  email,
  phone,
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
        phone: phone,
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

    login(username, password);
  };
};

export const login = (username, password) => {
  return async dispatch => {
    console.log(username + ' Login into TaketeShop');
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

    saveDataToStorage(resData.token, resData.userID, resData.expiredDay);

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
        phone: resData.phone,

      },
    });
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return {type: LOGOUT};
};

export const changeName = (userID, token, value) => {
  return async dispatch => {
    await fetch(
      `http://localhost:5000/user/${userID}?field=name&value=${value}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
      },
    );

    dispatch({type: CHANGE_NAME, value: value});
  };
};
export const changeGender = (userID, token, value) => {
  return async dispatch => {
    await fetch(
      `http://localhost:5000/user/${userID}?field=gender&value=${value}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
        },
      },
    );

    dispatch({type: CHANGE_GENDER, value: value});
  };
};
export const changeBirthday = (userID, token, value) => {
  return async dispatch => {
    await fetch(
      `http://localhost:5000/user/${userID}?field=birthday&value=${value}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,

        },
      },
    );

    dispatch({type: CHANGE_BIRTHDAY, value: value});
  };
};
export const changeEmail = (userID, token, value) => {
  return async dispatch => {
    await fetch(
      `http://localhost:5000/user/${userID}?field=email&value=${value}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,

        },
      },
    );

    dispatch({type: CHANGE_EMAIL, value: value});
  };
};
export const changePhone = (userID, token, value) => {
  return async dispatch => {
    await fetch(
      `http://localhost:5000/user/${userID}?field=phone&value=${value}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,

        },
      },
    );

    dispatch({type: CHANGE_PHONE, value: value});
  };
};
export const changeAvatar = (userID, token, value) => {
  return async dispatch => {
    await fetch(
      `http://localhost:5000/user/${userID}?field=avatar&value=${value}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,

        },
      },
    );

    dispatch({type: CHANGE_AVATAR, value: value});
  };
};
// export const changePassword = (value) => {
//   return {type: CHANGE_PASSWORD, value: value}
// }

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
      userID: userId,
      expiryDate: expirationDate,
    }),
  );
};
