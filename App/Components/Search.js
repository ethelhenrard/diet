import React, {useState} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default Search = (props) => {
    return(
        <View>
            <Text>{props.food_name}</Text>
            <Image
                source={props.image}
            />
        </View>

)
}

const styles = StyleSheet.create({
    search : {
        flexDirection: 'row',
        flex:1,
    }
})
