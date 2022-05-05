import React, { useState, useRoute } from 'react';
import {
  Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, TextInput,
  FlatList,
  Dimensions
} from 'react-native'
import { Colors, IconButton, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/UI/Header';
import { useDispatch, useSelector } from 'react-redux';
import * as chanelActions from '../../../store/actions/chanelActions';


const { width, height } = Dimensions.get('window');
function ChatScreen(props) {
  const [value, setValue] = useState(null);
  const [messages, setMessages] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const chanelId = useSelector(state => state.chanel._id);
  const userChanelId = useSelector(state => state.chanel.userId);
  const userId = useSelector(state => state.auth.userID);
  const isStaff = (userId == userChanelId ? false : true); 
  
  //setValue(useSelector(state => state.chanel.chanelId));

  const DATA_MESSAGES = [
    {
      id: 0, frnName: 'Shuja Khalid', chats: [
        { id: 1, text: userChanelId, sender: 'Shuja Khalid' },
        { id: 1, text: "value", sender: 'Me' },
        { id: 1, text: 'To style the header in React Navigation use a header object inside the navigationOptions object', sender: 'Shuja Khalid' },
      ]
    }
  ]
  const DATA_MESSAGES1 = [
    {
      _id: "62735cd32e26a5e0838ffb11",
      chanelId: "62733b142e26a5e0838ffab0",
      userId: 4,
      text: "2",
      isStaff: false,
      createAt: "2022-05-05T13:39:23.667Z",
    },
    {
      _id: "62736b932cd94da29484357d",
      chanelId: "62736b262cd94da29484357a",
      userId: 5,
      text: "3",
      isStaff: false,
      createAt: "2022-05-05T13:41:55.562Z",
    },
    {
      _id: "62736b932cd94da29484357d",
      chanelId: "62736b262cd94da29484357a",
      userId: 5,
      text: "he",
      isStaff: false,
      createAt: "2022-05-05T13:49:36.754Z",
    }
  ]

  const Chats = ({ item }) => {
    var state = item.sender === "Me"
    //var state = item.userId === userChanelId
    return (
      <View style={[styles.pdlt10, styles.mdtp10, styles.mdbt10, styles.pdtp10, item.sender === "Me" ? styles.frowrev : styles.frow, styles.jStart]}>
      {/* </View>/<View style={[styles.pdlt10, styles.mdtp10, styles.mdbt10, styles.pdtp10, userChanelId === userId ? styles.frowrev : styles.frow, styles.jStart]}> */}
        <View style={state ? styles.pdlt10 : styles.pdrt10}>
          {/* <Image style={{ width: 10, height: 60, borderRadius: 50 }}
            source={{ uri: item.img }} /> */}
        </View>
        <View>
          <View style={[styles.Chat, state ? styles.myChat : styles.frnChat]}>
            <Text style={{ lineHeight: 25 }}>{item.text}</Text>
          </View>
        </View>
      </View>
    )
  };

  const _renderMessages = ({ item }) => {
    return (
      <Chats item={item} />
    )
  }

  return (
    <View style={styles.screen}>
      <Header title="Hỗ trợ khách hàng"></Header>

      <FlatList
        data={DATA_MESSAGES[0].chats}
        renderItem={_renderMessages}
        keyExtractor={(item, index) => String(index)}
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#D3D3D388', top: 5 }}

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
            if (messages != ""){
              dispatch(chanelActions.addMessager(chanelId, userId, messages,isStaff));
              setMessages("");
            }            
          }} />
      </View>

    </View>




  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d4d4d4',
  },
  chatScreen: {

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



