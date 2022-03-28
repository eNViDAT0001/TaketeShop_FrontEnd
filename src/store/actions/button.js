import React from 'react'
import { Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'

function Button1(props) {
    <Button
        color={"#f194ff"}
        title= {props.title }

        onpress={() => null}
    >
    </Button>

}

const styles = StyleSheet.create({
    title: {

        fontFamily: 'open-sans-bold',
        fontSize: 22,        
    },  
});

export default Button1;  