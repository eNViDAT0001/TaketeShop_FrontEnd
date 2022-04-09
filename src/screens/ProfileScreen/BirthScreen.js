import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import FormText from '../accountScreen/FormText';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';

function BirthScreen(props) {
    const navigation = useNavigation()
    const [StartDate, setStartDate] = React.useState('');
    const onDateChange = () => {
        setStartDate(StartDate);
    }
    return (
        <View style={styles.screen}>
            <View style={styles.calen}>
                <CalendarPicker
                    onDateChange={onDateChange}
                />
            </View>

            <Button
                style={styles.button}
                mode="contained"
                color='#667eea'
                onPress={() => navigation.goBack()}
            >
                Confirm
            </Button>
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

    button: {
        flex: 1,
        bottom: 10,
        padding: 15,
        marginVertical: 15,
        borderRadius: 10,
        color: '#4f5160'

    },

});
export default BirthScreen;