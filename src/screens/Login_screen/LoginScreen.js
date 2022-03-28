import React from 'react';
import ReactDOM from 'react-dom';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './ForgotPassword';
import SignUpScreen from './SignUp';

function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const images = ["../../../assets/images/logo1.png",
    "../../../assets/images/logo2.png",
    "../../../assets/images/logo3.png"];
  const [currentImage, setCurrentImage] = React.useState(0);

  const switchImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(currentImage = 0);
    }
    return currentImage;
  }
  const componentDidMount = () => {
    setInterval(switchImage, 2000);
  }

  return (
    <SafeAreaView style={styles.container}>      

      <View style={styles.imageContainer}>
        <Image style={styles.logo}
        style = {styles.logo}
          source={{
            uri : images[currentImage]
          }} />
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
         onPress={() => navigation.navigate(ForgotPassword)}
      >
        <Text style={styles.press}
        > Quên mật khẩu ?</Text>
      </TouchableOpacity>

      <Button
        style={styles.button}
        mode="contained"
        color='#667eea'
        onPress={() => console.log('Pressed')}>
        Đăng nhập
      </Button>

      <View style={styles.containertext}>
        <Text style={styles.text1}>
          Không có tài khoản ?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(SignUpScreen)}  >
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
            icon="google"
            color='blue'
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


