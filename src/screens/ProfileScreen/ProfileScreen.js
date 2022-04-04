import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import Form1 from '../accountScreen/Form'
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Gender from './Gender';


function Profile(props) {
      const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.containeravatar}>
                <Avatar.Image size={100} source={require('../../../assets/images/avatar.jpg')} />
                <View>
                    <Text style={styles.text1} > Miku</Text>
                    <Text style={styles.text2} > @Miku</Text>
                </View>

            </View>
             <Form1
                icons='gender-male-female'
                titletext='Gender'
                onPress={() => { navigation.navigate('Gender') }}
                titletext2='xcvjkz'
            />
            <Form1
                icons='calendar-month'
                titletext='Birth day'
                onPress={() => { navigation.navigate() }}                
            />
              <Form1
                icons='email'
                titletext='Email'
                onPress={() => { navigation.navigate() }}                
            />
              <Form1
                icons='cellphone'
                titletext='Phone number'
                onPress={() => { navigation.navigate() }}                
            />
              <Form1
                icons='lock'
                titletext='Change password'
                onPress={() => { navigation.navigate() }}                
            />
            

        </View>



    );
}


const styles = StyleSheet.create({
    container: {
        top: 10,
        flex: 1,
        backgroundColor: '#ffff',
        //alignContent: 'center',
    },
    containeravatar: {
        //paddingVertical: 10,
       
        backgroundColor: '#ffff',
        alignContent: 'center',
        flexDirection: 'row'
    },
    text1: {
        fontSize: 35,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
        alignItems: 'flex-start'
    },
    text2: {
        fontSize: 15,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
        alignItems: 'flex-start'
    },

});
export default Profile;