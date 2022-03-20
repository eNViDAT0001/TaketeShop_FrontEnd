import React, {useEffect, useLayoutEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import CategoryHolder from '../../components/CategoryHolder';
import {Searchbar, IconButton} from 'react-native-paper';
import {TITLE_SIZE} from '../../constants/fontsize';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/UI/Card';
import Banner from '../../components/UI/Banner';
import {
  BANNER_DUMMY_DATA,
  PRODUCT_DUMMY_DATA,
  ONSALES_DUMMY_DATA,
  BESTSELLER_DUMMY_DATA,
  FORYOU_DUMMY_DATA,
} from '../../dummy_database/dummy-data';
import BannerPager from '../../components/BannerPager';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../constants/Colors';
import SearchPage from './SearchPage';

function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  useLayoutEffect(err => {
    navigation.setOptions({
      title: '',
      color: 'black',
      headerTitle: () => (
        <View style={styles.headerBar}>
          <Searchbar
            style={styles.searchBar}
            placeholder="Nhập để tìm..."
            onChangeText={onChangeSearch}
            value={searchQuery}></Searchbar>
            <IconButton
              icon="facebook-messenger"
              onPress={() => alert('This is a Message button!')}
              color={Colors.iconColor}
            />
            <IconButton
              icon="bell"
              onPress={() => alert('This is a Notify button!')}
              color={Colors.iconColor}
            />
        </View>
      ),
      headerStyle: styles.header,
    });
  });
  if (searchQuery != '') {
    return <SearchPage keyword={searchQuery} />;
  }
  return (
    <View style={styles.screen}>
      <FlatList
        ListHeaderComponent={<BannerPager style={styles.banner}></BannerPager>}
        ListFooterComponent={
          <View>
            <View style={styles.container}>
              <Card style={styles.cardContainer}>
                <CategoryHolder
                  style={styles.bestSeller}
                  title={'Giảm giá'}
                  horizontal={true}
                  numColum={1}
                  itemList={ONSALES_DUMMY_DATA}
                />
              </Card>
              <Card style={styles.cardContainer}>
                <CategoryHolder
                  style={styles.bestSeller}
                  title={'Bán chạy'}
                  horizontal={true}
                  numColum={1}
                  itemList={BESTSELLER_DUMMY_DATA}
                />
              </Card>
              <Card style={styles.cardContainer}>
                <CategoryHolder
                  style={styles.forYou}
                  title={'Dành cho bạn'}
                  horizontal={false}
                  numColum={2}
                  itemList={FORYOU_DUMMY_DATA}
                />
              </Card>
            </View>
          </View>
        }></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primaryColor,
  },
  headerBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  searchBar: {
    width: '73%',
    height: '100%',
    backgroundColor: Colors.primaryColor,
  },
  iconHeader: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.primaryColor,
  },

  banner: {
    height: 200,
  },
  cardContainer: {
    marginVertical: 5,
    elevation: 0,
    borderRadius: 0,
  },
  bestSeller: {
    height: '300%',
  },
  onSales: {
    height: '300%',
  },
  forYou: {
    height: '100%',
  },
});

export default HomeScreen;
