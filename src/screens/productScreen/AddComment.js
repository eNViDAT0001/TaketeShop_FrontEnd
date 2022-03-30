import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function AddCommentScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>AddCommentScreen</Text>

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
export default AddCommentScreen;
