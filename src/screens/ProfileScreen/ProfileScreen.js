import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Form1 from '../accountScreen/Form'
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Gender from './Gender';
import Header from '../../components/UI/Header';
import { ADDRESS_SCREEN, ADD_ADDRESS_SCREEN } from '../../constants/NavigatorIndex';
import { getOneUserData } from '../../store/actions/productsAction';


function Profile(props) {
    const navigation = useNavigation()
    const [name, setName] = useState('Chưa xác định');
    const [sex, setSex] = useState(1);
    const [data, setData] = useState(3);
    const [birth, setBirth] = useState('Chưa xác định');
    const [email, setEmail] = useState('@Chưa xác định');
    const [phonenumber, setPhonenumber] = useState('Chưa xác định');
    const [img, setImage] = useState('../../../assets/images/logo1.png');

    const getDataUser = async (UserId) => {
        try {
            const response = await fetch('http://localhost:5000/user/3');
            const json = await response.json();
            json[0].name ? setName(json[0].name) : null;
            json[0].gender ? setSex(json[0].gender) : null;
            json[0].birthday ? setBirth(json[0].birthday) : null;
            json[0].email ? setEmail(json[0].email) : null;
            json[0].phonenumber ? setPhonenumber(json[0].phonenumber) : null;


        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDataUser();
    }, []);


    getOneUserData(3).then((params) => {

        params[0].name ? setName(json[0].name) : null;
        params[0].gender ? setSex(json[0].gender) : null;
        params[0].birthday ? setBirth(json[0].birthday) : null;
        params[0].email ? setEmail(json[0].email) : null;
        params[0].phonenumber ? setPhonenumber(json[0].phonenumber) : null;

    }).catch((error) => {
        console.log(error);
    });



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
                    <Text style={styles.text1} > {name}</Text>
                    <Text style={styles.text2} > {email}</Text>
                </View>

            </View>
            <Form1
                icons='account'
                titletext='Tên tài khoản'
                onPress={() => {
                    navigation.navigate('ChangeName')
                }}
                titletext2={name}
            />
            <Form1
                icons='gender-male-female'
                titletext='Giới tính'
                onPress={() => { navigation.navigate('Gender') }}
                titletext2={(sex == 1) ? "Nam" : "Nữ"}
            />
            <Form1
                icons='calendar-month'
                titletext='Ngày sinh'
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
                titletext='Số điện thoại'
                onPress={() => { navigation.navigate('Phone number') }}
                titletext2={phonenumber}
            />
            <Form1
                icons='lock'
                titletext='Đổi mật khẩu'
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
        fontSize: 30,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
        alignItems: 'flex-start'
    },
    text2: {
        left: 5,
        fontSize: 15,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
        alignItems: 'flex-start'
    },

});
export default Profile;