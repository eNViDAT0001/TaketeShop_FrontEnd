import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import Header from '../../components/UI/Header';
import Card from './UI/Card';
function OrderDetailScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <Header title="Thông tin đơn hàng"></Header>
      <View style={styles.statusContainer}>
        <View style={styles.statusTextContainer}>
          <Text style={styles.statusText}></Text>
          <Text style={styles.statusText}></Text>
        </View>
        {/* <Icon></Icon> */}
      </View>
      <Card style={styles.addressContainer}>
        <Text style={styles.title}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
      </Card>
      <Card>
        <FlatList
          ListHeaderComponent={
            <>
              <Text style={styles.title}></Text>
            </>
          }></FlatList>
      </Card>
      <View style={styles.billContainer}>
        <View style={styles.billTitleContainer}>
          <Text style={styles.billTitle}></Text>
          <Text style={styles.billDescriptions}></Text>
        </View>
        <Text style={styles.bill}></Text>
      </View>
      <Card>
        {/* <Icon></Icon> */}
        <View style={styles.paymentContainer}>
          <Text style={styles.title}></Text>
          <Text style={styles.text}></Text>
        </View>
      </Card>
      <Card style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomText}>Chọn Mua</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {},
  statusContainer: {},
  statusTextContainer: {},
  title: {},
  statusText: {},
  addressContainer: {},
  billContainer: {},
  billTitleContainer: {},
  billTitle: {},
  billDescriptions: {},
  bill: {},
  paymentContainer: {},
  bottomBar: {
    height: 60,
    padding: 10,
    borderRadius: 0,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    borderWidth: 1,
  },
});
export default OrderDetailScreen;
