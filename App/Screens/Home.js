import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Meal from '../Components/Meal'


export default Home = () => {

    return(
        <View>
            <Meal/>
            <Text style={styles.meal}>Résumé</Text>
        </View>
)
};

const styles = StyleSheet.create({
    meal: {
        backgroundColor: '#bde0fd',
        flexDirection: 'row',
        margin: 10,
        padding: 10,

    },
    body: {
        backgroundColor: '#F1F8FE',
        flex: 1,
    }
})
