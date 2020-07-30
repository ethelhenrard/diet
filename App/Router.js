import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import Home from './Screens/Home';
import AddFood from './Screens/AddFood';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyTheme = {
    colors: {
        background: 'rgb(240, 247, 253)',
        text: 'rgb(123, 182, 233)',
    },
};

//definition des routes/screens de l'application
export default function Router() {

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={() => ({
                        title: 'AUJOURD\'HUI',
                        headerTitleStyle: {textAlign: 'center', fontWeight: 'bold'},
                    })
                    }/>
                <Stack.Screen
                    name="AddFood"
                    component={AddFood}
                    options={() => ({
                        title: 'AJOUTER UN ALIMENT',
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



