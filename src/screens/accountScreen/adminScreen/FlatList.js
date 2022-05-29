import React from 'react';
import { FlatList } from 'react-native';

const VirtualizedScrollView = (props) => {
    return (
        <FlatList
            data={props.data}
            extraData={props.extraData}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{ flexGrow: 1, backgroundColor: '#D3D3D388', top: 5, marginHorizontal: 8 }}
        />
    )

}

export default VirtualizedScrollView;