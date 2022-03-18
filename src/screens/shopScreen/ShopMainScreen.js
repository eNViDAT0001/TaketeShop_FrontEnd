import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

function ShopMainScreen(props) {
    return ( 
        <View>
            <Text>{props.text}</Text>
        </View>
     );
}

export default ShopMainScreen;