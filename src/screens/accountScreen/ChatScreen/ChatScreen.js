import React, { useState, useRoute } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Colors, IconButton, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/UI/Header';


function ChatScreen(props) {
  const [value, setValue] = useState(null);
  const [messages, setMessages] = useState(null);
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <Header title="Hỗ trợ khách hàng"></Header>
      <ScrollView style={styles.chatcontainer}>
        <Text>asdsa</Text>
      </ScrollView>

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
    backgroundColor: '#ffff',
  },

  chatcontainer: {

  },


  sendChatcontainer: {
    padding: 10,
    borderTopColor: '#d4d4d4',
    flexDirection: 'row',
    width: 300,
  },

});
export default ChatScreen;



