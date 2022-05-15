import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../store/actions/auth';


function ChangePassword(props) {
  const [pass, setPass] = React.useState('');
  const [oldpass, setOldpass] = React.useState('');
  const [newpass, setNewpass] = React.useState('');
  const [confirmpass, setConfirmpass] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userID);
  const token = useSelector(state => state.auth.token);

  const ChangeButton = async () => {
    if (!oldpass) {
      alert('Vui lòng nhập mật khẩu');
    } else if (!newpass) {
      alert('Vui lòng nhập mật khẩu xác nhận');
    } else if (!confirmpass) {
      alert('Vui lòng nhập mật khẩu xác nhận lại mật khẩu');
    } else if (newpass !== confirmpass) {
      alert('Xác nhận mật khẩu không chính xác, vui lòng nhập lại');
    } else if (oldpass == newpass) {
      alert('Mật khẩu mới không được trùng với mật khẩu cũ, vui lòng nhập lại');
    } else try {
      dispatch(authActions.changePassword(userId, token, oldpass, newpass)); 
      navigation.navigate('Profile');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screen}>
      <Header title="Thay đổi mật khẩu"></Header>
      <View style={styles.screen1}>
        <TextInput
          label="Mật khẩu hiện tại"
          placeholder={'Mời nhập mật khẩu hiện tại'}
          style={styles.textinput}
          mode="outlined"
          secureTextEntry={true}
          value={oldpass}
          onChangeText={oldpass => setOldpass(oldpass)}
        />
        <TextInput
          label="Mật khẩu mới"
          placeholder={'Mời nhập mật khẩu mới'}
          style={styles.textinput}
          mode="outlined"
          secureTextEntry={true}
          value={newpass}
          onChangeText={newpass => setNewpass(newpass)}
        />
        <TextInput
          label="Xác nhận mật khẩu mới"
          placeholder={'Xác nhận lại mật khẩu mới'}
          style={styles.textinput}
          mode="outlined"
          secureTextEntry={true}
          value={confirmpass}
          onChangeText={confirmpass => setConfirmpass(confirmpass)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color="#4F5160"
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
  },
  text: {
    fontSize: 30,
    color: 'black',
  },
  textinput: {
    marginVertical: 5,
    backgroundColor: Colors.backgroundColor,
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
    color: '#4f5160',
  },
  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
});
export default ChangePassword;
