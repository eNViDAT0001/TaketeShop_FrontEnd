import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  ADD_COMMENT_SCREEN,
  BOTTOM_BAR_NAVIGATOR,
  CATEGORY_DETAIL_SCREEN,
  COMMENT_SCREEN,
  LOGIN_NAVIGATOR,
  PRODUCT_DETAIL_SCREEN,
  PROFILE_NAVIGATOR,
} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
import CategoryDetailScreen from '../screens/productScreen/CategoryDetailScreen';
import ProductDetailScreen from '../screens/productScreen/ProductDetailScreen';
import CommentScreen from '../screens/productScreen/CommentScreen';
import AddCommentScreen from '../screens/productScreen/AddCommentScreen';
import Colors from '../constants/Colors';
import LoginNavigator from './LoginNavigator';
import ProfileNavigation from './ProfileNavigation';
const StackNavigator = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={LOGIN_NAVIGATOR}
        options={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
        }}>
        <StackNavigator.Screen
          name={LOGIN_NAVIGATOR}
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>
          
          <StackNavigator.Screen
          name={PROFILE_NAVIGATOR}
          component={ProfileNavigation}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>

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

        <StackNavigator.Screen
          name={COMMENT_SCREEN}
          component={CommentScreen}
          options={{
            headerTitle: 'Đánh giá',
          }}></StackNavigator.Screen>
          
        <StackNavigator.Screen
          name={ADD_COMMENT_SCREEN}
          component={AddCommentScreen}
          options={{
            headerTitle: 'Viết đánh giá',
          }}></StackNavigator.Screen>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
