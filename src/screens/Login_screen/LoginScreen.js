import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ForgotPassword from './ForgotPassword';
import SignUpScreen from './SignUp';
import { FORGOT_PASSWORD_SCREEN, BOTTOM_BAR_NAVIGATOR } from '../../constants/NavigatorIndex';
import ImageShow from '../../components/ImageShow';

function LoginScreen() {
  const navigation = useNavigation()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [currentImage, setCurrentImage] = React.useState();

  return (
    <SafeAreaView style={styles.container}>

      {/* <View style={styles.imageContainer}>
        <Image style={styles.logo}
          style={styles.logo}
          source={require('../../../assets/images/logo1.png')} />
      </View> */}
      <View style={styles.imageContainer}>
        <ImageShow style={styles.logo} />
      </View>





      <View style={styles.containertextinput}>
        <TextInput
          label="username"
          mode='outlined'
          value={username}
          onChangeText={username => setUsername(username)}
        />

        <TextInput
          label="password"
          mode='outlined'
          value={password}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(FORGOT_PASSWORD_SCREEN)}
      >
        <Text style={styles.press}
        > Quên mật khẩu ?</Text>
      </TouchableOpacity>

      <Button
        style={styles.button}
        mode="contained"
        color='#667eea'
        onPress={() => navigation.navigate(BOTTOM_BAR_NAVIGATOR)}>
        Đăng nhập
      </Button>

      <View style={styles.containertext}>
        <Text style={styles.text1}>
          Không có tài khoản ?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}  >
          <Text style={styles.text2}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.text3}>
          Đăng nhập với
        </Text>
        <View style={styles.ggfb}>
          <IconButton
            icon="google"
            color={Colors.red500}
            size={20}
            onPress={() => console.log('Pressed')}
          />
           <IconButton
            icon="facebook"
            color={Colors.blue500}
            size={20}
            onPress={() => console.log('Pressed')}
          />
         
        </View>

      </View>

    </SafeAreaView >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  containertextinput: {
    padding: 15,
  },
  containertext: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  ggfb: {
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
  text3: {
    color: "black",
    fontSize: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 320,
  },

  input: {
    elevation: 0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  press: {
    textAlign: 'right',
    padding: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: "black",
    fontSize: 22,
  },
  button: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    color: '#4f5160'

  },
  bottom: {
    bottom: '-5%',
    alignSelf: 'center',
  },
});

export default LoginScreen;


