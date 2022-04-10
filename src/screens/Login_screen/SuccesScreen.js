import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function SuccesScreen(props) {
    const navigation = useNavigation()
    return (

        <View style={styles.container}
            onTouchEnd={() => navigation.navigate('LoginScreen')}>

            <Text>asdasfaf</Text>

        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    logo: {
        width: 400,
        height: 320,
    },




});

export default SuccesScreen;