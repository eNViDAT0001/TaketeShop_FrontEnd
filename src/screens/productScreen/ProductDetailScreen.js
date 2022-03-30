import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Button} from 'react-native';
import {IconButton} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

function ProductDetailScreen(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const product = route.params.product;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.name,
      headerStyle: {
        position: 'relative',
        zIndex: 10,
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
          <Text>Product Name</Text>
          <Text>Product Rating</Text>
          <View style={styles.price}>
            <Text>Product Price</Text>
            <Text>Product True Price</Text>
            <Text>Product Discount</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text>Description Container</Text>
        </View>
        <View style={styles.commandContainer}>
          <Text>Command</Text>
        </View>
        <View style={styles.ForYouContainer}>
          <Text>Bạn có thể thích</Text>
        </View>
      </ScrollView>
      <Card style={styles.bottomBar}>
        <Button style={styles.bottomButton} color={Colors.primaryColor} title="Chọn Mua"></Button>
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
  price: {
    flexDirection: 'row',
  },
  bottomBar:{
    height: 60,
    padding: 10,
    borderRadius: 0,
  },
});
export default ProductDetailScreen;
