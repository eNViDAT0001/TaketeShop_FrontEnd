import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
//import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firebase, { auth } from 'react-native-firebase';
import { GoogleSignin, } from 'react-native-google-signin';

function LoginByGoogle() {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const responseGoogle = (response) => {
        console.log(response);
    }
    let methodlogy;
    doLogin = (provider) => {
        switch (provider) {
            case 'google':
                methodlogy = logInSocial('google')
                break
            default:
                methodlogy = null
        }
    }
    googleLogin = async () => {
        try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
        } catch (err){
            console.log(err);
        }
        
    }

    setupSocial = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
            await GoogleSignin.configure({
                webClientId: '944233241292-cnfpm288mpi0prteomo0eig20tcuiobu.apps.googleusercontent.com',
                //iosClientId: Config.IOS_CLIENT_ID,
                offlineAccess: true,
            })

            const user = await GoogleSignin.currentUserAsync()
            console.log('Saved google user', user)
            resetAuthSocial()
        } catch (err) {
            console.log('Something wrong with google play service!', { err })
        }
    }
 
        // const Dangky =() => {      
        //     GoogleSignin
        //     firebase.auth().createUserWithEmailAndPassword(email, pass).
        //     then(() => {
        //         alert('Đăng ký thành công, vui lòng đăng nhập')
        //         .then (() => navigation.popToTop())
        //     }).catch((err) => {
        //         alert('Tài khoản của email này đã tồn tại, vui lòng chọn email khác')
        //     });
        // }
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.maintext}>Đăng ký bằng Google</Text>
                <Text style={styles.hidetext}>
                    Vui lòng nhập Email và mật khẩu Email của bạn để đăng ký{' '}
                </Text>

                <View style={styles.reset}>

                    <TextInput
                        style={{ marginBottom: 10 }}
                        label="Email"
                        mode="outlined"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        style={{ marginBottom: 10 }}
                        label="Mật khẩu"
                        mode="outlined"
                        value={pass}
                        onChangeText={text => setPass(text)}
                    />
                </View>
                <Button
                    style={styles.button}
                    mode="contained"
                    color="#667eea"
                    onPress={() => doLogin('google')}>
                    Đăng ký
                </Button>
                <TouchableOpacity
                    style={styles.containertext}
                    onPress={() => navigation.popToTop()}>
                    <Text style={styles.text2}>Quay lại đăng nhập</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            backgroundColor: '#ffff',
        },
        containertext: {
            top: 250,
            flexDirection: 'row',
            alignSelf: 'center',
        },
        containertext2: {
            top: 260,
            flexDirection: 'row',
            alignSelf: 'center',
        },
        text1: {
            marginLeft: 100,
            color: 'black',
            fontSize: 20,
        },
        text2: {
            marginLeft: 10,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            color: 'blue',
            fontSize: 20,
        },
        maintext: {
            top: 50,
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 32,
            color: 'black',
        },
        hidetext: {
            top: 120,
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 16,
            color: '#9B9B9B',
        },
        reset: {
            top: 130,
        },
        button: {
            color: '#4f5160',
            top: 200,
            padding: 15,
            marginVertical: 5,
            borderRadius: 10,
        },
    });
    export default LoginByGoogle;
