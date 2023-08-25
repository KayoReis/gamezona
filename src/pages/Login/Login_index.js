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
              fontSize: 40,
              fontWeight: "500",
              textShadowRadius: 15,
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
            style={[{ backgroundColor: theme.input_border }, Estilo.inputs]}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor={"black"}
            style={[{ backgroundColor: theme.input_border }, Estilo.inputs]}
          />
        </KeyboardAvoidingView>
      </View>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../img/Greenhill.png")}
        style={{  justifyContent: "center",height:300 }}
      >
        <View>
          <TouchableOpacity
            style={[Estilo.logar_button, { borderColor: theme.button_border }]}
          >
            <Text style={[Estilo.logar_text]}>Start</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:"row-reverse" }}>
          <TouchableOpacity >
            <Text>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate("Cadastro")}>
            <Text> Cadastart</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
