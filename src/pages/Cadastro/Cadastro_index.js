import React from "react";
import { Text,View,Image,TextInput,LogBox } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";
export default function Cadastro(navigate){
    const theme = useContext(ThemeContext)
    return(
        <View>
            <View>
                <Text style={[{color:theme.color}]}>deu certo porra</Text>
            </View>
        </View>
    )
}