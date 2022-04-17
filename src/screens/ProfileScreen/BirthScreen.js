import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper';
import FormText from '../accountScreen/FormText';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';

function BirthScreen(props) {
    const navigation = useNavigation()
    const [StartDate, setStartDate] = React.useState('');

    const onDateChange = (date) => {
        setStartDate(date);
    }
    return (
        <View style={styles.screen}>
            <Header title="Thay đổi ngày sinh"></Header>
            <View style={styles.screen1}>

                <View style={styles.Daytextcontainer}>
                    <Text style={styles.Daytext}>
                        {StartDate ? StartDate.toString() : 'Vui lòng chọn ngày'}
                    </Text>
                </View>

                <View style={styles.calen}>
                    <CalendarPicker
                        onDateChange={onDateChange}
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    contentStyle={styles.buttonText}
                    style={styles.button}
                    color='#4F5160'
                    labelStyle={{ fontSize: 20 }}
                    onPress={() => navigation.goBack()}>
                    Confirm
                </Button>
            </View>
        </View>




    );
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    calen: {
        flex: 14,
    },
    screen1: {
        padding: 10,
        flex: 14,
    },
    Daytextcontainer: {
        backgroundColor: Colors.backgroundColor,        
        borderColor : 'black',
        borderWidth : 1,
        height: 40,
        justifyContent : 'center'
    },
    Daytext: {
        left: 5,
        fontSize: 20,
        color: '#4f5160',
    },
    calendar: {

    },
    text: {
        fontSize: 40,
        color: 'black',
    },

    buttonContainer: {
        margin: 5,
        borderRadius: 40,
        color: '#4f5160'
    },
    button: {
        height: 50,
    },
    buttonText: {
        height: '100%',
    },

});
export default BirthScreen;