import React, { Component, useState,useEffect } from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";
import { Estilo } from "./login_style";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'



export default function Login({ navigation }) {
    const theme = useContext(ThemeContext);
    const [fontsLoaded] = useFonts({
        'Bungee': require('../../../assets/fonts/Bungee-Regular.ttf'),
      });
      useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync
        }
        prepare();
      }, [])
      if (!fontsLoaded) {
        return undefined
      } else {
        SplashScreen.hideAsync();
      }
    return (
        <View>
            <View style={{ alignItems:"center",alignContent:"center" }}>
                <Image source={require('../../img/perfil_selected.png')} style={{ width: 200, height: 200, }} />
            </View>
            <View style={Estilo.texto_login}>
                <Text style={[{ color: theme.color }, { textShadowColor: theme.sombra }, { fontSize: 40, fontWeight: '500', textShadowRadius: 15, bottom: 20, textTransform: 'capitalize',letterSpacing:3.5,textAlign:'justify',fontFamily:'Bungee'}]}>Login</Text>
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