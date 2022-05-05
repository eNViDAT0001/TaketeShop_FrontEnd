import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ACCOUNT_NAVIGATOR,
  CART_MAIN_SCREEN,
  HOME_MAIN_SCREEN,
  ORDER_MAIN_SCREEN,
  ORDER_NAVIGATOR,
  SHOP_MAIN_SCREEN,
} from '../constants/NavigatorIndex';
import Colors from '../constants/Colors';
import ShopMainScreen from '../screens/shopScreen/ShopMainScreen';
import HomeMainScreen from '../screens/homeScreen/HomeMainScreen';
import AccountNavigator from './AccountNavigator';
import CartMainScreen from '../screens/cartScreen/CartMainScreen';
import OrderNavigator from './OrderNavigator';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth'
import * as chanelActions from '../store/actions/chanelActions';

const TabNavigator = createMaterialBottomTabNavigator();
function BottomBarNavigator() {
  const dispatch = useDispatch();
  const role = useSelector(state => state.auth.role);
  const userId = 4;//useSelector(state => state.auth.userId);
  if (role != 'CUSTOMER') {
    // Chu y
    dispatch(chanelActions.getChanel(userId));
}   
  return (
    <TabNavigator.Navigator
      activeColor={Colors.iconColor}
      //initialRouteName={HOME_MAIN_SCREEN}
      initialRouteName={ACCOUNT_NAVIGATOR}
      barStyle={{backgroundColor: Colors.primaryColor}}>
      <TabNavigator.Screen
        name={HOME_MAIN_SCREEN}
        component={HomeMainScreen}
        options={{
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <TabNavigator.Screen
        name={SHOP_MAIN_SCREEN}
        component={ShopMainScreen}
        options={{
          
          tabBarLabel: 'Cửa Hàng',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="storefront" color={color} size={26} />
          ),
        }}
      />
      <TabNavigator.Screen
        name={CART_MAIN_SCREEN}
        component={CartMainScreen}
        options={{
          tabBarLabel: 'Giỏ Hàng',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      /><TabNavigator.Screen
        name={ORDER_NAVIGATOR}
        component={OrderNavigator}
        options={{
          tabBarLabel: 'Đơn Hàng',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="archive-clock" color={color} size={26} />
          ),
        }}
      />

      <TabNavigator.Screen
        name={ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Tài Khoản',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default BottomBarNavigator;
