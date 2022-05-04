import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card from '../../../components/UI/Card';
import Colors from '../../../constants/Colors';
const ICON_SIZE = 32;
const ICON_TITLE_SIZE = 35;
const ICON_COLOR = '#9098B1';
const ICON_TITLE_COLOR = '#223263';
function AdminMainScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/img_appLogo.png')}></Image>
      </View>
      {/* /////////////////////////// */}
      <Card style={styles.orderContainer}>
        <View style={styles.contentContainer}>
          <Feather
            name="box"
            size={ICON_TITLE_SIZE}
            color={ICON_TITLE_COLOR}
            style={styles.contentIcon}></Feather>
          <Text style={styles.contentTitle}>Đơn Hàng</Text>
        </View>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.itemContainer}>
            <Entypo
              name="text-document"
              style={styles.icon}
              color={ICON_COLOR}
              size={ICON_SIZE}></Entypo>
            <Text style={styles.itemTitle}>Chờ xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="store"
              color={ICON_COLOR}
              size={ICON_SIZE}
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Chờ giao hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="truck-cargo-container"
              size={ICON_SIZE}
              color={ICON_COLOR}
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Đang giao</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <MaterialCommunityIcons
              name="star-outline"
              size={ICON_SIZE}
              color={ICON_COLOR}
              style={styles.icon}></MaterialCommunityIcons>
            <Text style={styles.itemTitle}>Thành Công</Text>
          </TouchableOpacity>
        </View>
      </Card>
      {/* /////////////////////////// */}
      <Card style={styles.orderContainer}>
        <View style={styles.contentContainer}>
          <Ionicons
            name="flower"
            size={ICON_TITLE_SIZE}
            color={ICON_TITLE_COLOR}
            style={styles.contentIcon}></Ionicons>
          <Text style={styles.contentTitle}>Sản Phẩm</Text>
        </View>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.itemContainer}>
            <MaterialIcons
              name="add-box"
              color={ICON_COLOR}
              size={ICON_SIZE}
              style={styles.icon}></MaterialIcons>
            <Text style={styles.itemTitle}>Thêm sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <MaterialIcons
              name="computer"
              color={ICON_COLOR}
              size={ICON_SIZE}
              style={styles.icon}></MaterialIcons>
            <Text style={styles.itemTitle}>Quản lý sản phẩm</Text>
          </TouchableOpacity>
        </View>
      </Card>
      {/* /////////////////////////// */}
      <Card style={styles.orderContainer}>
        <View style={styles.contentContainer}>
          <MaterialCommunityIcons
            name="store-settings-outline"
            size={ICON_TITLE_SIZE}
            color={ICON_TITLE_COLOR}
            style={styles.contentIcon}></MaterialCommunityIcons>
          <Text style={styles.contentTitle}>Cửa hàng</Text>
        </View>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.itemContainer}>
            <FontAwesome5
              name="scroll"
              color={ICON_COLOR}
              size={ICON_SIZE}
              style={styles.icon}></FontAwesome5>
            <Text style={styles.itemTitle}>Banner</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemContainer}>
            <Ionicons
              name="color-palette-sharp"
              size={ICON_SIZE}
              color={ICON_COLOR}
              style={styles.icon}></Ionicons>
            <Text style={styles.itemTitle}>Màu chủ đạo</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
  },
  imageContainer: {
    flex: 2.5,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '95%',
  },
  orderContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black'
  },
  statusContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 5,
  },
  itemTitle: {
    fontSize: 16,
  },
});

export default AdminMainScreen;