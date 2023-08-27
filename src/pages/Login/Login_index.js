import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";
import { Estilo } from "./login_style";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Login({ navigation }) {
  const theme = useContext(ThemeContext);
  const [fontsLoaded] = useFonts({
    Bungee: require("../../../assets/fonts/Bungee-Regular.ttf"),
    Arcade: require("../../../assets/fonts/PublicPixel-z84yD.ttf"),
    GameStation: require("../../../assets/fonts/GamestationCond.otf")
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync;
    }
    prepare();
  }, []);
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <View style={{ flex: 50 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../img/perfil_selected.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={Estilo.texto_login}>
        <Text
          style={[
            { color: theme.color },
            { textShadowColor: theme.sombra },
            {
              paddingLeft: 30,
              paddingRight: 30,
              fontSize: 40,
              fontWeight: "500",
              textShadowRadius: 10,
              textTransform: "capitalize",
              letterSpacing: 3.5,
              textAlign: "justify",
              fontFamily: "Bungee",
            },
          ]}
        >
          Login
        </Text>
      </View>

      <View>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={40}
          style={Estilo.inputs_form}
        >
          <TextInput
            placeholder="E-mail/nick"
            placeholderTextColor={"black"}
            style={[{ backgroundColor: theme.input_border,fontFamily:'GameStation',fontSize:24 }, Estilo.inputs]}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor={"black"}
            style={[{ backgroundColor: theme.input_border,fontFamily:'GameStation',fontSize:24 }, Estilo.inputs]}
          />
        </KeyboardAvoidingView>
      </View>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../img/Green.png")}
        style={{ justifyContent: "center" }}
      >
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}
            style={[Estilo.logar_button, { borderColor: theme.button_border }]}
          >
            <Text style={[Estilo.logar_text, { fontFamily: "Arcade" }]}>
              START
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[{ flexDirection: "row-reverse" }, Estilo.text_options]}>
          <TouchableOpacity>
            <Text style={[{fontFamily:"Arcade",fontSize:10},Estilo.option_style]}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={[{fontFamily:"Arcade",fontSize:10},Estilo.option_style]}> Cadastart</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
