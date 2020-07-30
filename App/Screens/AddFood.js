import React, {useEffect, useState} from 'react';
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


    const getListFood = async () => {
        const url = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
        const newUrl = url.concat(searchInput)

        console.log('recherche:', newUrl)
        // params.append();
        try {
            const response = await fetch( newUrl, {
                method: 'GET',
                headers: {
                    'x-app-id': '6364c735',
                    'x-app-key': '6f0c7733909f9a21cd4a115abbbede8f'
                }
            });
            let data = await response.json()
            //si des données sont disponibles, alors les mettre dans le state
            if (data.common)
                setListFood(data.common)
                setFirstRequest(true)
            console.log('firstRequest:',firstRequest)
            console.log('liste:',listFood);
        } catch (e) {
            console.log(e)
        }
    }

    console.log('searchInput:', searchInput );

    return(
        <View>
            <View style={styles.container}>
                <TextInput
                    style={styles.search}
                    onChangeText={setSearchInput}
                    value={searchInput}
                    placeholder={'Veuillez saisir un aliment'}
                />
                <Icon.Button
                    name="search"
                    backgroundColor='#2A94ED'
                    onPress={getListFood}
                />
            </View>
            <View>
                <FlatList
                    data={listFood}
                    renderItem={({ item }) => <Search setMeals={setMeals} item={item} post={post} meals={meals} />}
                    keyExtractor={item =>'key'+ Math.random(item.tag_id)}
                />
                {(listFood.length===0 && firstRequest) ? <Text> Pas de résultat à votre recherche</Text> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    search:{
        height: 40,
        borderColor: '#2A94ED',
        borderWidth: 1,
    },
})
