import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  ADDRESS_SCREEN,
  ADD_ADDRESS_SCREEN,
  ADD_COMMENT_SCREEN,
  BOTTOM_BAR_NAVIGATOR,
  CATEGORY_DETAIL_SCREEN,
  COMMENT_SCREEN,
  LOGIN_NAVIGATOR,
  NOTIFICATION_SCREEN,
  PRODUCT_DETAIL_SCREEN,
  PROFILE_NAVIGATOR,
  SUCCESS_SCREEN,
} from '../constants/NavigatorIndex';
import BottomBarNavigator from './BottomBarNavigator';
import CategoryDetailScreen from '../screens/productScreen/CategoryDetailScreen';
import ProductDetailScreen from '../screens/productScreen/ProductDetailScreen';
import CommentScreen from '../screens/productScreen/CommentScreen';
import AddCommentScreen from '../screens/productScreen/AddCommentScreen';
import Colors from '../constants/Colors';
import LoginNavigator from './LoginNavigator';
import AddressScreen from '../screens/addressScreen/AddressScreen';
import AddAddressPage from '../screens/addressScreen/AddAddressPage';
import SuccessScreen from '../screens/addressScreen/SuccessScreen';
import NotificationScreen from '../screens/homeScreen/NotificationScreen';
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
            headerShown: false,
          }}></StackNavigator.Screen>

        <StackNavigator.Screen
          name={ADD_COMMENT_SCREEN}
          component={AddCommentScreen}
          options={{
            headerTitle: 'Viết đánh giá',
            headerShown: false,
          }}></StackNavigator.Screen>
        <StackNavigator.Screen
          name={ADDRESS_SCREEN}
          component={AddressScreen}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>
        <StackNavigator.Screen
          name={ADD_ADDRESS_SCREEN}
          component={AddAddressPage}
          options={{
            headerShown: false,
          }}></StackNavigator.Screen>
        <StackNavigator.Screen
          name={SUCCESS_SCREEN}
          component={SuccessScreen}
          options={{
            headerTitle: 'Thêm Địa Chỉ',
            headerShown: false,
          }}></StackNavigator.Screen><StackNavigator.Screen
          name={NOTIFICATION_SCREEN}
          component={NotificationScreen}
          options={{
            headerTitle: 'Thông báo',
            headerShown: false,
          }}></StackNavigator.Screen>
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
