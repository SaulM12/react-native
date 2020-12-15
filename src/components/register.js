import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar} from 'react-native';
import {Input} from 'react-native-elements';

const { height, width } = Dimensions.get('window');
export default function Register() {


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tittle}>Registro</Text>
            <View style={styles.textInput}>
                <Input
                    placeholder='Usuario'
                    onChangeText={returnOnChangeText => setUser(returnOnChangeText)}
                />
            </View>
            <View style={styles.textInput}>
                <Input
                    placeholder='Correo electrónico'
                    onChangeText={returnOnChangeText => setUser(returnOnChangeText)}
                />
            </View>
            
            <View style={styles.textInput}>
                <Input
                    placeholder='Contraseña'
                    secureTextEntry={true}

                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)} />
            </View>
            <View style={styles.textInput}>
                <TouchableOpacity style={styles.registerButton}><Text
                    style={{textAlign: "center"}}>Registrarse</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    registerButton: {
        backgroundColor: "#10AD2F",
        borderRadius: 5,
        padding: 8,
        elevation: 2,
        margin: 20,
        textAlign: 'center',
        color: '#FFF',
    },
    textInput: {
        width: 275,
        fontFamily: 'serif',
    },
    tittle:{
        fontSize:20,
        fontFamily: 'serif',
        padding:10
    }
});
