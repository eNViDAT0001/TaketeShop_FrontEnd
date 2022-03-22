import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {Text} from 'react-native-paper';
import Card from './UI/Card';

function CategoryNameHolder(props) {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  const onClickCategoryHandler = category => {
    props.onSelect(category)
  };
  return (
    <View style={{...styles.card, ...props.style}}>
      <FlatList
        data={['Tôm', 'Cá', 'Cua', 'Ghẹ', 'Bầu']}
        renderItem={itemData => (
          <View>
            <Card style={styles.cardContainer}>
              <TouchableCmp
                onPress={() => onClickCategoryHandler(itemData.item)}
                useForeground>
                <View style={styles.touchSize}>
                  <Text style={styles.title}>{itemData.item}</Text>
                </View>
              </TouchableCmp>
            </Card>
          </View>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    marginTop: 3,
    marginRight: 0
  },
  cardContainer: {
    flex: 1,
    marginVertical: 5,
    borderRadius: 0,
    height: '100%',
    width: '100%',
  },
  touchSize: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    flex: 1,
    fontFamily: 'open-sans-bold',
  },
});

export default CategoryNameHolder;
