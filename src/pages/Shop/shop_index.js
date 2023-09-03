import React from "react";
import { View,Text } from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";

export default function Shop(){
    const theme = useContext(ThemeContext)
    return(
        <View><Text style={[{color:theme.color}]}>Essa é a página de loja (Necessario um banco de dado e uma api)</Text></View>
    )
}