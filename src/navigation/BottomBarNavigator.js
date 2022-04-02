import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ACCOUNT_NAVIGATOR,
  HOME_MAIN_SCREEN,
  SHOP_MAIN_SCREEN,
} from '../constants/NavigatorIndex';
import Colors from '../constants/Colors';
import ShopMainScreen from '../screens/shopScreen/ShopMainScreen';
import HomeMainScreen from '../screens/homeScreen/HomeMainScreen';
import AccountNavigator from './AccountNavigator';

const TabNavigator = createMaterialBottomTabNavigator();
function BottomBarNavigator() {
  return (
    <TabNavigator.Navigator
      activeColor={Colors.iconColor}
      initialRouteName={HOME_MAIN_SCREEN}
      barStyle={{backgroundColor: Colors.primaryColor}}>
      <TabNavigator.Screen
        name={HOME_MAIN_SCREEN}
        component={HomeMainScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <TabNavigator.Screen
        name={SHOP_MAIN_SCREEN}
        component={ShopMainScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="storefront" color={color} size={26} />
          ),
        }}
      />

      <TabNavigator.Screen
        name={ACCOUNT_NAVIGATOR}
        component={AccountNavigator}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
}

export default BottomBarNavigator;
