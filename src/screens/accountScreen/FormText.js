import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

function Form2(props) {
    return (
        <View style={styles.container}>
            <Button
                icon={props.icons}
                mode="contained"
                color='white'
                labelStyle={styles.text}
                onPress={props.onpress}
                uppercase={false}
                contentStyle={styles.icon}
            >
                {props.titletext}
            </Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {       
        margin: 10,
    },
    text: {
        // color: 'black',
        color: '#2196f3',
        fontSize: 20,
        fontWeight: '900',
        fontFamily: 'open-sans-bold',
        textShadowRadius: 1,
    },
    icon: {
        height: 60,
        justifyContent: 'flex-start',


    }
});

export default Form2;
