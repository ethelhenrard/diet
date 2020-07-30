import React, {useState} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../Components/Search';

export default AddFood = ({route}) => {
    const {post, setMeals, meals} = route.params;

    console.log('posts:', post);

    const [searchInput, setSearchInput] = useState('');
    const [listFood, setListFood] = useState([]);
    const [firstRequest, setFirstRequest] = useState(false);

    //liaison avec l'API
    const getListFood = async () => {
        const url = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
        const newUrl = url.concat(searchInput);

        console.log('recherche:', newUrl);
        // params.append()??;
        try {
            const response = await fetch(newUrl, {
                method: 'GET',
                headers: {
                    'x-app-id': '6364c735',
                    'x-app-key': '6f0c7733909f9a21cd4a115abbbede8f',
                },
            });
            let data = await response.json();
            //si des données sont disponibles, alors les mettre dans le state
            if (data.common) {
                setListFood(data.common);
            }
            //dès lors qu'il y a eu une recherche, passer le state FirstRequest à true
            // > permet de gérer l'envoi d'un message en cas de 0 resultat trouvé par ex
            setFirstRequest(true);
            console.log('firstRequest:', firstRequest);
            console.log('liste:', listFood);
        } catch (e) {
            console.log(e);
        }
    };

    console.log('searchInput:', searchInput);

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={setSearchInput}
                    placeholder={'Veuillez saisir un aliment'}
                    style={styles.search}
                    value={searchInput}
                />
                <Icon.Button
                    backgroundColor='#2A94ED'
                    name='search'
                    onPress={getListFood}
                />
            </View>
            <View>
                <FlatList
                    data={listFood}
                    renderItem={({item}) => <Search setMeals={setMeals} item={item} post={post} meals={meals}/>}
                    //keyExtractor={item =>'key'+ Math.random(item.tag_id)}
                    keyExtractor={(item) => item.id}
                />
                {(listFood.length === 0 && firstRequest) ? <Text> Pas de résultat à votre recherche</Text> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    search: {
        borderColor: '#2A94ED',
        borderWidth: 1,
        height: 40,
        width: '90%',
    },
});
