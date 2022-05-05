import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/UI/Header';
import Colors from '../../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../../../store/actions/auth';
import {Dropdown} from 'react-native-element-dropdown';
import Card from '../../../components/UI/Card';

function AdminProductDetailScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState(null);
  const [unit, setUnit] = useState(null);
  const categories = useSelector(state => state.products.categories);
  const units = useSelector(state => state.products.unit);
  const id = useRoute().params.id;
  const product = useSelector(state => state.products.availableProducts.find(item => item.productID === id));
  useLayoutEffect(() => {
    if (id) {
      setName(product.name);
      setDetail(product.description);
      setQuantity(product.quantity);
      setCategory(product.categoryID)
      setPrice(product.price);
      setUnit(product.unit);
    }
  }, [id]);

  return (
    <ScrollView style={styles.screen}>
      <Header title="Thêm sản phẩm"></Header>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Tên sản phẩm: </Text>
        <TextInput
          label="Nhập tên sản phẩm"
          placeholder={'Mời nhập tên sản phẩm'}
          style={{backgroundColor: Colors.backgroundColor}}
          mode="outlined"
          value={name}
          onChangeText={txt => setName(txt)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.title}>Mô tả sản phẩm </Text>
        <TextInput
          label="Mô tả sản phẩm"
          placeholder={'Mô tả sản phẩm'}
          style={{backgroundColor: Colors.backgroundColor}}
          mode="outlined"
          multiline
          numberOfLines={4}
          value={detail}
          onChangeText={txt => setDetail(txt)}
        />
      </View>
      {/* quantity san pham + price SP */}
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Số lượng</Text>
          <TextInput
            label="Nhập số lượng"
            placeholder={'Mời nhập số lượng'}
            style={{backgroundColor: Colors.backgroundColor}}
            mode="outlined"
            keyboardType="numeric"
            value={quantity}
            onChangeText={txt => setQuantity(txt)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Giá sản phẩm </Text>
          <TextInput
            label="Nhập giá"
            placeholder={'Mời nhập giá'}
            style={{backgroundColor: Colors.backgroundColor}}
            mode="outlined"
            keyboardType="numeric"
            value={price}
            onChangeText={txt => setPrice(txt)}
          />
        </View>
      </View>

      {/* Loai san pham + don vi */}
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Loại sản phẩm </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={categories}
            maxHeight={200}
            labelField="name"
            valueField="categoryID"
            placeholder={'Chọn loại sản phẩm'}
            value={category}
            onChange={item => {
              setCategory(item.categoryID);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Đơn vị </Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={units}
            maxHeight={200}
            labelField="name"
            valueField="unitID"
            placeholder={'Chọn Đơn vị'}
            value={unit}
            onChange={item => {
              setUnit(item.unitID);
            }}
          />
        </View>
      </View>

      {/* Anh chi tiet */}
      <View style={styles.inputContainer}>
        <Text style={styles.title}> Ảnh chi tiết </Text>
        <FlatList
          data={[]}
          horizontal={true}
          style={styles.imageList}
          renderItem={itemData => (
            <Card style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{uri: itemData.item.imagePath}}></Image>
            </Card>
          )}
          ListFooterComponent={
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => console.log('Adddddd')}>
              <Card style={styles.addImageContainer}>
                <AntDesign
                  style={styles.addIcon}
                  name="pluscircle"
                  color={'#9098B1'}
                  size={40}
                />
              </Card>
            </TouchableOpacity>
          }></FlatList>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          contentStyle={styles.buttonText}
          style={styles.button}
          color="#40bfff"
          labelStyle={{fontSize: 20}}
          onPress={null}>
          Xác nhận
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  inputContainer: {
    padding: 10,
    flex: 14,
    backgroundColor: Colors.backgroundColor,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: 'black',
  },
  dropdown: {
    marginTop: 10,
    height: 50,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: Colors.backgroundColor,
  },
  expand: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: '#FF9C40',
  },
  itemList: {
    flex: 4,
  },
  imageList: {
    height: 100,
    marginTop: 10,
    width: '100%',
  },
  imageListContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginHorizontal: 8,
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    width: 90,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  addImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    height: 100,
    width: 90,
  },

  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    marginTop: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonContainer: {
    margin:5,
    marginHorizontal: 20,
    borderRadius: 40,
    color: '#4f5160',
  },
  button: {
    height: 50,
  },
  buttonText: {
    height: '100%',
  },
});
export default AdminProductDetailScreen;
