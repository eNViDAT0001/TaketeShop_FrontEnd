import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HOME_MAIN_SCREEN, SHOP_MAIN_SCREEN, LOGIN_MAIN_SCREEN} from '../constants/NavigatorIndex';
import Colors from '../constants/Colors';
import ShopMainScreen from '../screens/shopScreen/ShopMainScreen';
import HomeMainScreen from '../screens/homeScreen/HomeMainScreen';
import LoginScreen from '../screens/Login_screen/LoginScreen' 


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
              <MaterialCommunityIcons
                name="storefront"
                color={color}
                size={26}
              />
            ),
          }}
        />            

      </TabNavigator.Navigator>
  );
}

export default BottomBarNavigator;
