import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'


function SuccesScreen(props) {

    return {
        < SafeAreaView style = { styles.container } >
        < View style={styles.imageContainer} >
            <Image style={styles.logo}
                style={styles.logo}
                source={{
                    uri: "../../../assets/images/succes.png"
                }} />
        </ >
        
        
        </SafeAreaView >
        < View style={styles.imageContainer} >
            <Image style={styles.logo}
                style={styles.logo}
                source={{
                    uri: images[currentImage]
                }} />
        </ >

        if (props == 1){


        }


}


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