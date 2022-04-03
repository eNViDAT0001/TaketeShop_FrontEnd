import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../constants/Colors';
import {PRODUCT_DETAIL_SCREEN} from '../constants/NavigatorIndex';
import Card from './UI/Card';

function CartItems(props) {
  const navigation = useNavigation();
  const onItemClick = () =>
    navigation.navigate(PRODUCT_DETAIL_SCREEN, {product: props.item});
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={{...styles.screen, ...props.style}}>
      <Card style={styles.product}>
          <TouchableCmp onPress={onItemClick} useForeground>
            <View>
                
            </View>
          </TouchableCmp>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  product: {
    flex: 1,
    margin: 5,
  },

});

export default CartItems;
