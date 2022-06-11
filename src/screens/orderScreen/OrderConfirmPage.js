import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import OrderNotification from '../../components/OrderNotification';

function OrderConfirmPage() {
    return ( <FlatList style={{flex: 1}} data={[1, 2, 3, 4,5]} renderItem={itemData => (<OrderNotification></OrderNotification>)}></FlatList> );
}

const styles = StyleSheet.create({
    
});

export default OrderConfirmPage;