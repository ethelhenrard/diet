import React, {useState} from 'react';
import {
    StyleSheet,
    Text, TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';


export default Meal = (props) => {
    const navigation = useNavigation();

    const [meals, setMeals] = useState(['Petit Déjeuner', 'Déjeuner', 'Dîner']);

    const MealLoop = meals.map( meal => {
            return (
                <TouchableHighlight
                    style={styles.meal}
                    onPress={() => navigation.navigate('AddFood')}
                >
                    <View style={styles.container}>
                        <Text>{meal}</Text>
                        <FontAwesomeIcon icon={faPlusCircle} size={20} color="#2A94ED"/>
                    </View>
                </TouchableHighlight>
            )
        })

        return (
            <View>
                {MealLoop}
            </View>)

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    meal: {
        backgroundColor: '#bde0fd',
        margin: 10,
        padding: 10,
    },
})
