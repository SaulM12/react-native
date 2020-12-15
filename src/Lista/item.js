import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';
const { width: screenWidth } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('window')
export default function Item() {

    let route = useRoute();
    let item = route.params.texto;

    return (
        <View style={styles.item}>
             <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: item.photo }} />
            </View>
            <View>
                <Text style={styles.Text}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'column',
        width: screenWidth -10,
    },
    containerImage: {
        margin: 0,
       
    },
    image: {

        width: screenWidth -20,
        height: 150,
    },
    containerInfo: {
        flex: 5,
        margin: 10
    },
    Text: {
        fontSize: 25,
        justifyContent: 'center',
        fontFamily: 'serif',

    },
    containerInfo: {
        marginTop: 4,
        marginLeft: 8,
        textAlign: 'left',
        flexDirection: 'column',
    },
    Description: {
        flex: 1,
        fontSize: 15,
        fontFamily:'serif',

    }

})
