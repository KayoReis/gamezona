import React, { Component, useState } from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";
import { Estilo } from "./login_style";
import { getFonts } from "../../Components/Font";
import * as Font from 'expo-font';


export default function Login({ navigation }) {
    const theme = useContext(ThemeContext);
    
    return (
        <View>
            <View style={{ paddingStart: "25%" }}>
                <Image source={require('../../img/perfil_selected.png')} style={{ width: 200, height: 200, }} />
            </View>
            <View style={Estilo.texto_login}>
                <Text style={[{ color: theme.color }, { textShadowColor: theme.sombra }, { fontSize: 40, fontWeight: 'bold', textShadowRadius: 15, bottom: 20, textTransform: 'capitalize', fontFamily: 'Bungee' }]}>Login</Text>
            </View>
            <View>
                <View><TextInput placeholder="E-mail/nick" style={[{ color: theme.color }, { backgroundColor: 'grey' }]} /></View>
                <View><TextInput placeholder="Senha" style={[{ color: theme.color }, { backgroundColor: 'grey' }]} /></View>
            </View>
            <View>
                <Button title="Start" />
            </View>
            <View>
                <Button title="Esqueceu a senha?" />
                <Button title="Cadastart" onPress={() => navigation.navigate('Cadastro')} />
            </View>
            <View>
                <Image source={require('../../img/Greenhill.png')} style={{ width: '100%', height: '64%' }} />
            </View>

        </View>
    )
}