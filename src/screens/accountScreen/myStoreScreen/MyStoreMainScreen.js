import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../../../components/UI/Card';

function MyStoreMainScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}></Image>
      </View>
      {/* /////////////////////////// */}
      <Card style={styles.orderContainer}>
        <View style={styles.contentContainer}>
          <MaterialCommunityIcons
            style={styles.contentIcon}></MaterialCommunityIcons>
          <Text style={styles}>Đơn Hàng</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Chờ xác nhận</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Chờ giao hàng</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Đang giao</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Thành Công</Text>
          </View>
        </View>
      </Card>
      {/* /////////////////////////// */}
      <Card style={styles.orderContainer}>
        <View style={styles.contentContainer}>
          <MaterialCommunityIcons
            style={styles.contentIcon}></MaterialCommunityIcons>
          <Text style={styles}>Sản Phẩm</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Thêm sản phẩm</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Quản lý sản phẩm</Text>
          </View>
        </View>
      </Card>
      {/* /////////////////////////// */}
      <Card style={styles.orderContainer}>
        <View style={styles.contentContainer}>
          <MaterialCommunityIcons
            style={styles.contentIcon}></MaterialCommunityIcons>
          <Text style={styles}>Cửa hàng</Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Banner</Text>
          </View>
          <View style={styles.itemContainer}>
            <MaterialCommunityIcons
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Màu chủ đạo</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default MyStoreMainScreen;
