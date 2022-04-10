import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ACCOUNT_MAIN_SCREEN,
  PROFILE_NAVIGATOR,
} from '../constants/NavigatorIndex';
import AccountMainScreen from '../screens/accountScreen/AccountMainScreen';
import ProfileNavigation from './ProfileNavigation';

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator initialRouteName={AccountMainScreen}>
      <Stack.Screen
        name={ACCOUNT_MAIN_SCREEN}
        options={{headerShown: false}}
        component={AccountMainScreen}></Stack.Screen>

      {/* <Stack.Screen
        name={PROFILE_NAVIGATOR}
<<<<<<< HEAD
        options={{headerShown: false}}
        component={ProfileNavigation}></Stack.Screen>
=======
        options={{ headerShown: false }}
        component={ProfileNavigation}>
      </Stack.Screen> */}


>>>>>>> Account
    </Stack.Navigator>
  );
}

export default AccountNavigator;
