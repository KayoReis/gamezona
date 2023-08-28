import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  LogBox,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";
import { useFonts } from "expo-font";
import { style } from "./Cadastro_style";
import * as SplashScreen from "expo-splash-screen";

export default function Cadastro({ navigate }) {
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
    <View>
      <View style={[style.head_view]}>
        <Text
          style={[
            {
              color: theme.color,
              fontFamily: "Bungee",
              fontSize: 30,
              textShadowColor: theme.sombra,
              textShadowRadius: 5,
              letterSpacing: 3.5,
              textAlign: "justify",
              fontWeight: "500",
            },
          ]}
        >
          Cadastro
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={40}
        style={[style.form]}
      >
        <View style={[style.form_view]}>
          <Text
            style={[
              {
                color: theme.color,
                fontFamily: "Bungee",
              },style.form_label
            ]}
          >
            E-mail
          </Text>
          <TextInput
            placeholder="Erick_Hp74@gmail.com"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            style={[
              { backgroundColor: theme.input_border, fontFamily: "GameStation" },
              style.inputs,
            ]}
          />
        </View>
        <View style={[style.form_view,{marginTop:25}]}>
          <Text style={[{color: theme.color,
                fontFamily: "Bungee"},style.form_label]}>
                  Nick
                </Text>
                <TextInput
            placeholder="Erick_hero"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            style={[
              { backgroundColor: theme.input_border, fontFamily: "GameStation" },
              style.inputs,
            ]}
          />
        </View>
        <View style={[style.form_view,{marginTop:25}]}>
          <Text style={[{color: theme.color,
                fontFamily: "Bungee"},style.form_label]}>
                  Senha
                </Text>
                <TextInput
            placeholder="********"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            keyboardType="visible-password"
            style={[
              { backgroundColor: theme.input_border, fontFamily: "GameStation" },
              style.inputs,
            ]}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <Image/>
          <View style={{flexDirection:"column"}}>
            <Text>SUA SENHA DEVE CONTER:</Text>
            <Text>8 ou + caracteres</Text>
            <Text>Letra Maiscula</Text>
            <Text>Número</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
