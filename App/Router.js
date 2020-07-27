import 'react-native-gesture-handler';

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import AddFood from './Screens/AddFood';


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Aujourd'hui" component={Home} />
                <Stack.Screen name="Ajouter un aliment" component={AddFood} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F1F8FE',
        flex: 1,

    }
})

