import React, {useState} from 'react';
import {
    StyleSheet, Text,
    View,
} from 'react-native';


export default Meal = (props) => {

    return(
        <View>
            <Text style={styles.meal}>{props.title}</Text>
        </View>
)
}

const styles = StyleSheet.create({
    meal: {
        backgroundColor: '#bde0fd',
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        width: '100%'
    },
})
