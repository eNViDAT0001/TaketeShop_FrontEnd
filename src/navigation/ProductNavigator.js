import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADD_PRODUCT,FIX_PRODUCT} from '../constants/NavigatorIndex';
import ProductDetailScreen from '../screens/productScreen/ProductDetailScreen';
import AddProductScreen from '../screens/productScreen/AddProductScreen';
import FixProduct from '../screens/productScreen/FixProduct';



const Stack = createNativeStackNavigator();

function ProductNavigator() {
  const [text, onChangeText] = React.useState(null);

  return (
    <Stack.Navigator initialRouteName={FIX_PRODUCT}>
      <Stack.Screen
        name={"ProductDetailScreen"}
        options={{ headerShown: false, }}
        component={ProductDetailScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={ADD_PRODUCT}
        options={{ headerShown: false, }}
        component={AddProductScreen}>
      </Stack.Screen>
      <Stack.Screen
        name={FIX_PRODUCT}
        options={{ headerShown: false, }}
        component={FixProduct}>
      </Stack.Screen>

    </Stack.Navigator>

  );

}



export default ProductNavigator;  