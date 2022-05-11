import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect, useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import {useDispatch, useSelector} from 'react-redux';
import CategoryHolder from '../../components/CategoryHolder';
import Comment from '../../components/Comment';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import {COMMENT_SCREEN} from '../../constants/NavigatorIndex';
import PagerView from 'react-native-pager-view';
import * as commentActions from '../../store/actions/comment'
function ProductDetailScreen(props) {
  const route = useRoute();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.availableProducts);
  const comments = useSelector(state => state.comment.productComments);
  const navigation = useNavigation();
  const id = route.params.id;
  const product = products.find(item => item.productID === id);
  console.log(comments)
  const [error, setError] = useState();

  const onCommentPress = () => {
    navigation.navigate(COMMENT_SCREEN, {id: id});
  };

  const loadProducts = useCallback(async () => {
    try {
      await dispatch(commentActions.fetchCommentWithProductID(id))
    } catch (err) {
      setError(err.msg);
    }
  }, [dispatch, setError]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 10,
        left: 0,
        right: 0,
      },
      headerTransparent: true,
      headerRight: () => (
        <View style={styles.headerButtonRight}>
          <IconButton
            icon="cart-outline"
            color={Colors.primaryColor}
            size={20}
            onPress={() => console.log('Cart Cart')}
          />
          <IconButton
            icon="heart-outline"
            color={Colors.primaryColor}
            size={20}
            onPress={() => console.log('Love Love')}
          />
        </View>
      ),
    });
    const willFocusSub = navigation.addListener('focus', loadProducts);

    return willFocusSub;
  });

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
        image: availableProducts[key].image[0].image,
        unit: availableProducts[key].unit,
        category: availableProducts[key].category,
        provider: availableProducts[key].provider,
        liked: availableProducts[key].liked,
      });
    }
    return transformedShopItems;
  };
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
  return (
    <View style={styles.screen}>
      <ScrollView>
        <PagerView
          style={styles.sliderContainer}
          initialPage={0}
          showPageIndicator={true}>
          {product.image.map((item, index) => (
            <View key={index} style={styles.slider}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: item.image,
                }}></Image>
            </View>
          ))}
        </PagerView>
        <View style={styles.title}>
          <Text style={styles.titleText}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <StarRating
              disabled={true}
              starSize={18}
              containerStyle={styles.rating}
              emptyStar={'star'}
              fullStar={'star'}
              halfStar={'star-half'}
              maxStars={5}
              rating={4}
              emptyStarColor={'#EBF0FF'}
              fullStarColor={'#FFDF00'}
            />
            <Text style={styles.ratingCount}>(Đánh giá)</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{product.discountPrice} đ</Text>
            <View style={styles.discountContainer}>
              <Text style={styles.truePriceText}>{product.price} đ</Text>
              <Text style={styles.discountText}> -{product.discount}% </Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descripHeader}>Mô tả sản phẩm</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.commentContainer}>
          <TouchableOpacity activeOpacity={0.9} onPress={onCommentPress}>
            <View style={styles.headerComment}>
              <Text style={styles.titleComment}> Bình luận về sản phẩm</Text>
              <Text style={styles.expandComment}> {'>'} </Text>
            </View>
            {!comments.length? <Text>   Không có bình luận</Text> : <Comment data={comments[0]}></Comment>}
          </TouchableOpacity>
        </View>
        <Card style={styles.cardContainer}>
          <CategoryHolder
            onCategorySelect={() => console.log('click click')}
            style={styles.bestSeller}
            title={'Bạn cũng có thể thích'}
            horizontal={true}
            numColum={1}
            itemList={cloneList(products)}
          />
        </Card>
      </ScrollView>
      <Card style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomText}>Chọn Mua</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  headerButtonRight: {
    flexDirection: 'row',
  },
  sliderContainer: {
    height: 300,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: '100%',
  },
  title: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },

  ratingContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  rating: {
    justifyContent: 'flex-start',
  },
  ratingCount: {
    fontSize: 15,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 5,
  },
  priceContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 5,
  },
  priceText: {
    fontSize: 20,
    color: Colors.accentColor,
    fontWeight: 'bold',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  truePriceText: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountText: {
    fontSize: 18,
    borderColor: Colors.accentColor,
    color: Colors.accentColor,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFCDD2',
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    marginVertical: 5,
    padding: 5,
    width: '100%',
  },
  descripHeader: {
    fontSize: 18,
    marginBottom: 0,
  },
  description: {
    fontSize: 15,
    width: '100%',
    backgroundColor: Colors.backgroundColor,
  },
  cardContainer: {
    marginVertical: 5,
    elevation: 0,
    borderRadius: 0,
  },
  commentContainer: {
    backgroundColor: Colors.backgroundColor,
    marginTop: 5,
  },
  comment: {
    height: '100%',
    width: '100%',
  },
  headerComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleComment: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: Colors.primaryColor,
  },
  expandComment: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: '#FF9C40',
  },
  bottomBar: {
    height: 60,
    padding: 10,
    borderRadius: 0,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    borderWidth: 1,
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ProductDetailScreen;
