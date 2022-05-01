import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native';
import {IconButton} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import CategoryHolder from '../../components/CategoryHolder';
import Comment from '../../components/Comment';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import { COMMENT_SCREEN } from '../../constants/NavigatorIndex';
import {BESTSELLER_DUMMY_DATA, PRODUCT_ITEMS_DUMMY_DATA} from '../../dummy_database/dummy-data';
// import {Rating} from 'react-native-ratings';
function ProductDetailScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;

  const onCommentPress = () => {
    navigation.navigate(COMMENT_SCREEN)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerStyle: {
        position: 'relative',
        zIndex: 1,
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
  });

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Image
            style={styles.slider}
            source={{
              uri: 'https://www.thaistreet.com.vn/wp-content/uploads/2021/04/Food.jpg',
            }}
            ></Image>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Product Name</Text>
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
            <Text style={styles.ratingCount}>(Rating Count)</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Product Price đ</Text>
            <View style={styles.discountContainer}>
              <Text style={styles.truePriceText}>Product True Price đ</Text>
              <Text style={styles.discountText}> -Product Discount% </Text>
            </View>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descripHeader}>Description</Text>
          <Text style={styles.description}>
            This is speciasdfsadfsadfdsfdsafdsafdsfdsfdsfdsfdsfdsafsdfdsafsafd
          </Text>
        </View>
        <View style={styles.commentContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={onCommentPress}>
            <View style={styles.headerComment}>
              <Text style={styles.titleComment}> Bình luận về sản phẩm</Text>
              <Text style={styles.expandComment}> {'>'} </Text>
            </View>
            <Comment></Comment>
          </TouchableOpacity>
        </View>
        <Card style={styles.cardContainer}>
          <CategoryHolder
            onCategorySelect={() => console.log('click click')}
            style={styles.bestSeller}
            title={'Bạn cũng có thể thích'}
            horizontal={true}
            numColum={1}
            itemList={PRODUCT_ITEMS_DUMMY_DATA}
          />
        </Card>
      </ScrollView>
      <Card style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton} >
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
    alignItems:'center',
    justifyContent:'center',    
    backgroundColor:Colors.primaryColor,
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
