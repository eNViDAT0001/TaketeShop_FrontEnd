import React, { useState, useRoute, useEffect } from 'react';
import {
  Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, TextInput,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import { Colors, IconButton, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/UI/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as chanelActions from '../../../store/actions/chanelActions';

const { width, height } = Dimensions.get('window');
function ChatScreen(props) {
  var DATA_MESSAGES = useSelector(state => state.chanel.DATA_MESSAGES);
  //var DATA_MESS = useSelector(state => state.chanel.LIST_CHANEL);
  const [messages, setMessages] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const role = useSelector(state => state.auth.role);
  const userID = useSelector(state => state.auth.userID);
  const flatListRef = React.useRef();
  const chanelId = useSelector(state => state.chanel._id);
  const userChanelId = useSelector(state => state.chanel.userID);
  let state;
  let isStaff = false;
  // useEffect(() => {
   
  // }, [role]);
  if (role != 'CUSTOMER') {
    isStaff = true;
    //console.log("Chat Screen1 :" + chanelId);
  } else {
    //console.log("Chat Screen2");
    dispatch(chanelActions.getMessagerFromChanelId(chanelId));
  }



  const Chats = (item) => {
   
    if (isStaff) {
      (item.userID == userID) ? (state = styles.frowrev) : (state = styles.frow);
    } else {
      (item.userID == userChanelId) ? (state = styles.frowrev) : (state = styles.frow);
    }
    return (
      <View style={[styles.pdlt10, styles.mdtp10, styles.mdbt10, styles.pdtp10, state, styles.jStart]}>
        <View View style={[styles.Chat, (item.userID == userID) ? styles.myChat : styles.frnChat]} >
          <Text style={{ lineHeight: 25 }}>{item.text}</Text>
        </View>

      </View >
    )
  };

  const renderMessages = (item) => {
    return (
      Chats(item)
    )
  };


  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Hỗ trợ khách hàng"></Header>

      <FlatList
        ref={flatListRef}
        data={DATA_MESSAGES}
        extraData={DATA_MESSAGES}
        renderItem={itemData => (renderMessages(itemData.item))}
        keyExtractor={(item, index) => item._id}
        onLayout={() => flatListRef.current.scrollToEnd({ animated: true })}
        //stickyHeaderIndices={[0]}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#D3D3D388', top: 5, marginHorizontal: 8 }}

      />

      <View style={styles.sendChatcontainer}>
        <TextInput
          style={{
            height: 45,
            width: 330,
            backgroundColor: '#e7e7e7',
          }}
          onChangeText={setMessages}
          value={messages}
          placeholder='type your message'
        />
        <IconButton
          icon="send"
          color='#2196f3'
          size={25}
          onPress={() => {
            // console.log(chanelId)
            // console.log(userID)
            // console.log(messages)
            // console.log(isStaff)
            // dispatch(chanelActions.createChanel(113));
            dispatch(chanelActions.addMessager(chanelId, userID, messages, isStaff));
            setMessages("")

          }} />
      </View>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d4d4d4',
  },
  chatScreen: {

  },
  title: {
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Chat: {
    maxWidth: width / 1.5,
    padding: 10,
    marginVertical: 5,

  },
  myChat: {
    backgroundColor: '#aaeedd', borderRadius: 15
  },
  frnChat: {
    backgroundColor: '#aaeeaa', borderRadius: 15
  },

  sendChatcontainer: {
    padding: 10,
    borderTopColor: '#d4d4d4',
    flexDirection: 'row',
    width: 300,
  },
  frow: { flexDirection: 'row' },
  frowrev: { flexDirection: 'row-reverse' },
  jStart: { justifyContent: 'flex-start' },
});
export default ChatScreen;



