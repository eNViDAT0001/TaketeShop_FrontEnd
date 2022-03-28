import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Form1 from '../../navigation/LoginNavigator';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignUpScreen(navigation) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.maintext}>Đăng ký</Text>     
      <View style={styles.signup}>
        <TextInput
         style = {{marginBottom: 10}}
          label="Username"
          mode='outlined'
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style = {{marginBottom: 10}}
          label="New Password"
          mode='outlined'
          value={password}          
          onChangeText={password => setPassword(password)}
        />
        <TextInput
         style = {{marginBottom: 10}}
          label="Confirm password"
          mode='outlined'
          value={confirmpassword}
          onChangeText={confirmpassword => setConfirmpassword(confirmpassword)}
        />
        <TextInput
          label="Email"
          mode='outlined'
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </View>
      <Button
        style={styles.button}
        mode="contained"
        color='#4f5160'
        onPress={() => console.log('Pressed')}>
        Đăng ký
      </Button>
      <View style={styles.containertext}>
        <Text style={styles.text1}>
         Đã có tài khoản ?
        </Text>
        <TouchableOpacity
          onPress={() => null}   >
          <Text style={styles.text2}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffff',
    },
    containertext: {
      top: 200,
      flexDirection: 'row',
      alignSelf: 'center'
    },   
    text1: {
      marginLeft: 100,
      color: "black",
      fontSize: 20,
    },
    text2: {
      marginLeft: 10,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: "blue",
      fontSize: 20,
    },
    maintext: {
      top: 50,
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 32,
      color: 'black'
    },
    hidetext: {
      top: 120,
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 16,
      color: '#9B9B9B',
    },
    signup: {
      top: 130
    },
    button: {
      top: 200,
      padding: 15,
      marginVertical: 5,
      borderRadius: 10,
    },
  });

export default SignUpScreen;

