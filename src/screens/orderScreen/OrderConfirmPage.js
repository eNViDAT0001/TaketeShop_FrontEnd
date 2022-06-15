import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OrderNotification from '../../components/OrderNotification';

function OrderConfirmPage() {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[1, 2, 3, 4, 5, 2, 3, 4, 5]}
        renderItem={itemData => (
          <OrderNotification></OrderNotification>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});

export default OrderConfirmPage;
