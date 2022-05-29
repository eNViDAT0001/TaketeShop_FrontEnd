import React, { useState, useRoute } from 'react';
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
  const [messages, setMessages] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const role = useSelector(state => state.auth.role);
  const userID = useSelector(state => state.auth.userID);
  const chanelId = useSelector(state => state.chanel._id);
  const userChanelId = useSelector(state => state.chanel.userID);
  //const [isFetching, setIsFetching] = useState(false);

  let isStaff = false;
  if (role != 'CUSTOMER') {
    isStaff = true;
  };


  const Chats = (item) => {
    //var state = item.sender === "Me"
    var state;
    if (isStaff) {
      (item.userID == userID) ? (state = styles.frowrev) : (state = styles.frow);
    } else {
      (item.userID == userID) ? (state = styles.frow) : (state = styles.frowrev);
    }
    return (
      <View style={[styles.pdlt10, styles.mdtp10, styles.mdbt10, styles.pdtp10, state, styles.jStart]}>
        <View style={[styles.Chat, (item.userID == userID) ? styles.myChat : styles.frnChat]} >
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
  const flatListRef = React.useRef();

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Hỗ trợ khách hàng"></Header>

      <FlatList
        // data={DATA_MESSAGES}
        ref={flatListRef}
        data={useSelector(state => state.chanel.DATA_MESSAGES)}
        extraData ={DATA_MESSAGES}
        //onRefresh = {useSelector(state => state.chanel.DATA_MESSAGES)}  
        //refreshing={useSelector(state => state.chanel.DATA_MESSAGES)}
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
            if (messages != "") {
              // console.log(chanelId)
              // console.log(userID)
              // console.log(messages)
              // console.log(isStaff)
              dispatch(chanelActions.createChanel(113));    
             // dispatch(chanelActions.addMessager(chanelId, userID, messages, isStaff));
              // dispatch(chanelActions.getMessagerFromChanelId(chanelId)).
              setMessages("")
            }
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



