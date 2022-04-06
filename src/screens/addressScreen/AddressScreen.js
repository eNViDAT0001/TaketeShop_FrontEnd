import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Address from '../../components/Address';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
function AddressScreen() {
  return (
    <View style={styles.screen}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={itemData => <Address></Address>}
          ListHeaderComponent={
            <Header title={'Địa Chỉ'}>
              <IconButton
                icon={'plus'}
                color={Colors.iconColor}
                size={26}
                onPress={() => console.log('luv luv')}
              />
            </Header>
          }
          ListFooterComponent={
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                contentStyle={styles.buttonText}
                style={styles.button}
                color={Colors.iconColor}
                labelStyle={{fontSize: 20}}
                onPress={() => console.log('Butttoonn')}>
                Xác nhận
              </Button>
            </View>
          }></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {flex: 1},
  header: {
    height: 50,
    backgroundColor: Colors.primaryColor,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  itemsList: {
    flex: 1,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    padding: 10,
  },
  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
});

export default AddressScreen;
