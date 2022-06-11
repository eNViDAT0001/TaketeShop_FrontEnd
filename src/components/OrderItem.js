import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Card from './UI/Card';
function OrderItem(props) {
  return (
    <TouchableOpacity>
      <Card styles={{...styles.container, ...props.style}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}></Image>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}></Text>
          <Text style={styles.quantity}></Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discount}></Text>
            <Text style={styles.price}></Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{},
    imageContainer:{},
    image:{},
    contentContainer:{},
    quantity:{},
    priceContainer:{},
    discount:{},
    price:{},
});
export default OrderItem;
