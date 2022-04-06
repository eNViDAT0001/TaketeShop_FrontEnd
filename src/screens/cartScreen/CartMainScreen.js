import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import CartItems from '../../components/CartItems';
import Colors from '../../constants/Colors';
import {ADDRESS_SCREEN} from '../../constants/NavigatorIndex';
const IMAGE_TEMP =
  'https://cms.dmpcdn.com/article/2021/04/02/a1ca8540-936b-11eb-8b27-db7c51a78b67_original.jpg';
function CartMainScreen() {
  const navigation = useNavigation();
  const onConfirmHandler = () => navigation.navigate(ADDRESS_SCREEN);
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Giỏ Hàng</Text>
      </View>
      <View style={styles.cartItemsList}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={itemData => <CartItems></CartItems>}></FlatList>
      </View>
      <View style={styles.cartDetail}>
        <View style={styles.row}>
          <Text style={styles.title}>Items (count)</Text>
          <Text style={styles.value}>Value</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Shipping</Text>
          <Text style={styles.value}>Value</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Import Charges</Text>
          <Text style={styles.value}>Value</Text>
        </View>
        <View style={styles.rowTotal}>
          <Text style={styles.titleTotal}>Total Value</Text>
          <Text style={styles.valueTotal}>Value</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color={Colors.primaryColor}
          labelStyle={{fontSize: 20}}
          onPress={onConfirmHandler}>
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
  header: {
    height: 50,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  cartItemsList: {
    flex: 7,
  },
  cartDetail: {
    flex: 2,
    borderRadius: 5,
    borderColor: '#EBF0FF',
    borderWidth: 2,
    padding: 10,
    paddingTop: 0,
    margin: 15,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
  },
  value: {
    fontSize: 15,
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderTopColor: '#EBF0FF',
    borderTopWidth: 2,
    alignItems: 'center'
  },
  titleTotal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  valueTotal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.iconColor,
  },
  buttonContainer: {
    padding: 10,
    flex: 1,
  },
  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
});

export default CartMainScreen;
