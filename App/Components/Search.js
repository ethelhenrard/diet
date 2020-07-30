import React, {useEffect, useState} from 'react';
import {
    Alert,
    Image, LogBox,
    StyleSheet,
    Text, TouchableHighlight,
    View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { YellowBox } from 'react-native';
import {useNavigation} from '@react-navigation/native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

export default Search = (props, {route}) =>{
    const navigation = useNavigation();

    const {post, setMeals, meals, item}= props;
    console.log('props:', post)


    console.log(item)
        return (
            <View>
                <TouchableHighlight
                    style={styles.result}
                    onPress={() => navigation.navigate( 'Home', {
                            post: post,
                            item: item,
                        }
                        )}
                        //TODO: gérer les erreurs ex: si pas ajouté
                        //Alert.alert('Aliment ajouté!');
                >
                    <View style={styles.container}>
                        <Image
                        style={styles.image}
                        source={{uri: item.photo.thumb}}
                        />
                        <Text>{item.food_name}</Text>
                        <FontAwesomeIcon icon={faPlusCircle} size={20} color="#2A94ED"/>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };

const styles = StyleSheet.create({
container: {
alignContent: 'center',
flexDirection: 'row',
justifyContent: 'space-between',
margin: 10,
},
image: {
height: 25,
width: 25,

},
result: {
borderColor: '#2A94ED',
borderWidth: 0.2,
height: 40,
margin: 5,
},
});

