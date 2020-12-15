import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar} from 'react-native';
import {Input} from 'react-native-elements';
import ContextNavigation from "../screens/context";

const { height, width } = Dimensions.get('window');
export default function Login() {
    const [user, setUser] = useState("-------");
    const [password, setPassword] = useState("------");
    const {login} = React.useContext(ContextNavigation);
    const {register} = React.useContext(ContextNavigation);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tittle}>Bienvenido</Text>
            <View style={styles.textInput}>
                <Input
                    placeholder='Usuario'
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
                <TouchableOpacity style={styles.openButton} onPress={login}><Text
                    style={{textAlign: "center"}}>Ingresar</Text></TouchableOpacity>
            </View>
            <View style={styles.textInput}>
                <TouchableOpacity style={styles.registerButton} onPress={register}><Text
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
    openButton: {
        backgroundColor: "#5AADF5",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        margin: 10,
        textAlign: 'center'
    },
    registerButton: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        elevation: 2,
        margin: 20,
        textAlign: 'center'
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
