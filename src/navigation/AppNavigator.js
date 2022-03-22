import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {BOTTOMBAR_NAVIGATOR, CATEGORY_DETAIL_SCREEN} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
import CategoryDetailScreen from '../screens/productScreen/CategoryDetailScreen';
const StackNavigator = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={BOTTOMBAR_NAVIGATOR}>

        <StackNavigator.Screen
          name={BOTTOMBAR_NAVIGATOR}
          component={BottomBarNavigator}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={CATEGORY_DETAIL_SCREEN}
          component={CategoryDetailScreen}
          options={{
            headerTitle: "Úm ba la Detail nè",
          }}></StackNavigator.Screen>

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
