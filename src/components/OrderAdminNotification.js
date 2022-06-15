import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Button} from 'react-native';
import Card from './UI/Card';
function OrderAdminNotification(props) {
  const [type, setType] = useState({
    confirmVisible: false,
    cancelVisible: false
  })
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <Card styles={{...styles.container, ...props.style}}>
          <Text>Ngày - Mã đơn hàng</Text>
          <Text>Giá</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title='Xác nhận'></Button>
            <Button style={styles.button} title='Hủy'></Button>
          </View>
      </Card>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  button: {
    marginRight: 10
  },
  contentContainer: {},
  quantity: {},
  priceContainer: {},
  discount: {},
  price: {},
});
export default OrderAdminNotification;
