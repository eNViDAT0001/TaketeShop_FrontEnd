import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CategoryHolder from '../../components/CategoryHolder';
import Card from '../../components/UI/Card';
import CategoryNameHolder from '../../components/UI/CategoryNameHolder';
import {
  FORYOU_DUMMY_DATA,
  ONSALES_DUMMY_DATA,
} from '../../dummy_database/dummy-data';

function ShopMainScreen(props) {

  const [categoryHolder, setCategoryHolder] = useState('');
  const onClickCategoryHandler = category => {
    setCategoryHolder(category);
  };
  return (
    <View style={styles.screen}>
      <CategoryNameHolder
        style={styles.nameHolder}
        onSelect={onClickCategoryHandler}></CategoryNameHolder>
      <CategoryHolder
        style={styles.categoryHolder}
        title={categoryHolder}
        horizontal={false}
        numColum={2}
        itemList={FORYOU_DUMMY_DATA}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  cardContainer: {
    marginVertical: 5,
    elevation: 0,
    borderRadius: 0,
  },
  nameHolder: {
    flex: 3,
  },
  categoryHolder: {
    flex: 10,
  },
});

export default ShopMainScreen;
