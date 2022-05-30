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
import { convertWeekToVietnamese, convertMonthToVietnamese } from '../../../../ulti/Ulti';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../../components/UI/Header';
import Colors from '../../../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../../store/actions/auth';
import { Dropdown } from 'react-native-element-dropdown';
import Card from '../../../../components/UI/Card';

function DiscountScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [categoryID, setCategoryID] = useState('');
  const [sale, setSale] = useState('');
  const [membership, setMembership] = useState('');
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
      <Header title="Discount"></Header>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Mã voucher: </Text>
        <TextInput
          label="Nhập mã voucher"          
          style={{ backgroundColor: Colors.backgroundColor }}
          mode="outlined"
          value={name}
          onChangeText={txt => setName(txt)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Mã sản phẩm giảm giá: </Text>
        <TextInput
          label="Mã sản phẩm giảm giá:"        
          style={{ backgroundColor: Colors.backgroundColor }}
          keyboardType="numeric"
          mode="outlined"
          value={categoryID}
          onChangeText={txt => setCategoryID(txt)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Membership: </Text>
        <TextInput
          label="Membership:"         
          style={{ backgroundColor: Colors.backgroundColor }}
          keyboardType="numeric"
          mode="outlined"
          value={membership}
          onChangeText={txt => setMembership(txt)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Giảm giá (%): </Text>
        <TextInput
          label="Nhập tỉ lệ giảm giá"
          style={{ backgroundColor: Colors.backgroundColor }}
          keyboardType="numeric"
          mode="outlined"
          value={sale}
          onChangeText={txt => setSale(txt)}
        />
      </View>

      {/* end date */}
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Ngày hết hạn: </Text>
        <TextInput
          disabled = "false"
          style={{ backgroundColor: Colors.backgroundColor }}
          keyboardType="numeric"
          mode="outlined"
          value= {date ? showDate(displayDay) : 'Vui lòng chọn ngày'}
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
  Daytextcontainer: {
    backgroundColor: Colors.backgroundColor,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
  },
  Daytext: {
    left: 5,
    fontSize: 20,
    color: '#4f5160',
  },
  calen: {
    flex: 14,
  },
  buttonText: {
    height: '100%',
  },
});
export default DiscountScreen;
