import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_MAIN_SCREEN } from '../../constants/NavigatorIndex';


function SignUpScreen() {
  const navigation = useNavigation()
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
          label="Password"
          mode='outlined'
          secureTextEntry={true}
          value={password}          
          onChangeText={password => setPassword(password)}
        />
        <TextInput
         style = {{marginBottom: 10}}
          label="Confirm password"
          secureTextEntry={true}
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
      <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            contentStyle={styles.buttonText}
            style={styles.button}
            color='#4f5160'
            labelStyle={{fontSize: 20}}
            onPress={() => navigation.navigate('SuccesScreen')}>
              Đăng ký
          </Button>
        </View>      
      <View style={styles.containertext}>
        <Text style={styles.text1}>
         Đã có tài khoản ?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(LOGIN_MAIN_SCREEN)} >
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
      padding: 10,
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
    buttonContainer: {
      margin: 5,
      borderRadius: 20,
      color: '#4f5160'
    },
    button: {
      height: 50,
      borderRadius: 10,
      top : 170,
    },
    buttonText: {
      height: '100%',
    },
    // button: {
    //   top: 200,
    //   padding: 15,
    //   marginVertical: 5,
    //   borderRadius: 10,
    // },
  });

export default SignUpScreen;

