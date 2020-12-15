import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get('window')
export default function ItemList(props) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('list2')
                }}

                style={styles.item}>
                <View style={styles.containerInfo}>
                    <View>
                        <Text style={styles.Text}>
                            {props.element.name}
                        </Text>
                    </View>
                </View>
                <View style={styles.containerImage}>
                    <Image style={styles.image} source={{ uri: props.element.photo }} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 2,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'column',
        width: screenWidth - 8
    },
    containerImage: {
        flex: 2,
        marginTop: 5,
        padding: 2,

    },
    image: {
        width: screenWidth - 14,
        height: 120,
    },
    containerInfo: {
        alignItems: 'center',
    },
    Text: {
        fontSize: 25,
        fontFamily:'serif',
      
    }

})
