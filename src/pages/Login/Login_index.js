import React from "react";
import { View,Text,Image,Button,TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
export default function Login(){
    return(
        <View>
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
                <Text>Esqueceu a senha?</Text>
                <Text>Cadastrar</Text>
            </View>
            <View>
                <Image source={require('../../img/Greenhill.png')}/>
            </View>
            <Text>Aqui será a pagina de login</Text>
            
        </View>
    )
}