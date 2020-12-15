import React from 'react';
import {View, FlatList, StyleSheet, Platform, StatusBar, SafeAreaView, ScrollView} from "react-native";
import ItemList from '../components/item'

const information = [
    {
        id: "1",
        name: "Sierra",
        photo: "https://www.ecuadorexplorer.com/wp-content/uploads/2013/03/Yagurcocha-Esteban-Aye-Carrera.jpg"
    },
    {
        id: "2",
        name: "Costa",
        photo: "https://naturegalapagos.com/es/wp-content/uploads/sites/3/2015/06/Costa-Ecuatoriana.jpg"
    },
    {
        id: "3",
        name: "Amazonia",
        photo: "https://hablemosdeculturas.com/wp-content/uploads/2018/12/region-amazonica-8-1024x538.jpg"
    },
    {
        id: "4",
        name: "Galapagos",
        photo: 'https://minilatam.com/blog/wp-content/uploads/2019/02/MINI-Islas-Galapagos-teoria-de-la-evolucion-0-1200x400.jpg'
    }

];

export default function ListPage({navigation}) {
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
