import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Button, TextInput} from 'react-native-paper';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import {SUCCESS_SCREEN} from '../../constants/NavigatorIndex';
import PickLocation from './PickLocation'

const data = [
  {label: 'Mua nhiều', value: 'BESTSELLER'},
  {label: 'Giá tăng dần', value: 'INCREASE'},
  {label: 'Giá giảm dần', value: 'DECREASE'},
  {label: 'Ngày đánh bắt', value: 'DATE_CATCH'},
];
function AddAddressPage() {

  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  
  useEffect(() => {
    // First-load logic
  }, []);

  function onCitySelect(option) {
    // Logic khi chọn Tỉnh/Thành
  }

  function onDistrictSelect(option) {
    // Logic khi chọn Phường/Xã
  }

  function onWardSelect(option) {
    // Logic khi chọn Quận/Huyện
  }
  return (
    <View style={styles.screen}>
      <Header title={'Thêm địa chỉ'}></Header>
      <View style={styles.inputContainer}>
        <View style={styles.containerStyle}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={230}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Tỉnh/Thành Phố' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.containerStyle}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={230}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Quận/Huyện' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.containerStyle}>
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={230}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Phường/Xã' : '...'}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <TextInput
          style={styles.address}
          label={'Địa chỉ'}
          mode="outlined"
          selectionColor={Colors.primaryColor}
          activeOutlineColor={Colors.primaryColor}
          outlineColor={Colors.primaryColor}
          underlineColorAndroid={Colors.primaryColor}
          colo></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color={Colors.iconColor}
          labelStyle={{fontSize: 20}}
          onPress={() => navigation.navigate(SUCCESS_SCREEN)}>
          Xác nhận
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  inputContainer: {
    padding: 10,
    flex: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    backgroundColor: Colors.backgroundColor,
    marginTop: 20,
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
  input: {
    backgroundColor: Colors.backgroundColor,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
  },
  address: {
    backgroundColor: Colors.backgroundColor,
    marginTop: 10,
  },
  buttonContainer: {
    padding: 10,
    flex: 1,
    alignContent: 'flex-end',
    flex: 1,
  },
  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
});

export default AddAddressPage;
