import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, IconButton, TextInput} from 'react-native-paper';
import FormText from '../accountScreen/FormText';
import CalendarPicker from 'react-native-calendar-picker';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';

function BirthScreen(props) {
  const navigation = useNavigation();
  const [StartDate, setStartDate] = React.useState('');

<<<<<<< HEAD
  const onDateChange = date => {
    setStartDate(date);
  };
  return (
    <View style={styles.screen}>
      <Header title="Thay đổi ngày sinh"></Header>
      <View style={styles.screen1}>
        <View style={styles.Daytextcontainer}>
          <Text style={styles.Daytext}>
            {StartDate ? StartDate.toString() : 'Vui lòng chọn ngày'}
          </Text>
=======
    const onDateChange = (date) => {
        setStartDate(date);
    }
    return (
        <View style={styles.screen}>
            <Header title="Thay đổi ngày sinh"></Header>
            <View style={styles.screen1}>

                <View style={styles.Daytextcontainer}>
                    <Text style={styles.Daytext}>
                        {StartDate ? StartDate.toString() : 'Vui lòng chọn ngày'}
                    </Text>
                </View>

                <View style={styles.calen}>
                    <CalendarPicker
                        onDateChange={onDateChange}
                        weekdays={
                            [
                                'Thứ 2',
                                'Thứ 3',
                                'Thứ 4',
                                'Thứ 5',
                                'Thứ 6',
                                'Thứ 7',
                                'Chủ nhật'
                            ]}
                        months={[
                            'Tháng 1',
                            'Tháng 2',
                            'Tháng 3',
                            'Tháng 4',
                            'Tháng 5',
                            'Tháng 6',
                            'Tháng 7',
                            'Tháng 8',
                            'Tháng 9',
                            'Tháng 10',
                            'Tháng 11',
                            'Tháng 12',
                        ]}
                        previousTitle="Tháng trước"
                        nextTitle="Tháng tiếp theo"
                        todayBackgroundColor="#2196f3"
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    contentStyle={styles.buttonText}
                    style={styles.button}
                    color='#4F5160'
                    labelStyle={{ fontSize: 20 }}
                    onPress={() => navigation.goBack()}>
                    Confirm
                </Button>
            </View>
>>>>>>> Account
        </View>

        <View style={styles.calen}>
          <CalendarPicker
            weekdays={[
              'Thứ hai',
              'Thứ ba',
              'Thứ tư',
              'Thứ năm',
              'Thứ sáu',
              'Thứ bảy',
              'Chủ nhật',
            ]}
            months={[
              'Tháng một',
              'Tháng hai',
              'Tháng ba',
              'Tháng tư',
              'Tháng năm',
              'Tháng 6',
              'Tháng 7',
              'Tháng 8',
              'Tháng 9',
              'Tháng 10',
              'Tháng 11',
              'Tháng 12',
            ]}
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
          Confirm
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  screen: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  calen: {
    flex: 14,
  },
  screen1: {
    padding: 10,
    flex: 14,
  },
  Daytextcontainer: {
    backgroundColor: Colors.backgroundColor,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
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
=======
    screen: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    calen: {
        top : 40,
        flex: 14,
    },
    screen1: {
        top : 30,
        padding: 10,
        flex: 14,
    },
    Daytextcontainer: {
        
        backgroundColor: '#e7e7e7',
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        justifyContent: 'center'
    },
    Daytext: {
        left: 5,
        fontSize: 20,
        color: '#4f5160',
    },
    calendar: {

    },
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
>>>>>>> Account

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
export default BirthScreen;
