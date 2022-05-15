import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADMIN_ADD_PRODUCT_SCREEN, ADMIN_PRODUCT_DETAIL_SCREEN, ADMIN_SCREEN } from '../constants/NavigatorIndex';
import AdminMainScreen from '../screens/accountScreen/adminScreen/AdminMainScreen';
import AdminProductDetailScreen from '../screens/accountScreen/adminScreen/AdminProductDetailScreen';
import AdminProductScreen from '../screens/accountScreen/adminScreen/AdminProductScreen';

const StackNavigator = createNativeStackNavigator();
function AdminNavigator() {
  return <StackNavigator.Navigator initialRouteName={ADMIN_SCREEN} screenOptions={{ headerShown: false }}>
    <StackNavigator.Screen name={ADMIN_SCREEN} component={AdminMainScreen} />
    <StackNavigator.Screen name={ADMIN_ADD_PRODUCT_SCREEN} component={AdminProductScreen} />
    <StackNavigator.Screen name={ADMIN_PRODUCT_DETAIL_SCREEN} component={AdminProductDetailScreen} />
 

  </StackNavigator.Navigator>;
}

export default AdminNavigator;
