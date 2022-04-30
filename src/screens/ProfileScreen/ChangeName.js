import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';



function ChangeName(props) {
    const [name1, setName] = useState("");
    const navigation = useNavigation();

    const ChangeButton = () => {
        if (!name1 ){
            alert("Vui lòng nhập tên tài khoản");     
        }else  try {
            fetch('http://localhost:5000/user/'+'4'+'?field=name&value='+ name1, {
                method: 'PATCH',
                headers: {              
                    'Content-type': 'application/json; charset=UTF-8',                                 
                },
                body: JSON.stringify(),
               
            }).then((response) => response.json())
            .then(navigation.navigate('Profile'));                 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.screen}>
            <Header title="Thay đổi tên hiển thị"></Header>
            <View style={styles.screen1}>
                <TextInput
                    label="Tên hiển thị"
                    placeholder={"Mời nhập tên hiển thị"}
                    style={{ backgroundColor: Colors.backgroundColor }}
                    mode='outlined'
                    value={name1}
                    onChangeText={name1 => setName(name1)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    contentStyle={styles.buttonText}
                    style={styles.button}
                    color='#4F5160'
                    labelStyle={{ fontSize: 20 }}
                    onPress={ChangeButton}>
                    Xác nhận
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
    screen1: {
        padding: 10,
        flex: 14,
        backgroundColor: Colors.backgroundColor,
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
export default ChangeName;