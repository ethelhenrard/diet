import React, {useEffect, useState} from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text, TouchableHighlight,
    View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';




export default Search = (props) => {

    const [selectedFood, setSelectedFood] = useState([]);
    console.log('selected:', selectedFood);

    return (
        <View>
            <TouchableHighlight
                style={styles.result}
                onPress={() => {
                    //TODO: gérer les erreurs ex: si pas ajouté
                    Alert.alert('Aliment ajouté!');
                    //setSelectedFood(props.food_name);
                   /* navigation.navigate('home',{
                        name: name,
                        food: route.params.food,
                    });*/
                }}
            >
                <View style={styles.container}>
                    <Image
                    style={styles.image}
                    source={{uri: props.image}}
                    />
                    <Text>{props.food_name}</Text>
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
