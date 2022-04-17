import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { FORGOT_PASSWORD_SCREEN, BOTTOM_BAR_NAVIGATOR } from '../../constants/NavigatorIndex';
import ImageShow from '../../components/ImageShow';
import Colors from '../../constants/Colors';


function LoginScreen() {
  const navigation = useNavigation()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [currentImage, setCurrentImage] = React.useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo1.png')}
        ></Image>
      </View>
      <View>

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
        <View style={styles.forgotpasscontainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(FORGOT_PASSWORD_SCREEN)}
          >
            <Text style={styles.press}
            > Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            contentStyle={styles.buttonText}
            style={styles.button}
            color={Colors.primaryColor}
            labelStyle={{fontSize: 20}}
            onPress={() => navigation.navigate(BOTTOM_BAR_NAVIGATOR)}>
              Đăng nhập
          </Button>
        </View>

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

      </View >

      <View style={styles.bottom}>
        <Text style={styles.text3}>
          Đăng nhập với
        </Text>
        <View style={styles.ggfb}>
          <IconButton
            icon="google"
            color= "red"
            size={20}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="facebook"
            color= "blue"
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
    justifyContent: 'space-between',
    backgroundColor: Colors.backgroundColor,
    padding: 10,
  },
  containertextinput: {
    padding: 15,
  },
  containertext: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  text3: {
    color: "black",
    fontSize: 20,
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
  imageContainer: {
    width: '100%',
    flex: 1,
    overflow: 'hidden'
  },
  logo: {
    width: '100%',
    height: '100%',
  },

  input: {
    elevation: 0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  forgotpasscontainer: {
    alignItems: 'flex-end',
  },
  press: {
    padding: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: "black",
    fontSize: 22,
  },
  buttonContainer: {
    margin: 5,
    borderRadius: 20,
    color: '#4f5160'
  },
  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
  bottom: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
   ggfb: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default LoginScreen;


