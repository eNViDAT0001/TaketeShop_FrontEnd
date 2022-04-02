import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import HomePage from '../homeScreen/HomePage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form1 from './Form';
import LoginNavigator from '../../navigation/LoginNavigator';
import Profile from '../ProfileScreen/ProfileScreen';
import SupportScreen from './SupportScreen';
import ProfileNavigation from '../../navigation/ProfileNavigation'
import { PROFILE_NAVIGATOR } from '../../constants/NavigatorIndex';



function AccountMainScreen() {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.screen}>
            
            <Form1
                styles={styles.itemsContainer}
                icons='account'
                titletext='Profile'                
                onPress={()=> {navigation.navigate(PROFILE_NAVIGATOR)}}
                titletext2 = 'xcvjkz'
            />
            <Form1
             styles={styles.itemsContainer}
                icons='map-marker'
                titletext='Address'
                //onPress={() => navigation.navigate()}
            />

            <Form1
             styles={styles.itemsContainer}
                icons='credit-card-outline'
                titletext='My store'
                //onPress={() => navigation.navigate()}
            />
            <Form1
             styles={styles.itemsContainer}
                icons='face-agent'
                titletext='Support'
               // onPress={() => navigation.navigate('SupportScreen')}
            />

            <Form1
             styles={styles.itemsContainer}
                icons='logout'
                titletext='Log out'
                onPress={() => navigation.navigate('LoginNavigator')}
            />

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    screen: {
       flex: 1,
    },
    itemsContainer:{
        height: 100
    }
});

//function 
export default AccountMainScreen;