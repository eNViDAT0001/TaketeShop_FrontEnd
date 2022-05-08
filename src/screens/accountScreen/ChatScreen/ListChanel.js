import React, { useState, useEffect, componentdiv } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Form1 from '../../accountScreen/Form';
import { TextInput, Button, Colors, IconButton } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import Header from '../../../components/UI/Header';
import { useSelector, useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as authActions from '../../../store/actions/auth'
import * as chanelActions from '../../../store/actions/chanelActions';
import { Form } from 'formik';

function ListChanel() {
  var ALL_LIST_CHANEL = useSelector(state => state.chanel.LIST_CHANEL);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const Chats = (item) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            dispatch(chanelActions.getChanel(item.userID));
            dispatch(chanelActions.getMessagerFromChanelId(item._id));
            navigation.navigate('ChatScreen');
          }}>
          <View style={styles.titleContainer}>
            <MaterialCommunityIcons
              name="account"
              color={Colors.iconColor}
              size={40}
            />
            <Text> UserID : {item.userID}</Text>
            <View style={styles.expandContainer}>
              <Text>Nhắn tin</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                color={Colors.iconColor}
                size={40}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>

    )
  };

  const renderMessages = (item) => {
    return (
      Chats(item)
    )
  };
  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Danh sách hỗ trợ khách hàng"></Header>

      <FlatList
        data={ALL_LIST_CHANEL}
        extraData={ALL_LIST_CHANEL}
        renderItem={itemData => (renderMessages(itemData.item))}
        keyExtractor={(item, index) => item._id}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#D3D3D388', top: 5, marginHorizontal: 8 }}

      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d4d4d4',
  },
  container: {
    borderRadius: 20,
    margin: 10,
    flex: 1,
    backgroundColor: '#ffff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    flex: 1,
  },
  expandContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text1: {
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'open-sans-bold',
    textShadowRadius: 1,
    alignItems: 'flex-start',
  },
  text2: {
    left: 5,
    fontSize: 15,
    fontWeight: '900',
    fontFamily: 'open-sans-bold',
    textShadowRadius: 1,
    alignItems: 'flex-start',
  },
});
export default ListChanel;
