import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CategoryHolder from '../../components/CategoryHolder';
import CategoryNameHolder from '../../components/CategoryNameHolder';
import {PRODUCT_ITEMS_DUMMY_DATA} from '../../dummy_database/dummy-data';
import {useNavigation} from '@react-navigation/native';
import {CATEGORY_DETAIL_SCREEN} from '../../constants/NavigatorIndex';
import Colors from '../../constants/Colors';

function ShopPage(props) {
  const products = useSelector(state => state.products.availableProducts);
  const [categoryHolder, setCategoryHolder] = useState(
    useSelector(state => state.products.categories)[0],
  );

  const navigation = useNavigation();

  const cagetoryItems = availableProducts => {
    const transformedShopItems = [];
    for (const key in availableProducts) {
      transformedShopItems.push({
        productID: availableProducts[key].productID,
        categoryID: availableProducts[key].categoryID,
        name: availableProducts[key].name,
        price: availableProducts[key].price,
        quantity: availableProducts[key].quantity,
        discount: availableProducts[key].discount,
        discountPrice:
          availableProducts[key].price -
          (availableProducts[key].discount / 100).toFixed(2) *
            availableProducts[key].price,
        unit: availableProducts[key].unit,
        image: availableProducts[key].image[0].image,
        category: availableProducts[key].category,
        provider: availableProducts[key].provider,
        liked: availableProducts[key].liked,
      });
    }
    return transformedShopItems.filter(
      item => item.categoryID === categoryHolder.categoryID,
    );
  };

  const onClickCategoryHandler = category => {
    setCategoryHolder(category);
  };

  return (
    <View style={{...styles.screen, ...props.style}}>
      <CategoryNameHolder
        style={styles.nameHolder}
        onSelect={onClickCategoryHandler}></CategoryNameHolder>
      <CategoryHolder
        onCategorySelect={() =>
          navigation.navigate(CATEGORY_DETAIL_SCREEN, {
            id: categoryHolder.categoryID,
            title: categoryHolder.name,
            type: 'NORMAL',
          })
        }
        style={styles.categoryHolder}
        title={categoryHolder.name}
        horizontal={false}
        numColum={2}
        itemList={cagetoryItems(products).slice(0, 20)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
