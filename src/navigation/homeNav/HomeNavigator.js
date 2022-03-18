import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homeScreen/HomeMainScreen';
import {HOME_MAIN_SCREEN} from '../../constants/NavigatorIndex';
const StackNavigator = createNativeStackNavigator();
function HomeNavigator(props) {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name={HOME_MAIN_SCREEN}
        component={HomeScreen}/>
    </StackNavigator.Navigator>
  );
}

export default HomeNavigator;
