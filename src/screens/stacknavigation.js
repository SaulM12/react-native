import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListPage from '../Lista/lista';
import Item from "../Lista/item";
import ListPage2 from '../Lista/lista2';

const Stack = createStackNavigator();


export default function Principal() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListPage} options={{
                title: 'Regiones',
                headerStyle: {
                    backgroundColor: '#1D419E',
                    
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <Stack.Screen name="list2" component={ListPage2} options={{
                title: 'Lugares',
                headerStyle: {
                    backgroundColor: '#058394',
                    
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <Stack.Screen name="item" component={Item} options={{
                title:'Información',
                headerStyle:{
                    backgroundColor: '#29B0C2'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
                />

        </Stack.Navigator>

    )
}
