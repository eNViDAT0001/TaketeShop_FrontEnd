import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADMIN_ADD_PRODUCT_SCREEN, ADMIN_PRODUCT_DETAIL_SCREEN, ADMIN_SCREEN,BANNER_SCREEN,DISCOUNT_SCREEN } from '../constants/NavigatorIndex';
import AdminMainScreen from '../screens/accountScreen/adminScreen/AdminMainScreen';
import AdminProductDetailScreen from '../screens/accountScreen/adminScreen/AdminProductDetailScreen';
import AdminProductScreen from '../screens/accountScreen/adminScreen/AdminProductScreen';
import BannerScreen from '../screens/accountScreen/adminScreen/BannerScreen';
import DiscountScreen from '../screens/accountScreen/adminScreen/DiscountScreen';
import ListBanner from '../screens/accountScreen/adminScreen/ListBanner';
import ListDiscount from '../screens/accountScreen/adminScreen/ListDiscount';

const StackNavigator = createNativeStackNavigator();
function AdminNavigator() {
  return <StackNavigator.Navigator initialRouteName={ADMIN_SCREEN} screenOptions={{ headerShown: false }}>
    <StackNavigator.Screen name={ADMIN_SCREEN} component={AdminMainScreen} />
    <StackNavigator.Screen name={ADMIN_ADD_PRODUCT_SCREEN} component={AdminProductScreen} />
    <StackNavigator.Screen name={ADMIN_PRODUCT_DETAIL_SCREEN} component={AdminProductDetailScreen} />
    <StackNavigator.Screen name={BANNER_SCREEN} component={BannerScreen} />
    <StackNavigator.Screen name={DISCOUNT_SCREEN} component={DiscountScreen} />
    <StackNavigator.Screen name={"ListBanner"} component={ListBanner} />
    <StackNavigator.Screen name={"ListDiscount"} component={ListDiscount} />

  </StackNavigator.Navigator>;
}

export default AdminNavigator;
