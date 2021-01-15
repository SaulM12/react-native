import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar} from 'react-native';
import {Input} from 'react-native-elements';
import firebase from "../firebase/firebase";
import "firebase/firestore";
var md5 = require('md5');


const { height, width } = Dimensions.get('window');

export default function Register({navigation}) {
    const [name, setUser] = useState("-------");
    const [mail, setMail] = useState("-------");
    const [password, setPassword] = useState("------");
    const users = firebase.firestore().collection('user');

    function registerUser() {
        let user = {
            userName: name,
            userMail: mail,
            userPassword:md5(password)
        }
        users.doc().set(user);
        navigation.navigate('login')
    }
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
                    onChangeText={returnOnChangeText => setMail(returnOnChangeText)}
                />
            </View>
            
            <View style={styles.textInput}>
                <Input
                    placeholder='Contraseña'
                    secureTextEntry={true}

                    onChangeText={returnOnChangeText => setPassword(returnOnChangeText)} />
            </View>
            <View style={styles.textInput}>
                <TouchableOpacity style={styles.registerButton} onPress={registerUser}><Text
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
