import {LOGIN} from '../actions/auth';

const initialState = {
  userID: '#0000',
  name: 'Khách',
  sex: 'Không xác định',
  birthday: '0001/01/01',
  email: 'abc@gmail.com',
  avatar: 'https://4xucy2kyby51ggkud2tadg3d-wpengine.netdna-ssl.com/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg',
  roles: 'CUSTOMER',
  token: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.user.token,
        userId: action.user.userId,
        name: action.user.name,
        sex: action.user.gender,
        birthday: action.user.birthday,
        email: action.user.email,
        avatar: action.user.avatar,
        roles: action.user.roles,
      };
    case LOGOUT:
      return initialState;
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
}

export default AuthReducer;
