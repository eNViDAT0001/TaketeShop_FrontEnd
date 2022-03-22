import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SearchPage from '../homeScreen/SearchPage';
import ShopPage from './ShopPage';
import Colors from '../../constants/Colors';
import { Searchbar } from 'react-native-paper';

function ShopMainScreen(props) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const Page =
    searchQuery === '' ? <ShopPage style={styles.page}/> : <SearchPage style={styles.page} keyword={searchQuery} />;

  return (
    <View style={styles.screen}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Nhập để tìm..."
        onChangeText={onChangeSearch}
        value={searchQuery}></Searchbar>
       {Page}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  page: {
    flex: 23,
    height: '100%',
    width: '100%',
  },
  searchBar: {
    flex: 2,
    width: '100%',
    height: '100%',
    borderRadius: 0,
    backgroundColor: Colors.primaryColor,
  },
});

export default ShopMainScreen;
