import React from "react";
import { View,Text,Image,Button,TextInput } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";



export default function Login({navigation}){
    const theme = useContext(ThemeContext)
    return(
        <View>
            <View style={{paddingStart:"25%"}}>
                <Image source={require('../../img/perfil_selected.png')} style={{ width: 200, height: 200,}}/>
            </View>
            <View>
                <View><TextInput placeholder="E-mail/nick" style={[{color:theme.color},{backgroundColor:'grey'}]}/></View>
                <View><TextInput placeholder="Senha"  style={[{color:theme.color},{backgroundColor:'grey'}]}/></View>
            </View>
            <View>
                <Button title="Start"/>
            </View>
            <View>
                <Button title="Esqueceu a senha?"/>
                <Button title="Cadastart" onPress={()=>navigation.navigate('Cadastro')}/>
            </View>
            <View>
                <Image source={require('../../img/Greenhill.png')} style={{width:'100%',height:'64%'}}/>
            </View>
            
        </View>
    )
}