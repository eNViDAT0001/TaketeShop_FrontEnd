import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORY_DETAIL_SCREEN } from '../constants/NavigatorIndex';
import Colors from '../../constants/Colors';
function CategoryDetailScreen(props) {
  return (
    <View style={{...styles.container, ...props.style}}>
      <FlatList
        style={styles.itemList}
        horizontal={false}
        numColumns={2}
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

export default CategoryDetailScreen;
