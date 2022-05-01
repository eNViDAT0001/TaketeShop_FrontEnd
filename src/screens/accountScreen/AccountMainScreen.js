import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Form1 from './Form';
import { ADDRESS_SCREEN,ADD_ADDRESS_SCREEN,LOGIN_MAIN_SCREEN,LOGIN_NAVIGATOR,PROFILE_NAVIGATOR, STARTUP_SCREEN} from '../../constants/NavigatorIndex';
import * as authActions from '../../store/actions/auth'

function AccountMainScreen() {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.screen}>
            
            <Form1
                styles={styles.itemsContainer}
                icons='account'
                titletext='Thông tin cá nhân'                
                onPress={()=> {navigation.navigate(PROFILE_NAVIGATOR)}}
                //titletext2 = 'xcvjkz'
            />
            <Form1
             styles={styles.itemsContainer}
                icons='map-marker'
                titletext='Địa chỉ'
                onPress={() => navigation.navigate(ADDRESS_SCREEN)}
            />

            <Form1
             styles={styles.itemsContainer}
                icons='credit-card-outline'
                titletext='Cửa hàng của tôi'
                //onPress={() => navigation.navigate()}
            />
            <Form1
             styles={styles.itemsContainer}
                icons='face-agent'
                titletext='Hỗ trợ khách hàng'
                onPress={() => navigation.navigate('ChatScreen')}
            />

            <Form1
             styles={styles.itemsContainer}
                icons='logout'
                titletext='Đăng xuất'
                onPress={() => {dispatch(authActions.logout); navigation.navigate(LOGIN_NAVIGATOR)}}
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