import React, { useState, useEffect, componentdiv } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Form1 from '../accountScreen/Form';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Header from '../../components/UI/Header';

function Profile(props) {
  const navigation = useNavigation();
  const name = (useSelector(state => state.auth.name));
  const gender = (useSelector(state => state.auth.gender));
  const birth = (useSelector(state => state.auth.birthday));
  const email = (useSelector(state => state.auth.email));
  const phoneNumber = (useSelector(state => state.auth.phone));
  const img = (useSelector(state => state.auth.avatar));

  const date = birth.slice(0, 10).split('-');

  return (
    <ScrollView style={styles.container}>
      <Header title="Thông tin cá nhân"></Header>
      <View style={styles.containeravatar}>
        <TouchableOpacity
         //</View> onPress={chooseFile} 
         >
           
          <Avatar.Image
            size={100}
            source={{ uri: img }}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.text1}> {name}</Text>
          <Text style={styles.text2}> {email}</Text>
        </View>
      </View>
      <Form1
        icons="account"
        titletext="Tên tài khoản"
        onPress={() => {
          navigation.navigate('ChangeName', { value: name });
        }}
        titletext2={name}
      />
      <Form1
        icons="gender-male-female"
        titletext="Giới tính"
        onPress={() => {
          navigation.navigate('Gender', { value: gender });
        }}
        value={gender}
        titletext2={gender == 1 ? 'Nam' : 'Nữ'}
      />
      <Form1
        icons="calendar-month"
        titletext="Ngày sinh"
        onPress={() => {
          navigation.navigate('Birth');
        }}
        titletext2={`${date[2]}/${date[1]}/${date[0]}`}
      />
      <Form1
        icons="email"
        titletext="Email"
        onPress={() => {
          navigation.navigate('Email', { value: email });
        }}
        titletext2={email}
      />
      <Form1
        icons="cellphone"
        titletext="Số điện thoại"
        onPress={() => {
          navigation.navigate('Phone number', { value: phoneNumber });
        }}
        titletext2={phoneNumber}
      />
      <Form1
        icons="lock"
        titletext="Đổi mật khẩu"
        onPress={() => {
          navigation.navigate('Change Password');
        }}
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
    padding: 10,
  },
  text1: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'open-sans-bold',
    textShadowRadius: 1,
    alignItems: 'flex-start',
  },
  text2: {
    left: 5,
    fontSize: 15,
    fontWeight: '900',
    fontFamily: 'open-sans-bold',
    textShadowRadius: 1,
    alignItems: 'flex-start',
  },
});
export default Profile;
