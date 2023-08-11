import React from "react";
import { View,Text,Image,Button,TextInput } from "react-native";




export default function Login({navigation}){
    return(
        <View>
            <View style={{paddingStart:"25%"}}>
                <Image source={require('../../img/perfil_selected.png')} style={{ width: 200, height: 200,}}/>
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
                <Button title="Cadastart" onPress={()=>navigation.navigate('Cadastro')}/>
            </View>
            <View>
                <Image source={require('../../img/Greenhill.png')}/>
            </View>
            
        </View>
    )
}