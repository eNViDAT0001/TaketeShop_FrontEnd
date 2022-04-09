import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACCOUNT_MAIN_SCREEN, PROFILE_NAVIGATOR } from '../constants/NavigatorIndex';
//import Profile from '../screens/ProfileScreen/ProfileScreen';
import AccountMainScreen from '../screens/accountScreen/AccountMainScreen';
import ProfileNavigation from './ProfileNavigation'

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  const [text, onChangeText] = React.useState(null);

  return (
    <Stack.Navigator initialRouteName={AccountMainScreen}>
      <Stack.Screen
        name={"AccountMainScreen"}
        options={{ headerShown: false }}
        component={AccountMainScreen}>
      </Stack.Screen>

      {/* <Stack.Screen
        name={PROFILE_NAVIGATOR}
        options={{ headerShown: false }}
        component={ProfileNavigation}>
      </Stack.Screen> */}


    </Stack.Navigator>

  );

}



export default AccountNavigator;  