import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import CategoryHolder from '../../components/CategoryHolder';
import Card from '../../components/UI/Card';
import {

  ONSALES_DUMMY_DATA,
  BESTSELLER_DUMMY_DATA,
  FORYOU_DUMMY_DATA,
} from '../../dummy_database/dummy-data';
import BannerPager from '../../components/BannerPager';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { CATEGORY_DETAIL_SCREEN } from '../../constants/NavigatorIndex';
function HomePage() {

  const categoryClick = () => useNavigation().navigate(CATEGORY_DETAIL_SCREEN);
  
  return (
    <View>
    <BannerPager style={styles.banner}></BannerPager>
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <CategoryHolder
          onCategorySelect={useNavigation().navigate(CATEGORY_DETAIL_SCREEN)}
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
  );
}
const styles = StyleSheet.create({
    header: {
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
export default HomePage;
