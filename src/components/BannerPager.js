import React from 'react';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import Banner from './UI/Banner';

function BannerPager(props) {
  return (
    <PagerView style={{...props.style}} initialPage={0}>
      {props.bannerList.map((banner, index) => (
        <View key={index}>
          <Banner
          title={banner.category}
          image={banner.image}
          discount={props.discount}
          endTime={banner.endTime}></Banner>
        </View>
      ))}
    </PagerView>
  );
}

export default BannerPager;
