import React, { useState, useEffect, componentdiv } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Form1 from '../../accountScreen/Form';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Header from '../../../components/UI/Header';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../../../store/actions/auth'
import * as chanelActions from '../../../store/actions/chanelActions';

function ListChanel() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = (useSelector(state => state.auth.name));
 

  return (
    <ScrollView style={styles.container}>
      <Header title="Thông tin cá nhân"></Header>
    
      <Form1
        icons="account"
        titletext="Tên tài khoản"
        onPress={() => {
         // navigation.navigate('ChangeName', { value: name });
        }}
        titletext2={name}
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
export default ListChanel;
