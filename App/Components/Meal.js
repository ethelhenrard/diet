import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text, TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import Detail from './Detail';

export default Meal = (props) => {
    const navigation = useNavigation();

    const [meals, setMeals] = useState([{
        name:'Petit Déjeuner',
        food: []
        },
        {
        name:'Déjeuner',
        food: []
        },
        {
        name:'Dîner',
        food:[]
        },
    ]);



    //boucle pour récupérer les meals d'une journée et les afficher
    const MealLoop = meals.map( meal => {

            return (
                <View>
                    <TouchableHighlight
                        style={styles.meal}
                        onPress={() => navigation.navigate('AddFood', {meal} )}
                    >
                        <View style={styles.container}>
                            <Text>{meal.name}</Text>
                            <FontAwesomeIcon icon={faPlusCircle} size={20} color="#2A94ED"/>
                        </View>
                    </TouchableHighlight>
                    {(meal.food.length===0)? <Text style={styles.message}>Vous n’avez pas encore
                        d’aliments pour ce repas.</Text> : <Text>ok</Text> }

                </View>
            )
        })

    /*const updateUserState = async (selectedFood) => {
        /!*le state est en lecture seule, on ne peut pas faire un push ou ajouter une donnée.
        Ppe d'immutabilité, il faut récuperer l'état du state, rajouter ce qu'on veut dedans
        et ensuite le renvoyer*!/
        try{
            //gestion du fait que l'utilisateur appuie sur le bouton alors que pas de note dedans
            if (!data) throw new Error("TextInput is empty");
            //récupere le state (let car va varier)
            let newTaskListState = [...tasks]*/
        return (
            <View>
                {MealLoop}
                <Detail/>
            </View>)

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        fontWeight: "bold",
        justifyContent: "space-between",
        color: '#7bb6e9',
    },
    meal: {
        backgroundColor: '#bde0fd',
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
    },
    message:{
        textAlign: 'center'
    }
})
