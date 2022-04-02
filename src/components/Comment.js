import React from 'react';
import {StyleSheet, Image, Text, View, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import StarRating from 'react-native-star-rating';
const IMAGE_TEMP =
  'https://cms.dmpcdn.com/article/2021/04/02/a1ca8540-936b-11eb-8b27-db7c51a78b67_original.jpg';
function Comment(props) {
  return (
    <View style={{...styles.screen, ...props.style}}>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri: IMAGE_TEMP}}></Image>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Name</Text>
          <StarRating
            type={'star'}
            disabled={true}
            starSize={18}
            containerStyle={styles.rating}
            emptyStar={'star'}
            fullStar={'star'}
            halfStar={'star-half'}
            maxStars={5}
            rating={3}
            emptyStarColor={'#EBF0FF'}
            fullStarColor={'#FFDF00'}
          />
        </View>
      </View>
      <Text style={styles.comment}>
        This is some comment that you will never care descriptions
      </Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        style={styles.imageList}
        horizontal={true}
        renderItem={itemData => (
          <View style={styles.commentImageContainer}>
            <Image
              style={styles.commentImage}
              source={{uri: IMAGE_TEMP}}></Image>
          </View>
        )}></FlatList>
      <Text style={styles.createTime}>Create Time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    height: 50,
    width: 50,
    borderRadius: 30,
    overflow: 'hidden',
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
  },
  avatar: {
    height: '100%',
    width: '100%',
  },
  nameContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
  rating: {
    justifyContent: 'flex-start',
  },
  comment: {
    fontSize: 15,
    margin: 5,
  },
  imageList: {
    height: 100,
  },
  commentImageContainer: {
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    width: 70,
    overflow: 'hidden',
  },
  commentImage: {
    height: '100%',
    width: '100%',
  },
  createTime: {
    justifyContent: 'flex-start',
    fontSize: 13,
    marginHorizontal: 5,
  },
});

export default Comment;
