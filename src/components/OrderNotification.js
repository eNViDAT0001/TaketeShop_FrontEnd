import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import Card from './UI/Card';
function OrderNotification(props) {
  const [type, setType] = useState({
    confirmVisible: false,
    cancelVisible: false,
  });
  return (
    <View style={{...styles.container, ...props.style}}>
      <TouchableOpacity activeOpacity={0.9}>
        <Card style={styles.notificationContainer}>
          <Text style={styles.text}>Ngày - Mã đơn hàng</Text>

          <View style={styles.buttonContainer}>
            <Text style={styles.textPrice}>Giá</Text>
            <Button
              style={styles.button}
              color={'#CD5C5C'}
              title="Hủy Đơn Hàng"></Button>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notificationContainer: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
  },
  button: {},
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    justifyContent: 'space-between',
  },
});
export default OrderNotification;
