import React, { useLayoutEffect } from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import CategoryHolder from '../../components/CategoryHolder';
import {TITLE_SIZE} from '../../constants/fontsize';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../../components/UI/Card';
import Banner from '../../components/UI/Banner';
import {
  BANNER_DUMMY_DATA,
  PRODUCT_DUMMY_DATA,
} from '../../dummy_database/dummy-data';
import BannerPager from '../../components/BannerPager';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Homeee'
    });
  },)
  return (
    <View style={styles.screen}>
      <FlatList
        ListHeaderComponent={
          <BannerPager
            style={styles.banner}
            bannerList={BANNER_DUMMY_DATA}></BannerPager>
        }
        ListFooterComponent={
          <View>
            <View style={styles.container}>
              <Card style={styles.cardContainer}>
                <CategoryHolder
                  style={styles.bestSeller}
                  title={'Giảm giá'}
                  horizontal={true}
                  numColum={1}
                  itemList={PRODUCT_DUMMY_DATA}
                />
              </Card>
              <Card style={styles.cardContainer}>
                <CategoryHolder
                  style={styles.bestSeller}
                  title={'Bán chạy'}
                  horizontal={true}
                  numColum={1}
                  itemList={PRODUCT_DUMMY_DATA}
                />
              </Card>
              <Card style={styles.cardContainer}>
                <CategoryHolder
                  style={styles.forYou}
                  title={'Dành cho bạn'}
                  horizontal={false}
                  numColum={2}
                  itemList={PRODUCT_DUMMY_DATA}
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
