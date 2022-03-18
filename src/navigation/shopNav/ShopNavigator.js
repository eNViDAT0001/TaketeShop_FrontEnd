import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SHOP_MAIN_SCREEN} from '../../constants/NavigatorIndex';
import ShopMainScreen from '../../screens/shopScreen/ShopMainScreen';

const StackNavigator = createNativeStackNavigator();
function ShopNavigator(props) {
  return <StackNavigator.Navigator>
      <StackNavigator.Screen name={SHOP_MAIN_SCREEN} component={ShopMainScreen}/>
  </StackNavigator.Navigator>;
}

export default ShopNavigator;
