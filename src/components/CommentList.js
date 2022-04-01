import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Comment from './Comment';

function CommentList(props) {
  return (
    <FlatList
    data={[1, 2, 3, 4, 5]}
    renderItem={itemData => (<Comment data={itemData.item}></Comment>)}></FlatList>
  );
}

export default CommentList;
