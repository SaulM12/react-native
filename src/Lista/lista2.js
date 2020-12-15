import React from 'react';
import {View, FlatList, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView} from "react-native";
import ItemList from '../components/item2'

const information = [
    {
        id: "1",
        name: "Lugar 1",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Barbados_beach.jpg/250px-Barbados_beach.jpg",
        description: "El mejor lugar",
        info:""
    },
    {
        id: "2",
        name: "Lugar 2",
        photo: "https://naturegalapagos.com/es/wp-content/uploads/sites/3/2015/06/Costa-Ecuatoriana.jpg",
        description: "El mejor lugar",
    },
    {
        id: "3",
        name: "Lugar 3",
        photo: "https://hablemosdeculturas.com/wp-content/uploads/2018/12/region-amazonica-8-1024x538.jpg",
        description: "El mejor lugar",
    },
    {
        id: "4",
        name: "Lugar 4",
        photo: 'https://minilatam.com/blog/wp-content/uploads/2019/02/MINI-Islas-Galapagos-teoria-de-la-evolucion-0-1200x400.jpg',
        description: "El mejor lugar",
    }

];

export default function ListPage2({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={information}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ItemList element={item} navigation={navigation}/>
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    item: {
        backgroundColor: '#f9c2ff'
    }

})