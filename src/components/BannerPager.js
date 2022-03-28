import React from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import { BANNER_DUMMY_DATA } from '../dummy_database/dummy-data';
import Banner from './UI/Banner';

function BannerPager(props) {

  return (
    <PagerView style={{...props.style}} initialPage={0}>
      {BANNER_DUMMY_DATA.map((banner, index) => (
        <View key={index}>
          <Banner
          title={banner.category}
          image={banner.image}
          discount={banner.discount}
          endTime={banner.endTime}></Banner>
        </View>
      ))}
    </PagerView>
  );
}

export default BannerPager;
