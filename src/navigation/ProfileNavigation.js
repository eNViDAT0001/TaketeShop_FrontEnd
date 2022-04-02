import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackView } from '@react-navigation/stack';
import Profile from '../screens/ProfileScreen/ProfileScreen';
import Gender from '../screens/ProfileScreen/Gender';



const Stack = createNativeStackNavigator();

function ProfileNavigation() {
    const [text, onChangeText] = React.useState(null);

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