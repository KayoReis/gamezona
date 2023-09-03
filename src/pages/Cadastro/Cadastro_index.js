import React, { useEffect, useState } from "react";
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
import CheckBox from "../../Components/Checkbox";

export default function Cadastro({ navigation }) {
  const [check, setCheck] = useState(false);
  function handleCheck() {
    setCheck(!check);
  }
  const theme = useContext(ThemeContext);
  const [fontsLoaded] = useFonts({
    Bungee: require("../../../assets/fonts/Bungee-Regular.ttf"),
    Arcade: require("../../../assets/fonts/PublicPixel-z84yD.ttf"),
    GameStation: require("../../../assets/fonts/GamestationCond.otf"),
    Cristik: require("../../../assets/fonts/Cristik.ttf"),
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
              },
              style.form_label,
            ]}
          >
            E-mail
          </Text>
          <TextInput
            placeholder="Erick_Hp74@gmail.com"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            style={[
              {
                backgroundColor: theme.input_border,
                fontFamily: "GameStation",
              },
              style.inputs,
            ]}
          />
        </View>
        <View style={[style.form_view, { marginTop: 25 }]}>
          <Text
            style={[
              { color: theme.color, fontFamily: "Bungee" },
              style.form_label,
            ]}
          >
            Nick
          </Text>
          <TextInput
            placeholder="Erick_hero"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            style={[
              {
                backgroundColor: theme.input_border,
                fontFamily: "GameStation",
              },
              style.inputs,
            ]}
          />
        </View>
        <View style={[style.form_view, { marginTop: 25 }]}>
          <Text
            style={[
              { color: theme.color, fontFamily: "Bungee" },
              style.form_label,
            ]}
          >
            Senha
          </Text>
          <TextInput
            placeholder="********"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            keyboardType="visible-password"
            style={[
              {
                backgroundColor: theme.input_border,
                fontFamily: "GameStation",
              },
              style.inputs,
            ]}
          />
        </View>
        <View style={[{ flexDirection: "row" }, style.form_view]}>
          <Image source={require("../../img/warning.png")} />
          <View style={{ flexDirection: "column" }}>
            <Text style={[{ fontFamily: "Cristik" }, style.warning_text]}>
              SUA SENHA DEVE CONTER:
            </Text>
            <Text style={[{ fontFamily: "Cristik" }, style.warning_text]}>
              8 ou + caracteres
            </Text>
            <Text style={[{ fontFamily: "Cristik" }, style.warning_text]}>
              Letra Maiscula
            </Text>
            <Text style={[{ fontFamily: "Cristik" }, style.warning_text]}>
              Numero
            </Text>
          </View>
        </View>
        <View style={[style.form_view, { marginTop: 25 }]}>
          <Text
            style={[
              { color: theme.color, fontFamily: "Bungee", fontSize: 11 },
              style.form_label,
            ]}
          >
            Confirme a Senha
          </Text>
          <TextInput
            placeholder="*******"
            placeholderTextColor={"black"}
            cursorColor={"purple"}
            style={[
              {
                backgroundColor: theme.input_border,
                fontFamily: "GameStation",
              },
              style.inputs,
            ]}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={style.form_view}>
        <CheckBox
          label="Li e concordo com os termos de uso"
          labelStyle={{
            color: theme.color,
            fontSize: 20,
            fontFamily: "GameStation",
          }}
          iconColor="#00abff"
          checkColor="#00abff"
          value={check}
          onChange={handleCheck}
        />
      </View>
      <View style={{ marginLeft: 60, marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontFamily: "Cristik", color: "#00abff" }}>
            Termos de uso
          </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../../img/stage.png")}
        resizeMode="stretch"
        style={{ height: "50%" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[style.cadastro_button, { borderColor: theme.button_border }]}
        >
          <Text style={[style.cadastro_text, { fontFamily: "Arcade" }]}>
            INSERT A COIN
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
