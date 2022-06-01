import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartItems from '../../components/CartItems';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import {ADDRESS_SCREEN} from '../../constants/NavigatorIndex';
import * as cartActions from '../../store/actions/cart';

function CartMainScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const userID = useSelector(state => state.auth.userID);
  const onConfirmHandler = () => navigation.navigate(ADDRESS_SCREEN);

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const loadCartItems = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(cartActions.fetchCartWithUserID(userID));
    } catch (err) {
      setError(err.msg);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);
  useLayoutEffect(() => {
    return navigation.addListener('focus', loadCartItems);
  }, [loadCartItems]);
  useEffect(() => {
    setIsLoading(true);
    loadCartItems().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadCartItems]);
  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Có lỗi, vui lòng thử lại</Text>
        <Button
          title="Thử lại"
          onPress={loadProducts}
          color={Colors.primaryColor}
        />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={'Giỏ hàng'} back={true}>
        <IconButton
          icon="bell-outline"
          onPress={() => console.log('Check all')}
          color={Colors.iconColor}
        />
      </Header>
      {cartItems.length ? (
        <>
          <View style={styles.cartItemsList}>
            <FlatList
              onRefresh={loadCartItems}
              refreshing={isRefreshing}
              keyExtractor={(item, index) => item.id}
              data={cartItems}
              renderItem={itemData => (
                <CartItems item={itemData.item}></CartItems>
              )}></FlatList>
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
        </>
      ) : (
        <View style={styles.cartItemsList}>
          <View style={styles.centered}>
            <Text>Hiện đang không có sản phẩm nào trong giỏ hàng</Text>
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
    alignItems: 'center',
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
