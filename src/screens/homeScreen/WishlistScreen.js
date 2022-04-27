import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ShopItems from '../../components/ShopItems';
import Header from '../../components/UI/Header';

function WishlistScreen(props) {
  const wishlist = useSelector(state => state.products.wishlistProducts);

  if (!wishlist.length) {
    return (
      <View style={styles.screen}>
        <Header title={'Yêu thích'} ></Header>

        <View style={styles.centered}>
          <Text>Trống</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={'Yêu thích'} ></Header>
      <FlatList
        keyExtractor={(item, index) => item.productID}
        style={styles.itemList}
        numColumns={2}
        data={wishlist}
        renderItem={itemData => (
          <ShopItems item={itemData.item}></ShopItems>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  screen: {flex: 1},
});
export default WishlistScreen;
