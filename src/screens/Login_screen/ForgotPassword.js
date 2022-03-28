import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Form1 from '../../navigation/LoginNavigator';
import Button1 from '../../store/actions/button';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ForgotPassword() {
    const [email, setEmail] = React.useState("");
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.maintext}>Quên mật khẩu</Text>
            <Text style={styles.hidetext}>Vui lòng nhập email để xác nhận tài khoản, mã xác nhận sẽ được gửi đến email của bạn</Text>

            <View style={styles.login}>
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
                color='#667eea'
                onPress={() => console.log('Pressed')}>
                Xác nhận email
            </Button>
            <View style={styles.containertext}>
                <Text style={styles.text1}>
                    Nhớ lại mật khẩu ?
                </Text>
                <TouchableOpacity
                    onPress={() => null}   >
                    <Text style={styles.text2}>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containertext2}>
                <Text style={styles.text1}>
                    Không có tài khoản ?
                </Text>
                <TouchableOpacity
                    onPress={() => null}   >
                    <Text style={styles.text2}>
                        Đăng ký
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    containertext: {
        top: 250,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    containertext2: {
        top: 260,
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
    login: {
        top: 130
    },
    button: {
        color:'#4f5160',
        top: 200,
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
    },
});
export default ForgotPassword;