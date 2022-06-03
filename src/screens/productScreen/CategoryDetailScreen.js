import React, { useEffect, useState, useCallback } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import ShopItems from '../../components/ShopItems';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
const BESTSELLER = 'BESTSELLER';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const DATE_CATCH = 'DATE_CATCH';
const data = [
  { label: 'Mua nhiều', value: BESTSELLER },
  { label: 'Giá tăng dần', value: INCREASE },
  { label: 'Giá giảm dần', value: DECREASE },
  { label: 'Ngày đánh bắt', value: DATE_CATCH },
];
function CategoryDetailScreen(props) {
  const dispatch = useDispatch();
  let products = useSelector(state => state.products.availableProducts);
  const id = useRoute().params.id;
  const type = useRoute().params.type;
  const title = useRoute().params.title;
  const [displayProducts, setDisplayProducts] = useState([]);


  useEffect(() => {
    switch(type){
      case "DISCOUNT":{
        return console.log('Discount');
      }
      case "BEST_SELLER":{
        return console.log('Best Seller');
      }
      case "RECOMMENDER":{
        return console.log('Recommender');
      }
      case "BANNER":{
        return console.log('Banner');
      }
      case "CATEGORY":{
        return console.log('Category');
      }
      default:{
        return setDisplayProducts(cloneList(products));
      }
    }

    //Sua cho nay
  }, [title, id]); 



  const cloneList = availableProducts => {
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
    return transformedShopItems;
  };

  const filter = mode => {
    switch (mode) {
      case BESTSELLER: {
        return displayProducts;
      }
      case INCREASE: {
        return displayProducts.sort((a, b) =>
          a.discountPrice > b.discountPrice ? 1 : -1,
        );
      }
      case DECREASE: {
        return displayProducts.sort((a, b) =>
          a.discountPrice < b.discountPrice ? 1 : -1,
        );
      }
      case DATE_CATCH: {
        return displayProducts.sort((a, b) =>
          a.createTime > b.createTime ? 1 : -1,
        );
      }
      default: {
        return displayProducts;
      }
    }
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Header title={title}></Header>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={230}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Lọc...' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <FlatList
        style={styles.itemList}
        horizontal={false}
        numColumns={2}
        data={filter(value)}
        renderItem={itemData => (
          <ShopItems
            item={itemData.item}></ShopItems>
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: Colors.primaryColor,
  },
  expand: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: '#FF9C40',
  },
  itemList: {
    flex: 4,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    backgroundColor: Colors.backgroundColor,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default CategoryDetailScreen;
