import React from "react";
import { View,Text,Image } from "react-native";

export default function Perfil(){
    return(
        <View style><Text>Essa é a página de perfil</Text>
        <Image source={require('../../img/among-us-fortnite.gif')} style={{borderRadius:5000}}/>
        <View style={{paddingLeft:'20%'}}>
        <Image source={require('../../img/Home_initial/Spider.jpg')} style={{borderRadius:200,width:200,height:200,padding:100}}/>
        </View>
        </View>
    )
}