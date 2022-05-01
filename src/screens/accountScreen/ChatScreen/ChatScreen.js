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

const { width, height } = Dimensions.get('window');
function ChatScreen(props) {
  const [value, setValue] = useState(null);
  const [messages, setMessages] = useState(null);
  const navigation = useNavigation();
  const DATA_MESSAGES = [
    {
      id: 0, frnName: 'Shuja Khalid', chats: [
        { id: 1, text: 'Hi', sender: 'Shuja Khalid' },
        { id: 1, text: 'Hello', sender: 'Me' },
        { id: 1, text: 'To style the header in React Navigation use a header object inside the navigationOptions object', sender: 'Shuja Khalid' },
      ]
    }
  ]

  const Chats = ({ item }) => {
    var state = item.sender === "Me"
    return (
      <View style={[styles.pdlt10, styles.mdtp10, styles.mdbt10, styles.pdtp10, item.sender === "Me" ? styles.frowrev : styles.frow, styles.jStart]}>
        <View style={state ? styles.pdlt10 : styles.pdrt10}>
          <Image style={{ width: 10, height: 60, borderRadius: 50 }}
            source={{ uri: item.img }} />
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
        contentContainerStyle={{ flexGrow: 1, backgroundColor: '#D3D3D388',top:5}}

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
          onPress={() => console.log('Pressed')}
        />
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
    maxWidth: width /1.5, 
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



