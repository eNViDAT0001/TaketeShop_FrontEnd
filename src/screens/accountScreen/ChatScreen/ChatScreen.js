import React, { useState, useRoute } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput, Colors, IconButton, Button } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/UI/Header';


function ChatScreen(props) {
  const [value, setValue] = useState(null);
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <Header title="Hỗ trợ khách hàng"></Header>
      <ScrollView style = {styles.chatcontainer}>
        <Text>asdsa</Text>
      </ScrollView>

      <View style={styles.typeChatcontainer}>
        <TextInput
          multiline={true}
          placeholder='type your message'
          style={{
            height: 45,

          }}
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

  chatcontainer:{
   
  },


  typeChatcontainer: {
    padding: 10,
    borderTopColor: '#d4d4d4',   
    flexDirection: 'row',
  },

});
export default ChatScreen;



