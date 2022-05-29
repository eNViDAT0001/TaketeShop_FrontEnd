import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from 'react-native';
import { convertWeekToVietnamese, convertMonthToVietnamese } from '../../../ulti/Ulti';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/UI/Header';
import Colors from '../../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../store/actions/auth';
import { Dropdown } from 'react-native-element-dropdown';
import Card from '../../../components/UI/Card';




function BannerScreen(props) {   
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const categoryList = useSelector(state => state.category.categorys);;
    const [name, setName] = useState('');
    const [sale, setSale] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState('');
    const [displayDay, setDisplayDay] = useState([]);

    const onDateChange = async day => {
        await setDate(day);
    };

    const SQLDate = date => {
        return `${date[3]}-${convertMonthToVietnamese(date[1])}-${date[2]}`;
    };
    const showDate = date => {
        return `${convertWeekToVietnamese(date[0])} ${date[2]
            }/${convertMonthToVietnamese(date[1])}/${date[3]}`;
    };

    useLayoutEffect(() => {
        setDisplayDay(date.toString().split(' '));
    }, [date]);
    return (
        <ScrollView style={styles.screen}>
            <Header title="Banner"></Header>

            <View style={styles.inputContainer}>
                <Text style={styles.title}>Tên Banner: </Text>
                <TextInput
                    label="Nhập tên Banner"
                    placeholder={'Mời nhập tên Banner'}
                    style={{ backgroundColor: Colors.backgroundColor }}
                    mode="outlined"
                    value={name}
                    onChangeText={txt => setName(txt)}
                />
            </View>
            {/* Anh chi tiet */}
            <View style={styles.screenrow}>
                <Text style={styles.title}> Ảnh chi tiết </Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <FlatList
                        data={[]}
                        horizontal={true}
                        style={styles.imageList}
                        renderItem={itemData => (
                            <Card style={styles.imageContainer}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: itemData.item.imagePath }}></Image>
                            </Card>
                        )}
                        ListFooterComponent={
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => console.log('Adddddd')}>
                                <Card style={styles.addImageContainer}>
                                    <AntDesign
                                        style={styles.addIcon}
                                        name="pluscircle"
                                        color={'#9098B1'}
                                        size={40}
                                    />
                                </Card>
                            </TouchableOpacity>
                        }></FlatList>
                </View>

            </View>

            <View style={styles.screenrow}>
                <Text style={styles.title}>Giảm giá (%): </Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <TextInput
                        style={{
                            width: 100,
                            backgroundColor: Colors.backgroundColor
                        }}
                        keyboardType="numeric"
                        mode="outlined"
                        value={sale}
                        onChangeText={txt => setSale(txt)}
                    />
                </View>
            </View>


            {/* end date */}
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Ngày hết hạn: </Text>
                <TextInput
                    disabled="false"
                    style={{ backgroundColor: Colors.backgroundColor }}
                    keyboardType="numeric"
                    mode="outlined"
                    value={date ? showDate(displayDay) : 'Vui lòng chọn ngày'}
                    onChangeText={txt => setDate(txt)}
                />
            </View>
            <View style={styles.calen}>
                <CalendarPicker
                    weekdays={[
                        'Chủ nhật',
                        'Thứ hai',
                        'Thứ ba',
                        'Thứ tư',
                        'Thứ năm',
                        'Thứ sáu',
                        'Thứ bảy',
                    ]}
                    months={[
                        'Tháng Một',
                        'Tháng Hai',
                        'Tháng Ba',
                        'Tháng Tư',
                        'Tháng Năm',
                        'Tháng Sáu',
                        'Tháng Bảy',
                        'Tháng Tám',
                        'Tháng Chín',
                        'Tháng Mười',
                        'Tháng Mười Một',
                        'Tháng Mười Hai',
                    ]}
                    selectYearTitle={'Chọn năm'}
                    selectMonthTitle={'Chọn tháng trong năm '}
                    previousTitle="Trước"
                    nextTitle="Sau"
                    selectedDayColor={Colors.primaryColor}
                    onDateChange={onDateChange}
                />
            </View>

            {/* Chon san pham */}
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Chọn loại sản phẩm: </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        data={categoryList}
                        maxHeight={130}
                        labelField="label"
                        valueField="value"
                        placeholder={'Loại sản phẩm'}
                        value={category}
                        onChange={item => {
                            setValue(item.value);
                        }}
                    />
                </View>

            </View>


            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    contentStyle={styles.buttonText}
                    style={styles.button}
                    color="#40bfff"
                    labelStyle={{ fontSize: 20 }}
                    onPress={null}>
                    Xác nhận
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
    inputContainer: {
        padding: 10,
        flex: 14,
        backgroundColor: Colors.backgroundColor,
    },
    rowContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        color: 'black',
    },
    dropdown: {
        marginTop: 10,
        height: 50,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        backgroundColor: Colors.backgroundColor,
    },
    screenrow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        flex: 1,
    },
    expand: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: '#FF9C40',
    },
    itemList: {
        flex: 4,
    },
    imageList: {
        height: 100,
        marginTop: 10,
        width: '100%',
    },
    imageListContainer: {
        flexDirection: 'row',
    },
    imageContainer: {
        marginHorizontal: 8,
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        width: 90,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    addImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 1,
        height: 100,
        width: 90,
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
        marginTop: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
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
        marginHorizontal: 20,
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
export default BannerScreen;
