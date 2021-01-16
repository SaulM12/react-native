import React from "react";
import { Dimensions, Image, StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { useRoute } from '@react-navigation/native';
import Carousel from 'simple-carousel-react-native';
import { ScrollView } from "react-native-gesture-handler";

const { width: screenWidth } = Dimensions.get('window')
export default function ItemNavigate() {

    let route = useRoute();
    let item = route.params.texto;

    return (

        <ScrollView >
            <View style={styles.item}>
                <View style={styles.container1}>
                    <Carousel >
                        <View style={styles.containerImage}>
                            <Image style={styles.image} source={{ uri: item.image }} />
                        </View>
                        <View style={styles.containerImage}>
                            <Image style={styles.image} source={{ uri: item.image2 }} />
                        </View>
                        <View style={styles.containerImage}>
                            <Image style={styles.image} source={{ uri: item.image3 }} />
                        </View>
                    </Carousel>
                </View>
                <View>
                    <Text style={styles.Text}>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.ubication}>
                        {item.ubication}
                    </Text>
                </View>
                <View style={styles.containerInfo2}>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    carousel: {

    },
    item: {
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'column',
        width: screenWidth - 10,
    },
    containerImage: {
        margin: 0,
        marginTop: 25,
        alignItems: 'center',
        padding: 2
    },
    image: {
        width: screenWidth - 20,
        height: 250,

    },
    containerInfo: {
        flex: 5,
        margin: 4
    },
    Text: {
        fontSize: 25,
        justifyContent: 'center',
        fontFamily: 'serif',

    },
    containerInfo2: {
        marginTop: 30,
        marginLeft: 8,
        textAlign: 'left',
        flexDirection: 'column',
    },
    ubication: {
        fontSize: 13,
        fontFamily: 'serif',
    },
    description: {
        fontSize: 14,
        fontFamily: 'serif',
        textAlign: 'justify'
    },
    container1: {
        marginTop: 60,
        height: 225,
        justifyContent: 'center',
        alignItems: 'center',

    },

})
