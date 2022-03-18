import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HOME_NAVIGATOR, SHOP_NAVIGATOR} from '../constants/NavigatorIndex';
import HomeNavigator from './homeNav/HomeNavigator';
import {ICON_SIZE} from '../constants/fontsize';
import Colors from '../constants/Colors';
import ShopNavigator from './shopNav/ShopNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createMaterialBottomTabNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator
        activeColor={Colors.iconColor}
        initialRouteName={HOME_NAVIGATOR}
        barStyle={{backgroundColor: Colors.primaryColor}}>
        <TabNavigator.Screen
          name={HOME_NAVIGATOR}
          component={HomeNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <TabNavigator.Screen
          name={SHOP_NAVIGATOR}
          component={ShopNavigator}
          options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="storefront" color={color} size={26} />
            ),
          }}
        />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
