import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Searchbar, IconButton} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Colors from '../../constants/Colors';
import SearchPage from './SearchPage';
import HomePage from './HomePage';


function HomeMainScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const Page =
    searchQuery === '' ? <HomePage /> : <SearchPage keyword={searchQuery} />;

  return (
    <View style={styles.screen}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.headerBar}>
              <Searchbar
                style={styles.searchBar}
                placeholder="Nhập để tìm..."
                onChangeText={onChangeSearch}
                value={searchQuery}></Searchbar>
              <IconButton
                icon="cards-heart-outline"
                onPress={() => alert('This is a Message button!')}
                color={Colors.iconColor}
              />
              <IconButton
                icon="bell-outline"
                onPress={() => alert('This is a Notify button!')}
                color={Colors.iconColor}
              />
            </View>
          </View>
        }
        ListFooterComponent={Page}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryColor,
  },
  searchBar: {
    width: '73%',
    height: '100%',
    backgroundColor: Colors.primaryColor,
  },
});

export default HomeMainScreen;
