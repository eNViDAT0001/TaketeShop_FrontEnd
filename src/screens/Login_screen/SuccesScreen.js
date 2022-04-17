import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';
const IMAGE_TEMP =
  'https://cms.dmpcdn.com/article/2021/04/02/a1ca8540-936b-11eb-8b27-db7c51a78b67_original.jpg';
function SuccesScreen(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <TouchableOpacity activeOpacity={1}
        onPress={() => navigation.navigate('LoginScreen')}>
        <View style={{flex: 1}}>
          <View style={styles.imgcontainer}>
            <Image
              style={styles.imgsc}
              source={{require('../../../assets/images/succes.png')}}
            />
          </View>


          <Text style={styles.title}>Thành công</Text>
          <Text style={styles.thankyou}>Cảm ơn vì đã sử dụng dịch vụ của chúng tôi</Text>
        </View>F
      </TouchableOpacity>
    </View>



  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.backgroundColor },
  imgcontainer: {
    width: '100%',
    height: 200
  },
  imgsc: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    padding: 10,
  },

  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#223263',
    marginTop: 10
  },
  thankyou: {
    fontSize: 18,
    marginVertical: 10
  },
});

export default SuccesScreen;