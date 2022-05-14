import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACCOUNT_MAIN_SCREEN, CHAT_SCREEN,LIST_CHANEL , LIST_STAFF_SCREEN } from '../constants/NavigatorIndex';
import AccountMainScreen from '../screens/accountScreen/AccountMainScreen';
import ProfileNavigation from './ProfileNavigation';
import ChatScreen from '../screens/accountScreen/ChatScreen/ChatScreen';
import ListChanel from '../screens/accountScreen/ChatScreen/ListChanel';
import ListStaffScreen from '../screens/accountScreen/ADMIN/ListStaffScreen'
const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator initialRouteName={ACCOUNT_MAIN_SCREEN}>
      <Stack.Screen
        name={ACCOUNT_MAIN_SCREEN}
        options={{ headerShown: false }}
        component={AccountMainScreen}></Stack.Screen>
      <Stack.Screen
        name={CHAT_SCREEN}
        options={{ headerShown: false }}
        component={ChatScreen}>
      </Stack.Screen>

      <Stack.Screen
        name={LIST_CHANEL}
        options={{ headerShown: false }}
        component={ListChanel}>
      </Stack.Screen>

      <Stack.Screen
        name={LIST_STAFF_SCREEN}
        options={{ headerShown: false }}
        component={ListStaffScreen}>
      </Stack.Screen>



    </Stack.Navigator>

  );
}

export default AccountNavigator;
