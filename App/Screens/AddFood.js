import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from '../Components/Search';


export default AddFood = () => {
    const [searchInput, setSearchInput] = useState('');
    const [listFood, setListFood] = useState([]);

    const onPress =() => setSearchInput

    useEffect(()=>{
        getListFood()
    }, [])


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
                    //"Content-Type": "application/json"
                }
            });
            let data = await response.json()
            if (data.common)
                setListFood(data.common)
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
                <Button
                    icon={
                        <Icon
                            name="search-plus"
                            size={20}
                            color="white"
                        />
                    }
                    title={''}
                    onPress={getListFood}
                />
            </View>
            <View>
                <FlatList
                    data={listFood}
                    renderItem={({ item }) => <Search id={item.id} food_name={item.food_name} image={item.photo.thumb}/>}
                    keyExtractor={item => item.index}
                />
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
