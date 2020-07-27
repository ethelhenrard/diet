import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Meal from '../Components/Meal'



export default Home = ({navigation}) => {

    return(
        <View>
            <Meal title="Petit Déjeuner"/>
            <Meal title="Déjeuner"/>
            <Meal title="Dîner"/>
            <Text style={styles.meal}>Résumé</Text>
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
    body: {
        backgroundColor: '#F1F8FE',
        flex: 1,
    }
})
