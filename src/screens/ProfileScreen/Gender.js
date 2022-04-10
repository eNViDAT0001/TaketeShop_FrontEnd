import React, { useState,useRoute } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
//import FormText from '../accountScreen/FormText';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const data = [
    { label: 'Nam', value: '1' },
    { label: 'Nữ', value: '2' },
];

function Gender(props) {
    const [value, setValue] = useState(null);
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <View style={styles.screen1}>
                <Text style={styles.text}>
                    Giới tính</Text>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    maxHeight={130}
                    labelField="label"
                    valueField="value"
                    placeholder={'Giới tính'}
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
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
    screen1: {
        flex: 14,
    },
    text: {
        fontSize: 30,
        color: 'black',
    },
    dropdown: {
        top: 10,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        paddingHorizontal: 8,
        backgroundColor: Colors.backgroundColor,
    },
    expand: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: '#FF9C40',
    },
    itemList: {
        flex: 4,
    },

    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
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
export default Gender;