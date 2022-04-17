import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Form1 from '../accountScreen/Form'
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Gender from './Gender';
import Header from '../../components/UI/Header';
import { ADDRESS_SCREEN, ADD_ADDRESS_SCREEN } from '../../constants/NavigatorIndex';

function Profile(props) {
    const navigation = useNavigation()
    const [sex, setSex] = useState('Chưa xác định');
    const [birth, setBirth] = useState('Chưa xác định');
    const [email, setEmail] = useState('@Miku');
    const [phonenumber, setPhonenumber] = useState('Chưa xác định');
    const [img, setImage] = useState('../../../assets/images/logo1.png');
    return (

        <ScrollView style={styles.container}>
            <Header title="Thông tin cá nhân"></Header>
            <View style={styles.containeravatar}>
                <TouchableOpacity>
                    <Avatar.Image
                        size={100}
                        source={require('../../../assets/images/avatar.jpg')}

                    />
                </TouchableOpacity>

                <View>
                    <Text style={styles.text1} > Miku</Text>
                    <Text style={styles.text2} > {email}</Text>
                </View>

            </View>
            <Form1
                icons='gender-male-female'
                titletext='Gender'
                onPress={() => { navigation.navigate('Gender') }}
                titletext2={sex}
            />
            <Form1
                icons='calendar-month'
                titletext='Birth day'
                onPress={() => { navigation.navigate('Birth') }}
                titletext2={birth}
            />
            <Form1
                icons='email'
                titletext='Email'
                onPress={() => { navigation.navigate('Email') }}
                titletext2={email}
            />
            <Form1
                icons='cellphone'
                titletext='Phone number'
                onPress={() => { navigation.navigate('Phone number') }}
                titletext2={phonenumber}
            />
            <Form1
                icons='lock'
                titletext='Change password'
                onPress={() => { navigation.navigate('Change Password') }}
                titletext2={'*******'}
            />


        </ScrollView>



    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    containeravatar: {

        backgroundColor: '#ffff',
        alignContent: 'center',
        flexDirection: 'row',
        padding: 10
    },
    text1: {
        fontSize: 35,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
        alignItems: 'flex-start'
    },
    text2: {
        fontSize: 15,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
        alignItems: 'flex-start'
    },

});
export default Profile;