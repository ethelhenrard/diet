import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Home from './Screens/Home';
import AddFood from './Screens/AddFood';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

//definition des routes/screens de l'application
export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator  style={styles.body}>
                <Stack.Screen name="Home" component={Home} options={()=> ({title: "AUJOURD'HUI"})}/>
                <Stack.Screen name="AddFood" component={AddFood} options={()=> ({title: "AJOUTER UN ALIMENT"})} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F1F8FE',
    }
})

