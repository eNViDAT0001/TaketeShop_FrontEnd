import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {BOTTOMBAR_NAVIGATOR,START_MAIN_SCREEN,LOGIN_MAIN_SCREEN} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
import LoginScreen from '../screens/Login_screen/LoginScreen';

const StackNavigator = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={LOGIN_MAIN_SCREEN}>

      <StackNavigator.Screen
          name={LOGIN_MAIN_SCREEN}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

          
        <StackNavigator.Screen
          name={BOTTOMBAR_NAVIGATOR}
          component={BottomBarNavigator}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
