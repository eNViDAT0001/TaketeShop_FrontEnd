import React, { useState } from 'react';
import {Dropdown} from 'react-native-element-dropdown'
import {StyleSheet, FlatList, View, Text} from 'react-native';

import Colors from '../../constants/Colors';
import ShopItems from '../../components/ShopItems';
import { ONSALES_DUMMY_DATA } from '../../dummy_database/dummy-data';
const INCREASE = '1';
const DECREASE = '2';
const DATE_CATCH = '3';
const data = [
  { label: 'Giá tăng dần', value: INCREASE },
  { label: 'Giá giảm dần', value: DECREASE },
  { label: 'Ngày đánh bắt', value: DATE_CATCH },
];
function CategoryDetailScreen(props) {

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{...styles.container, ...props.style}}>
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={180}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Lọc...' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      <FlatList
        style={styles.itemList}
        horizontal={false}
        numColumns={2}
        data={ONSALES_DUMMY_DATA}
        renderItem={itemData => (
          <ShopItems
            item={itemData.item}
            onSelect={() => console.log(itemData.item.name)}></ShopItems>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: Colors.primaryColor,
  },
  expand: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: '#FF9C40',
  },
  itemList: {
    flex: 4,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    backgroundColor: Colors.backgroundColor,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default CategoryDetailScreen;
