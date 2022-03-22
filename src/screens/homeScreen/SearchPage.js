import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
function SearchPage(props) {
  return <View style={{... styles.screen, ...props.style}}>
      <Text>{props.keyword}</Text>
  </View>;
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default SearchPage;
