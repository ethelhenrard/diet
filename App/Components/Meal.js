import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-community/async-storage';
import Detail from './Detail';

export default Meal = (post, item) => {
    //accès à la navigation par le composant
    const navigation = useNavigation();

    const [meals, setMeals] = useState([{
        name: ['Petit Déjeuner'],
        food: [{food_name:'apple'}],
    },
        {
            name: ['Déjeuner'],
            food: [],
        },
        {
            name: ['Dîner'],
            food: [],
        },
    ]);

    console.log('retoursearch:', post);

    /*TODO ajout au state d'un nouveau aliment. Attention construction du state ne permet pas le spread opérator
       Object.Assign() solution??.*/
    const addMeal = async () => {
        try {
            //Immutabilité du state (lecture seule)
            //let newMeal = Object.assign(post,item)
            let newMeal = [...meals, {food: {...post.food, item}}];

            console.log(newMeal);

            //mise à jour du state avec le nouvel Meal
            setMeals(newMeal);

            //JSON.stringify pour enregistrer le tableau sous forme de string (la librairie l'impose)
            await AsyncStorage.setItem('meals', JSON.stringify(newMeal));
        } catch (error) {
            console.log(error);
        }
    };

    //Mise en place de l'asynchstorage pour enregistrement des données de l'utilisateur
    // TODO à tester lorsque données passeront dans le state
    const restoreDataFromAsyncStorage = async () => {
        try {
            const localStorageTasks = await AsyncStorage.getItem('meals');
            //recuperer la chaine de caractere en objet (insverse de stringify) et la mettre dans le state
            return localStorageTasks != null ? setMeals(JSON.parse(localStorageTasks)) : null;
        } catch (error) {
            //A faire error management
        }
    };

    useEffect(() => {
        restoreDataFromAsyncStorage();
    }, []);


    //boucle pour récupérer les meals d'une journée et les afficher
    const MealLoop = meals.map(meal => {
        return (
            <View>
                <TouchableHighlight
                    style={styles.meal}
                    /*passage des paramètres à l'écran suivant setMeals, meals passés dans l'optique de pouvoir
                    mettre à jour le state depuis le composant Search*/
                    onPress={() => navigation.navigate('AddFood', {post: meal, setMeals: setMeals, meals: meals})}
                >
                    <View style={styles.container}>
                        <Text>{meal.name}</Text>
                        <FontAwesomeIcon icon={faPlusCircle} size={20} color="#2A94ED"/>
                    </View>
                </TouchableHighlight>
                {/*TODO à tester lorsque le state sera effectif et ajuster*/}
                {(meal.food = []) ? <Text style={styles.message}>Vous n’avez pas encore
                    d’aliments pour ce repas.</Text> : null}
            </View>
        );
    });

    return (
        <View>
            {MealLoop}
            {/*<FlatList
                data={}
                renderItem={({ item }) => <Text>{item.food.name}</Text>}
                keyExtractor={(item) => item.id}
            />*/}
        </View>);

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        fontWeight: 'bold',
        justifyContent: 'space-between',

    },
    meal: {
        backgroundColor: '#bde0fd',
        color: '#7bb6e9',
        fontWeight: 'bold',
        margin: 10,
        padding: 10,
    },
    message: {
        textAlign: 'center',
    },
});
