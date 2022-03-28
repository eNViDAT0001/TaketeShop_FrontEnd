import React from 'react'
import { Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack'
import Colors from '../constants/Colors'

function Form1(props) {
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView>
            <Text style={styles.title}> {props.title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={props.placeholder}
                keyboardType="numeric"
            />

        </SafeAreaView>
    );

}


const styles = StyleSheet.create({  
    input: {

        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: Colors.primaryColor,
    },  
  
});
export default Form1;  