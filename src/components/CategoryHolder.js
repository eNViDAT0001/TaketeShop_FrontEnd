import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import ShopItems from './ShopItems';
function CategoryHolder(props) {
  return (
    <View style={{...styles.container, ...props.style}}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => console.log("touch touch touch")}>
        <View style={styles.header}>
          <Text style={styles.title}> {props.title}</Text>
          <Text style={styles.expand}>Xem thêm... </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        style={styles.itemList}
        horizontal={props.horizontal}
        numColumns={props.numColum}
        data={props.itemList}
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
});

export default CategoryHolder;
