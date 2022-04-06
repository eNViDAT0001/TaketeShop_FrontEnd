import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import Header from './UI/Header';
function Address() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.address}>Title</Text>
      <Text style={styles.number}>Title</Text>
      <View style={styles.actionContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color={Colors.primaryColor}
          labelStyle={{fontSize: 15}}
          onPress={() => console.log('Butttoonn')}>
          Sửa
        </Button>
        <IconButton
          icon={'delete-outline'}
          color={'#9098B1'}
          onPress={() => console.log('Butttoonn')}></IconButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#9098B1',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginVertical: 5,
  },
  title: {
      marginVertical: 10,
      fontSize: 17,
      fontWeight: 'bold',
      color: '#223263'
  },
  address: {
    marginVertical: 10,
    fontSize: 15,
  },
  number: {
    marginVertical: 10,
    fontSize: 15,

  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    height: 40,
  },
  buttonText: {
    height: '100%',
  },
});

export default Address;
