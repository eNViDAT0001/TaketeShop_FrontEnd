import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  BOTTOM_BAR_NAVIGATOR,
  CATEGORY_DETAIL_SCREEN,
  PRODUCT_DETAIL_SCREEN,
} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
import CategoryDetailScreen from '../screens/productScreen/CategoryDetailScreen';
import ProductDetailScreen from '../screens/productScreen/ProductDetailScreen';
const StackNavigator = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName={BOTTOM_BAR_NAVIGATOR}>
        <StackNavigator.Screen
          name={BOTTOM_BAR_NAVIGATOR}
          component={BottomBarNavigator}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={CATEGORY_DETAIL_SCREEN}
          component={CategoryDetailScreen}
          options={{
            headerTitle: 'Úm ba la Detail nè',
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={PRODUCT_DETAIL_SCREEN}
          component={ProductDetailScreen}
          options={{
            headerTitle: 'Úm ba la Product Detail nè',
          }}></StackNavigator.Screen>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
