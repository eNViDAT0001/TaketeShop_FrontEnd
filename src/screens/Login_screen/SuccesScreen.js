import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'


function SuccesScreen(props) {

    return (
        <View style={styles.container} >
            <Image
                style={styles.logo}
                source={{
                    uri: '../../../assets/images/succes.png'
                }}
            ></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 400,
        height: 320,
    },




});

export default SuccesScreen;