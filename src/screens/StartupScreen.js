import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {BOTTOM_BAR_NAVIGATOR, LOGIN_NAVIGATOR} from '../constants/NavigatorIndex';

function StartupScreen(props) {
  const navigation = useNavigation();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        navigation.navigate(LOGIN_NAVIGATOR);
        return;
      }

      const transformedData = JSON.parse(userData);

      const {token, userID, expiryDate} = transformedData;

      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userID) {
        navigation.navigate(LOGIN_NAVIGATOR);
        return;
      }

      navigation.navigate(BOTTOM_BAR_NAVIGATOR);
    };

    tryLogin();
  }, []);
  return (
    <View style={styles.screen}>
      <ActivityIndicator
        size={'large'}
        color={Colors.primaryColor}></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartupScreen;
