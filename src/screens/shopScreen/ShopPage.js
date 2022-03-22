import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CategoryHolder from '../../components/CategoryHolder';
import CategoryNameHolder from '../../components/CategoryNameHolder';
import {
  FORYOU_DUMMY_DATA,
} from '../../dummy_database/dummy-data';
import { useNavigation } from '@react-navigation/native';
import { CATEGORY_DETAIL_SCREEN } from '../../constants/NavigatorIndex';

function ShopPage(props) {
  const navigation = useNavigation();
  const [categoryHolder, setCategoryHolder] = useState('');
    
  const onSelectedCategory = () => navigation.navigate(CATEGORY_DETAIL_SCREEN);
  const onClickCategoryHandler = category => {
    setCategoryHolder(category);
  };
  return (
    <View style={{... styles.screen, ...props.style}}>
      <CategoryNameHolder
        style={styles.nameHolder}
        onSelect={onClickCategoryHandler}></CategoryNameHolder>
      <CategoryHolder
        onCategorySelect={onSelectedCategory}
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

export default ShopPage;
