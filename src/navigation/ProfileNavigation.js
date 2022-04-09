import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackView } from '@react-navigation/stack';
import Profile from '../screens/ProfileScreen/ProfileScreen';
import Gender from '../screens/ProfileScreen/Gender';
import BirthScreen from '../screens/ProfileScreen/BirthScreen';
import Email from '../screens/ProfileScreen/Email';
import Phone from '../screens/ProfileScreen/PhoneScreen';
import ChangePassword from '../screens/ProfileScreen/ChangePassword';



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
            <Stack.Screen
              name ={"Birth"}               
              component={BirthScreen}>
            </Stack.Screen>  
            <Stack.Screen
              name ={"Email"}               
              component={Email}>
            </Stack.Screen>   
            <Stack.Screen
              name ={"Phone number"}               
              component={Phone}>
            </Stack.Screen>   
            <Stack.Screen
              name ={"Change Password"}               
              component={ChangePassword}>
            </Stack.Screen>          

            
           
        </Stack.Navigator>

    );

}



export default ProfileNavigation;  