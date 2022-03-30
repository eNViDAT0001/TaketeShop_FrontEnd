import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {FORYOU_DUMMY_DATA} from '../../dummy_database/dummy-data';
import ShopItems from '../../components/ShopItems';
import Colors from '../../constants/Colors';
import {removeVietnameseTones} from '../../ulti/Ulti';
function SearchPage(props) {
  
  return (
    <View style={{...styles.screen, ...props.style}}>
      <FlatList
        keyExtractor={(item, index) => item.productID}
        style={styles.itemList}
        numColumns={2}
        data={FORYOU_DUMMY_DATA.filter(item =>
          removeVietnameseTones(item.name)
            .toLowerCase()
            .includes(props.keyword.toLowerCase()),
        )}
        extraData={props.keyword}
        refreshing={true}
        renderItem={itemData => (
          <ShopItems
            item={itemData.item}
            onSelect={() => console.log(itemData.item.name)}></ShopItems>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  itemList: {
    flex: 1,
  },
});

export default SearchPage;
