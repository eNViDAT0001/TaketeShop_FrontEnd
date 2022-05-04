import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../store/actions/auth';
import { Dropdown } from 'react-native-element-dropdown';
//import ImagePicker  from 'react-native-image-picker';
import CartItems from '../../components/CartItems';

const data = [
    { label: 'Nam', value: '1' },
    { label: 'Nữ', value: '0' },
];


function FixProduct(props) {
    const [namepro, setNamepro] = useState('');
    const [detail, setDetail] = useState('Thơm ngon ');
    const [SL, setSL] = useState();
    const [gia, setGia] = useState();
    const [loaisp, setLoaisp] = useState(null);
    const [unit, setUnit] = useState(null);
    const navigation = useNavigation();
    const userID = useSelector(state => state.auth.userID);
    const dispatch = useDispatch();


    return (
        <ScrollView style={styles.screen}>
            <Header title="Sửa sản phẩm"></Header>

            <View style={styles.screen1}>
                <View style={styles.screenrow}>
                    <Text style={styles.text1}> Tên sản phẩm </Text>
                    <Text 
                    style={styles.textEnd }> ID: {userID} </Text>

                </View>

                <TextInput
                    label="Nhập tên sản phẩm"
                    placeholder={namepro}
                    style={{ backgroundColor: Colors.backgroundColor }}
                    mode="outlined"
                    value={namepro}
                    onChangeText={namepro => setNamepro(namepro)}
                />
            </View>

            <View style={styles.screen1}>
                <Text style={styles.text1}> Mô tả sản phẩm </Text>
                <TextInput
                    label="Mô tả sản phẩm"
                    placeholder={detail}
                    style={{ backgroundColor: Colors.backgroundColor }}
                    mode="outlined"
                    multiline
                    numberOfLines={4}
                    value={detail}
                    onChangeText={detail => setDetail(detail)}
                />
            </View>
            {/* SL san pham + gia SP */}
            <View style={styles.screenrow}>
                <View style={styles.screen1}>
                    <Text style={styles.text1}> SL sản phẩm </Text>
                    <TextInput
                        label="Nhập SL"
                        placeholder={SL}
                        style={{ backgroundColor: Colors.backgroundColor }}
                        mode="outlined"
                        keyboardType='numeric'
                        value={SL}
                        onChangeText={SL => setSL(SL)}
                    />
                </View>
                <View style={styles.screen1}>
                    <Text style={styles.text1}> Giá sản phẩm </Text>
                    <TextInput
                        label="Nhập giá"
                        placeholder={gia}
                        style={{ backgroundColor: Colors.backgroundColor }}
                        mode="outlined"
                        keyboardType='numeric'
                        value={gia}
                        onChangeText={gia => setGia(gia)}
                    />
                </View>
            </View>


            {/* Loai san pham + don vi */}
            <View style={styles.screenrow}>
                <View style={styles.screen1}>
                    <Text style={styles.text1}> Loại sản phẩm </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={130}
                        labelField="label"
                        valueField="value"
                        placeholder={'Chọn loại SP'}
                        value={loaisp}
                        onChange={item => {
                            setLoaisp(item.loaisp);
                        }}
                    />
                </View>
                <View style={styles.screen1}>
                    <Text style={styles.text1}> Đơn vị </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        maxHeight={130}
                        labelField="label"
                        valueField="value"
                        placeholder={'Chọn Đơn vị'}
                        value={unit}
                        onChange={item => {
                            setUnit(item.unit);
                        }}
                    />
                </View>
            </View>

            {/* Anh chi tiet */}
            <View style={styles.screen1}>
                <Text style={styles.text1}> Ảnh chi tiết </Text>

            </View>

            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    contentStyle={styles.buttonText}
                    style={styles.button}
                    color="#40bfff"
                    labelStyle={{ fontSize: 20 }}
                    onPress={null}>
                    Thêm mặt hàng
                </Button>
            </View>
        </ScrollView>
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
    screenrow: {
        flexDirection: 'row',
    },
    text1: {
        flex: 1,
        fontSize: 25,
        color: 'black',
    },
    textEnd: {        
        justifyContent: 'flex-end',
        fontSize: 25,
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
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
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
        color: '#4f5160',
    },
    button: {
        height: 50,
    },
    buttonText: {
        height: '100%',
    },
});
export default FixProduct;
