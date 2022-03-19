import {View, Text} from 'react-native';
import React from 'react';
function SearchPage(props) {
  return <View>
      <Text>{props.keyword}</Text>
  </View>;
}

export default SearchPage;
