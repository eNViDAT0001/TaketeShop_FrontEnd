import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/UI/Header';
import Colors from '../../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../../store/actions/auth';
import {Dropdown} from 'react-native-element-dropdown';
import Card from '../../../components/UI/Card';

function DiscountScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [discountID, setDiscountID] = useState('');
  const [sale1, setSale1] = useState();
  const [sale2, setSale2] = useState();

  return (
    <ScrollView style={styles.screen}>
      <Header title="Discount"></Header>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Tên Discount: </Text>
        <TextInput
          label="Nhập tên Discount"
          placeholder={'Mời nhập tên Discount'}
          style={{backgroundColor: Colors.backgroundColor}}
          mode="outlined"
          value={name}
          onChangeText={txt => setName(txt)}
        />
     </View>     

     <View style={styles.inputContainer}>
        <Text style={styles.title}>Mã Discount: </Text>
        <TextInput
          label="Nhập mã Discount"
          placeholder={'Mời nhập mã Discount'}
          style={{backgroundColor: Colors.backgroundColor}}
          keyboardType = "numeric"
          mode="outlined"
          value={discountID}
          onChangeText={txt => setDiscountID(txt)}
        />
     </View>     

     <View style={styles.inputContainer}>
        <Text style={styles.title}>Giảm giá (%): </Text>
        <TextInput
          label="Nhập tỉ lệ giảm giá"          
          style={{backgroundColor: Colors.backgroundColor}}
          keyboardType = "numeric"
          mode="outlined"
          value={sale1}
          onChangeText={txt => setSale1(txt)}
        />
     </View>   

     <View style={styles.inputContainer}>
        <Text style={styles.title}>Giảm giá (đ): </Text>
        <TextInput
          label="Nhập số tiền giảm giá"         
          style={{backgroundColor: Colors.backgroundColor}}
          mode="outlined"
          value={sale2}
          onChangeText={txt => setSale2(txt)}
        />
     </View>   
    
  
    

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color="#40bfff"
          labelStyle={{fontSize: 20}}
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
    margin:5,
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
export default DiscountScreen;
