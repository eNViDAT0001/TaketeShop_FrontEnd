import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import CategoryHolder from '../../components/CategoryHolder';
import Comment from '../../components/Comment';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import {BESTSELLER_DUMMY_DATA} from '../../dummy_database/dummy-data';
// import {Rating} from 'react-native-ratings';
function ProductDetailScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.product;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.name,
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
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Image
            style={styles.slider}
            source={{
              uri: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
            }}></Image>
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
            onPress={props.onCategorySelect}>
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
            itemList={BESTSELLER_DUMMY_DATA}
          />
        </Card>
      </ScrollView>
      <Card style={styles.bottomBar}>
        <Button
          style={styles.bottomButton}
          color={Colors.primaryColor}
          title="Chọn Mua"></Button>
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
    height: '100%',
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
    marginTop: 5,
    borderRadius: 0,
    alignContent: 'stretch',
  },
  bottomButton:{
    flex: 1,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});
export default ProductDetailScreen;
