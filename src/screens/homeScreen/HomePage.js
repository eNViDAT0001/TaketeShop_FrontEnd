import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Button} from 'react-native';
import CategoryHolder from '../../components/CategoryHolder';
import Card from '../../components/UI/Card';
import {PRODUCT_ITEMS_DUMMY_DATA} from '../../dummy_database/dummy-data';
import BannerPager from '../../components/BannerPager';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {CATEGORY_DETAIL_SCREEN} from '../../constants/NavigatorIndex';
import {useDispatch, useSelector} from 'react-redux';
import * as productActions from '../../store/actions/products';
import * as bannerActions from '../../store/actions/banner';
function HomePage(props) {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();


  const loadProducts = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(bannerActions.fetchBanner());
      await dispatch(productActions.fetchProducts());
      // await dispatch(productActions.fetchCategory());
    } catch (err) {
      setError(err.msg);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = navigation.addListener('focus', loadProducts);

    return willFocusSub
  }, [loadProducts]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then(() => {
    setIsLoading(false);
    });
  }, [dispatch, loadProducts]);

  const onSelectedCategory = (id, type) =>
    navigation.navigate(CATEGORY_DETAIL_SCREEN, {categoryID: id, type: type});

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Có lỗi, vui lòng thử lại</Text>
        <Button
          title="Thử lại"
          onPress={loadProducts}
          color={Colors.primaryColor}
        />
      </View>
    );
  }

  // if (isLoading) {
  //   return (
  //     <View style={styles.centered}>
  //       <ActivityIndicator size="large" color={Colors.primaryColor} />
  //     </View>
  //   );
  // }

  // if (!isLoading && products.length === 0) {
  //   return (
  //     <View style={styles.centered}>
  //       <Text>Không tìm thấy sản phẩm!</Text>
  //     </View>
  //   );
  // }
  const onSales = ((availableProducts) => {
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
          (availableProducts[key].discount / 100).toFixed(2) * availableProducts[key].price,
        image: availableProducts[key].image[0],
        category: availableProducts[key].category,
        provider: availableProducts[key].provider,
        liked: availableProducts[key].liked,
      });
    }
    return transformedShopItems.sort((a, b) =>
      a.discount < b.discount ? 1 : -1,
    );
  });
  const bestSeller = null;
  const forYou = null;

  return (
    <View>
      <BannerPager
        style={styles.banner}
        onBannerPress={onSelectedCategory}></BannerPager>
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <CategoryHolder
            onRefresh={loadProducts}
            onCategorySelect={onSelectedCategory}
            refreshing={isRefreshing}
            style={styles.bestSeller}
            title={'Giảm giá'}
            horizontal={true}
            numColum={1}
            itemList={onSales(products).slice(0, 20)}
          />
        </Card>
        <Card style={styles.cardContainer}>
          <CategoryHolder
            onRefresh={loadProducts}
            onCategorySelect={onSelectedCategory}
            refreshing={isRefreshing}
            style={styles.bestSeller}
            title={'Bán chạy'}
            horizontal={true}
            numColum={1}
            itemList={PRODUCT_ITEMS_DUMMY_DATA}
          />
        </Card>
        <Card style={styles.cardContainer}>
          <CategoryHolder
            onRefresh={loadProducts}
            onCategorySelect={onSelectedCategory}
            refreshing={isRefreshing}
            style={styles.forYou}
            title={'Dành cho bạn'}
            horizontal={false}
            numColum={2}
            itemList={PRODUCT_ITEMS_DUMMY_DATA}
          />
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
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
