import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileScreen/ProfileScreen';
import Gender from '../screens/ProfileScreen/Gender';



const Stack = createNativeStackNavigator();

function ProfileNavigation() {

    return (
        <Stack.Navigator initialRouteName={'Profile'}>
            <Stack.Screen
              name ={"Profile"}               
              component={Profile}>
            </Stack.Screen>       
            <Stack.Screen
              name ={"Gender"}               
              component={Gender}>
            </Stack.Screen>             
        </Stack.Navigator>

    );

}



export default ProfileNavigation;  