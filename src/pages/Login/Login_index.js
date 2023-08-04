import React from "react";
import { View,Text,Image,Button,TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "../Cadastro/Cadastro_index";

const Stack = createStackNavigator();


export default function Login({navigation}){
    return(
        <View>
            <Stack.Navigator>
                <Stack.Screen name="Cadastro" component={Cadastro}/>
            </Stack.Navigator>
            <View>
                <Image source={require('../../img/perfil_selected.png')}/>
            </View>
            <View>
                <View><Text>E-mail</Text><TextInput></TextInput></View>
                <View><Text>Senha</Text><TextInput></TextInput></View>
            </View>
            <View>
                <Button title="Start"/>
            </View>
            <View>
                <Button title="Esqueceu a senha?"/>
                <Button title="Cadastrar" onPress={()=>navigation.navigate('Cadastro',{screen:'Cadastro'})}/>
            </View>
            <View>
                <Image source={require('../../img/Greenhill.png')}/>
            </View>
            
        </View>
    )
}