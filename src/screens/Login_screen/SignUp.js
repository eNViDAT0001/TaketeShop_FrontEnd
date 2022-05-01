import React,{ useLayoutEffect} from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LOGIN_MAIN_SCREEN } from '../../constants/NavigatorIndex';
import { Dropdown } from 'react-native-element-dropdown';
import CalendarPicker from 'react-native-calendar-picker';
import { convertWeekToVietnamese, convertMonthToVietnamese } from '../../ulti/Ulti';

const dataGender = [
  { label: 'Nam', value: '1' },
  { label: 'Nữ', value: '0' },
];


function SignUpScreen() {
  const navigation = useNavigation()
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [SDT, setSDT] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [showBirth, setShowBirth] = React.useState(false);
  const [displayDay, setDisplayDay] = React.useState([]);

  const onDateChange = async (day) => {
    await setBirthday(day);
  };

  useLayoutEffect(() => {
    setDisplayDay(birthday.toString().split(' '));
  }, [birthday]);

  const checkSignUp = () => {
    if (!username) {
      alert('Vui lòng nhập tên đăng nhập');
    }
    else if (!name) {
      alert("Vui lòng nhập tên định danh");
    }
    else if (!gender) {
      alert("Vui lòng chọn giới tính");
    }
    else if (!birthday) {
      alert("Vui lòng chọn ngày sinh");
    }
    else if (!SDT) {
      alert("Vui lòng nhập số điện thoại");
    }
    else if (!password) {
      alert("Vui lòng nhập mật khẩu");
    }
    else if (!confirmpassword) {
      alert("Vui lòng nhập mật khẩu xác nhận");
    }
    else if (!email) {
      alert("Vui lòng nhập email");
    }
    else if (password !== confirmpassword) {
      alert("Xác nhận mật khẩu không chính xác, vui lòng nhập lại");
    }
    else navigation.navigate('SuccesScreen');
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.maintext}>Đăng ký</Text>
      <ScrollView style={styles.signup}>
        <TextInput
          style={{ marginBottom: 10 }}
          label="Username"
          mode='outlined'
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          style={{ marginBottom: 10 }}
          label="Password"
          mode='outlined'
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />
        <TextInput
          style={{ marginBottom: 10 }}
          label="Confirm password"
          secureTextEntry={true}
          mode='outlined'
          value={confirmpassword}
          onChangeText={confirmpassword => setConfirmpassword(confirmpassword)}
        />
        <TextInput
          style={{ marginBottom: 10 }}
          label="Email"
          mode='outlined'
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={{ marginBottom: 10 }}
          label="Tên định danh "
          mode='outlined'
          value={name}
          onChangeText={name => setName(name)}
        />
        {/* Gender */}
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={dataGender}
          maxHeight={130}
          labelField="label"
          valueField="gender"
          placeholder={'Chọn giới tính...'}
          value={gender}
          onChange={item => {
            setGender(item.dataGender);
          }}
        />
        <TouchableOpacity onPress={() => setShowBirth(!showBirth)}>
          <TextInput
            style={{ marginBottom: 10 }}            
            label={birthday ? `${convertWeekToVietnamese(displayDay[0])} ${displayDay[2]
              }/${convertMonthToVietnamese(displayDay[1])}/${displayDay[3]}`
              : 'Vui lòng chọn ngày'}
            mode='outlined'            
            editable = {false}
            onChangeText={birthday => setBirthday(birthday)}
          />
          {/* Show calendar */}
          {showBirth ?
          (<View >
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
              selectedDayColor={'#4F5160'}
              onDateChange={onDateChange}
            />
          </View>) : null
           
          }
        </TouchableOpacity>

        <TextInput
          style={{ marginBottom: 10 }}
          keyboardType="numeric"
          label="Số điện thoại "
          mode='outlined'
          value={SDT}
          onChangeText={SDT => setSDT(SDT)}
        />
        <TextInput
          style={{ marginBottom: 10 }}
          label="Uri avatar..."
          mode='outlined'
          value={avatar}
          onChangeText={avatar => setAvatar(avatar)}
        />


        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            contentStyle={styles.buttonText}
            style={styles.button}
            color='#4f5160'
            labelStyle={{ fontSize: 20 }}
            onPress={checkSignUp}>
            Đăng ký
          </Button>
        </View>

        <View style={styles.containertext}>
          <Text style={styles.text1}>
            Đã có tài khoản ?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(LOGIN_MAIN_SCREEN)} >
            <Text style={styles.text2}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>


      </ScrollView>



    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fffff',
  },
  containertext: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  text1: {
    marginLeft: 100,
    color: "black",
    fontSize: 20,
  },
  text2: {
    marginLeft: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: "blue",
    fontSize: 20,
  },
  maintext: {
    top: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black'
  },
  signup: {
    top: 10
  },
  hidetext: {
    top: 120,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#9B9B9B',
  },
  dropdown: {
    marginBottom: 10,
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    backgroundColor: '#f6f6f6',
    borderColor: 'black',
    borderRadius: 5,
  },
  placeholderStyle: {
    fontSize: 17,
  },
  selectedTextStyle: {
    fontSize: 18,
  },
  buttonContainer: {
    margin: 5,
    borderRadius: 20,
    color: '#4f5160'
  },
  button: {
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    height: '100%',
  },

  Daytextcontainer: {
    backgroundColor: '#f6f6f6',
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

});

export default SignUpScreen;

