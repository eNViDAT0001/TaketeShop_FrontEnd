import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function CommentScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>CommentScreen</Text>

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
export default CommentScreen;
