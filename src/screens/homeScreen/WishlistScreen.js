import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ShopItems from '../../components/ShopItems';
import Header from '../../components/UI/Header';

function WishlistScreen(props) {
  return (
    <View style={styles.screen}>
      <Header title={'Yêu thích'} back={true}></Header>

    </View>
  );
}
const styles = StyleSheet.create({
  screen: {flex: 1},
});
export default WishlistScreen;
