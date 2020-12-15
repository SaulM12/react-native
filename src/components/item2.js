import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get('window')
export default function ItemList2(props) {
    
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate('item',
                        {
                            texto: props.element
                        }
                    )
                }}

                style={styles.item}>

                <View style={styles.containerImage}>
                    <Image style={styles.image} source={{ uri: props.element.photo }} />
                </View>

                <View style={styles.containerInfo}>
                    <View>
                        <Text style={styles.Text}>
                            {props.element.name}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.description}>
                            {props.element.description}
                        </Text>
                    </View>
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
        flexDirection: 'row',
        width: screenWidth - 8
    },
    containerImage: {

        marginTop: 10,
        padding: 2,

    },
    image: {
        width: 80,
        height: 80,
    },
    containerInfo: {
        marginTop: 4,
        marginLeft: 8,
        textAlign: 'left',
        flexDirection: 'column',
    },
    Text: {
        fontSize: 25,
        justifyContent: 'center',
        fontFamily: 'serif',

    },
    Description: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'serif',

    }

})
