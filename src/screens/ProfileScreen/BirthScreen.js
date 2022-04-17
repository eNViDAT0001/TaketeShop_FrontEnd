import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import FormText from '../accountScreen/FormText';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/UI/Header';

function BirthScreen(props) {
    const navigation = useNavigation()
    const [StartDate, setStartDate] = React.useState('');
    const onDateChange = () => {
        setStartDate(StartDate);
    }
    return (
        <View style={styles.screen}>
            <Header title="Thay đổi ngày sinh"></Header>
            <View style={styles.calen}>
                <CalendarPicker
                    onDateChange={onDateChange}
                />
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