import React from 'react';
import {Text, View, FlatList} from 'react-native';
import { styles } from 'react-native-element-dropdown/src/TextInput/styles';
import {useSelector, useDispatch} from 'react-redux';
import CartItems from '../../components/CartItems';
const IMAGE_TEMP =
  'https://cms.dmpcdn.com/article/2021/04/02/a1ca8540-936b-11eb-8b27-db7c51a78b67_original.jpg';
function CartMainScreen() {
  return (
    <View style={styles.screen}>
      <FlatList
      style={styles.cartItemsList}
      data={[1, 2, 3, 4, 5]}
      renderItem={itemData => (
          <CartItems></CartItems>
      )}></FlatList>
      <View style={styles.cartDetail}>
        <View style={styles.row}>
          <Text style={styles.title}>Item(count)</Text>
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
        <View style={styles.row}>
          <Text style={styles.title}>Total Value</Text>
          <Text style={styles.value}>Value</Text>
        </View>
      </View>
    </View>
  );
}

export default CartMainScreen;
