import React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Form1 from './Form';
import { ADDRESS_SCREEN,ADMIN_NAVIGATOR,PROFILE_NAVIGATOR, STARTUP_SCREEN} from '../../constants/NavigatorIndex';
import * as authActions from '../../store/actions/auth'
import * as chanelActions from '../../store/actions/chanelActions';

function AccountMainScreen() {
    const dispatch = useDispatch();   
    const navigation = useNavigation();
    const userID = useSelector(state => state.auth.userID);
    console.log("User ID:"+ userID);
    dispatch(chanelActions.getChanel(4));
    const role = useSelector(state => state.auth.role);
    const chanelId = useSelector(state => state.chanel.chanelId);
    return (
        <ScrollView style={styles.screen}>

            <Form1
                styles={styles.itemsContainer}
                icons='account'
                titletext='Thông tin cá nhân'
                onPress={() => { navigation.navigate(PROFILE_NAVIGATOR) }}
            //titletext2 = 'xcvjkz'
            />
            <Form1
                styles={styles.itemsContainer}
                icons='map-marker'
                titletext='Địa chỉ'
                onPress={() => navigation.navigate(ADDRESS_SCREEN)}
            />

            {role !== 'CUSTOMER' ? <Form1
                styles={styles.itemsContainer}
                icons='credit-card-outline'
                titletext='Cửa hàng của tôi'
                onPress={() => navigation.navigate(ADMIN_NAVIGATOR)}
            />: null}

            <Form1
                styles={styles.itemsContainer}
                icons='face-agent'
                titletext='Hỗ trợ khách hàng'
                onPress={() => {
                    if (role != 'CUSTOMER') {                        
                        console.log("chanel get :"+ chanelId)        
                            
                        dispatch(chanelActions.getMessagerFromChanelId(chanelId));
                        navigation.navigate('ChatScreen');
                    } else {
                        dispatch(chanelActions.getAllChanel(userID));
                        navigation.navigate('ChatScreen');
                    }
                }
                }
            />

            <Form1
                styles={styles.itemsContainer}
                icons='logout'
                titletext='Đăng xuất'
                onPress={() => { dispatch(authActions.logout); navigation.navigate(STARTUP_SCREEN) }}
            />

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    },
    itemsContainer: {
        height: 100
    }
});

//function 
export default AccountMainScreen;