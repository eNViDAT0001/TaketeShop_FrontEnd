import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Button} from 'react-native-paper';
import { useSelector } from 'react-redux';
import Comment from '../../components/Comment';
import Card from '../../components/UI/Card';
import Header from '../../components/UI/Header';
import Colors from '../../constants/Colors';
import {ADD_COMMENT_SCREEN} from '../../constants/NavigatorIndex';

function CommentScreen(props) {
  const comments = useSelector(state => state.comment.productComments);
  const navigation = useNavigation();
  const onAddCommentPress = () => {
    navigation.navigate(ADD_COMMENT_SCREEN);
  };
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <FlatList
      style={styles.screen}
      data={comments}
      renderItem={itemData => <Comment data={itemData.item}></Comment>}
      ListHeaderComponent={
        <View style={{flex: 1}}>
          <Header title={'Đánh giá'}></Header>
          <ScrollView horizontal={true} style={styles.header}>
            <TouchableCmp useForeground onPress={() => console.log('Clickkk')}>
              <Card style={styles.filterItems}>
                <Text style={styles.filterText}>Tất cả sản phẩm</Text>
              </Card>
            </TouchableCmp>
            <TouchableCmp useForeground>
              <Card style={styles.filterItems}>
                <Text style={styles.filterText}>1 Sao</Text>
              </Card>
            </TouchableCmp>
            <TouchableCmp useForeground>
              <Card style={styles.filterItems}>
                <Text style={styles.filterText}>2 Sao</Text>
              </Card>
            </TouchableCmp>
            <TouchableCmp useForeground>
              <Card style={styles.filterItems}>
                <Text style={styles.filterText}>3 Sao</Text>
              </Card>
            </TouchableCmp>
            <TouchableCmp useForeground>
              <Card style={styles.filterItems}>
                <Text style={styles.filterText}>4 Sao</Text>
              </Card>
            </TouchableCmp>
            <TouchableCmp useForeground>
              <Card style={styles.filterItems}>
                <Text style={styles.filterText}>5 Sao</Text>
              </Card>
            </TouchableCmp>
          </ScrollView>
        </View>
      }
      ListFooterComponent={
        <View style={styles.bottomBar}>
          {/* <TouchableCmp onPress={onAddCommentPress} useForeground>
            <View style={styles.bottomButton}>
              <Text style={styles.bottomText}>Thêm Đánh Giá</Text>
            </View>
          </TouchableCmp> */}
          <Button onPress={onAddCommentPress} color={Colors.primaryColor}>Thêm đánh giá</Button>
        </View>
      }></FlatList>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    marginBottom: 10,
  },
  filterItems: {
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  bottomBar: {
    flex: 1,
    height: 50,
    padding: 5,
    borderRadius: 0,
    marginVertical: 2,
  },
  filterText: {
    fontSize: 15,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    borderWidth: 1,
  },
  bottomText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CommentScreen;
