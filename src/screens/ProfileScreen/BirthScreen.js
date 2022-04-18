import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, IconButton, TextInput} from 'react-native-paper';
import FormText from '../accountScreen/FormText';
import CalendarPicker from 'react-native-calendar-picker';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import {convertWeekToVietnamese, convertMonthToVietnamese} from '../../ulti/Ulti'
function BirthScreen(props) {
  const navigation = useNavigation();
  const [date, setDate] = useState('');
  const [displayDay, setDisplayDay] = useState([]);

  const  onDateChange = async (day) => {
    await setDate(day);
  };

  useLayoutEffect(() => {
    setDisplayDay(date.toString().split(' '));

  }, [date])
  
  return (
    <View style={styles.screen}>
      <Header title="Thay đổi ngày sinh"></Header>
      <View style={styles.screen1}>
        <View style={styles.Daytextcontainer}>
          <Text style={styles.Daytext}>
            {date ? `${convertWeekToVietnamese(displayDay[0])} ${displayDay[2]}/${convertMonthToVietnamese(displayDay[1])}/${displayDay[3]}` : 'Vui lòng chọn ngày'}
          </Text>
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
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color="#4F5160"
          labelStyle={{fontSize: 20}}
          onPress={() => navigation.goBack()}>
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
  calen: {
    flex: 14,
  },
  screen1: {
    padding: 10,
    flex: 13,
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
  calendar: {},
  text: {
    fontSize: 40,
    color: 'black',
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
export default BirthScreen;
