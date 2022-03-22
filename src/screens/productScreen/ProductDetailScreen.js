import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ProductDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>DetailScreen</Text>

    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  category: {},
});
export default ProductDetailScreen;
