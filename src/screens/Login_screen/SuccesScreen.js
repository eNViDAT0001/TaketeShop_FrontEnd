import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function SuccesScreen(props) {
    const navigation = useNavigation()
    return (

        <View style={styles.screen}
        onTouchEnd ={() => navigation.goback()}  >      
        <View style={styles.container}>
            <Image></Image>
         
          <Text style={styles.title}>Thành công</Text>
          <Text style={styles.thankyou}>Cảm ơn vì đã sử dụng dịch vụ của chúng tôi</Text>
          <Button
            mode="contained"
            contentStyle={styles.buttonText}
            style={styles.button}
            color={Colors.iconColor}
            labelStyle={{fontSize: 20}}
            onPress={() => navigation.navigate(HOME_MAIN_SCREEN)}>
            Trờ về trang chủ
          </Button>
        </View>
      </View>


    );
}
const styles = StyleSheet.create({
    screen: {flex: 1},
    container:{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
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
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#223263',
        marginTop: 10
    },
    thankyou:{
      fontSize: 18,
      marginVertical: 10
    },
  });

export default SuccesScreen;