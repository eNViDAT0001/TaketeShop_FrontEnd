import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN_MAIN_SCREEN ,FORGOT_PASSWORD_SCREEN} from '../constants/NavigatorIndex';
import LoginScreen from '../screens/Login_screen/LoginScreen';
import ForgotPassword from '../screens/Login_screen/ForgotPassword';
import ResetPass from '../screens/Login_screen/ResetPass';
import SignUpScreen from '../screens/Login_screen/SignUp';


const Stack = createNativeStackNavigator();

function LoginNavigator(props) {
    const [text, onChangeText] = React.useState(null);

    return (
        <Stack.Navigator initialRouteName={LOGIN_MAIN_SCREEN}>
            <Stack.Screen
              name ={LOGIN_MAIN_SCREEN} 
              options={{ headerShown: false }}
              component={LoginScreen}>
            </Stack.Screen>

            <Stack.Screen
              name ={FORGOT_PASSWORD_SCREEN} 
              component={ForgotPassword}>
            </Stack.Screen>

            <Stack.Screen
              name ={"ResetPass"} 
              component={ResetPass}>
            </Stack.Screen>
            
            <Stack.Screen
              name ={"SignUpScreen"} 
              component={SignUpScreen}>
            </Stack.Screen>

            
           
        </Stack.Navigator>

    );

}



export default LoginNavigator;  