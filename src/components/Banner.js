import React from 'react';
import {Image, Text, View, ImageBackground, StyleSheet} from 'react-native';
import Countdown from 'react-native-countdown-component';
import Colors from '../constants/Colors';

function Banner(props) {
  return (
    <View style={{...styles.container, ...props.style}}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: props.image,
        }}>
        <View style={styles.description}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.title}>GIẢM  {props.discount}%</Text>
          <Countdown digitStyle={styles.countdownDigit} digitTxtStyle={styles.countdownTxT}></Countdown>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  description: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 30,
    textAlign: 'left',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontSize: 27,
    fontWeight: '900',
    fontFamily: 'open-sans-bold',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 77,

  },
  discount: {},
  countdownDigit: {
    height: "100%",
    width: 40,
    backgroundColor: 'white',
    borderColor: Colors.primaryColor,
    borderWidth: 2
  },
  countdownTxT:{
    color: Colors.primaryColor,
    fontSize: 20
  },
});
export default Banner;
