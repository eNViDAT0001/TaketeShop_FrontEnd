import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CategoryHolder from '../../components/CategoryHolder';

function ShopMainScreen(props) {
  return (
    <FlatList
      renderItem={itemData => <CategoryHolder></CategoryHolder>}></FlatList>
  );
}

export default ShopMainScreen;
