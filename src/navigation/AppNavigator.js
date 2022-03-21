import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {BOTTOMBAR_NAVIGATOR} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
const StackNavigator = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={BOTTOMBAR_NAVIGATOR}>
        <StackNavigator.Screen
          name={'BOTTOMBAR_NAVIGATOR'}
          component={BottomBarNavigator}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
