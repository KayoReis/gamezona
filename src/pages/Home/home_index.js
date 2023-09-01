import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import Carousel from "../../Components/Carousel";
import { useContext, useEffect } from "react";
import ThemeContext from "../../Components/context/Theme";
import * as SplashScreen from "expo-splash-screen";
import { style } from "./home_style";

export default function Home() {
  const theme = useContext(ThemeContext);
  const [check, Setcheck] = useState("Nada");
  const { height } = useWindowDimensions();
  const SIZE = height * 0.3;
  const data = [
    {
      image: require("../../img/Home_carrousel/Geraldao.jpg"),
      text: "Geras anunciado como novo personagem em Mortal Kombat 1",
    },
    {
      image: require("../../img/Home_carrousel/Geraldao.jpg"),
      text: "Geras anunciado como novo personagem em Mortal Kombat 1",
    },
    {
      image: require("../../img/Home_carrousel/Geraldao.jpg"),
      text: "Geras anunciado como novo personagem em Mortal Kombat 1",
    },
  ];

  let numero = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  let gif;
  let icon;
  numero = 9;

  switch (numero) {
    case 1:
      gif = (
        <View>
          <Image
            source={require("../../img/among.gif")}
            style={{ width: 100, height: 100, marginTop: "50%", marginLeft: 5 }}
          />
        </View>
      );
      break;
    case 2:
      gif = (
        <View>
          <Image
            source={require("../../img/streetf.gif")}
            style={{ width: 135, height: 135 }}
          />
        </View>
      );
      break;
    case 3:
      gif = (
        <View>
          <Image
            source={require("../../img/squirtle.gif")}
            style={{ marginTop: "50%", height: 100, width: 100 }}
          />
        </View>
      );
      break;
    case 4:
      gif = (
        <View>
          <Image
            source={require("../../img/sonic.gif")}
            style={{ marginTop: "50%", height: 100, width: 100 }}
          />
        </View>
      );
      break;
    case 5:
      gif = (
        <View>
          <Image
            source={require("../../img/secktor.gif")}
            style={{ height: 125, width: 73, marginLeft: 10 }}
          />
        </View>
      );
      break;
    case 6:
      gif = (
        <View>
          <Image
            source={require("../../img/mario.gif")}
            style={{ height: 103.75, width: 125, marginTop: 20 }}
          />
        </View>
      );
      break;
    case 7:
      gif = (
        <View>
          <Image
            source={require("../../img/kirby.gif")}
            style={{ width: 100, height: 100, marginTop: 20 }}
          />
        </View>
      );
      break;
    case 8:
      gif = (
        <View>
          <Image
            source={require("../../img/dk.gif")}
            style={{ height: 125, width: 125, marginLeft: 10 }}
          />
        </View>
      );
      break;
      case 9:
        gif = (
          <View>
            <Image source={require("../../img/crash.gif")} style={{height:125,width:125,marginLeft:10}}/>
          </View>)
          break
    default:
      break;
  }
  switch (check) {
    case "Nada":
      icon = (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => Setcheck("Sony")}>
            <Image
              source={require("../../img/Sony.png")}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Steam")}>
            <Image
              source={require("../../img/Steam.png")}
              style={style.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Xbox")}>
            <Image source={require("../../img/Xbox.png")} style={style.icons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Eshop")}>
            <Image
              source={require("../../img/Eshop.png")}
              style={style.icons}
            />
          </TouchableOpacity>
        </View>
      );
      break;
    case "Sony":
      icon = (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => Setcheck("Nada")}>
            <Image
              source={require("../../img/Sony.png")}
              style={{
                width: 32,
                height: 32,
                borderWidth: 2,
                borderColor: "#1e90ff",
                borderRadius: 40,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Steam")}>
            <Image
              source={require("../../img/Steam.png")}
              style={style.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Xbox")}>
            <Image source={require("../../img/Xbox.png")} style={style.icons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Eshop")}>
            <Image
              source={require("../../img/Eshop.png")}
              style={style.icons}
            />
          </TouchableOpacity>
        </View>
      );
      break;
    case "Steam":
      icon = (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => Setcheck("Sony")}>
            <Image
              source={require("../../img/Sony.png")}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Nada")}>
            <Image
              source={require("../../img/Steam.png")}
              style={[
                style.icons,
                { borderWidth: 2, borderColor: "#DCDCDC", borderRadius: 40 },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Xbox")}>
            <Image source={require("../../img/Xbox.png")} style={style.icons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Eshop")}>
            <Image
              source={require("../../img/Eshop.png")}
              style={style.icons}
            />
          </TouchableOpacity>
        </View>
      );
      break;
    case "Xbox":
      icon = (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => Setcheck("Sony")}>
            <Image
              source={require("../../img/Sony.png")}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Steam")}>
            <Image
              source={require("../../img/Steam.png")}
              style={style.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Nada")}>
            <Image
              source={require("../../img/Xbox.png")}
              style={[
                style.icons,
                { borderWidth: 2, borderRadius: 40, borderColor: "#7fff00" },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Eshop")}>
            <Image
              source={require("../../img/Eshop.png")}
              style={style.icons}
            />
          </TouchableOpacity>
        </View>
      );
      break;
    case "Eshop":
      icon = (
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity onPress={() => Setcheck("Sony")}>
            <Image
              source={require("../../img/Sony.png")}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Steam")}>
            <Image
              source={require("../../img/Steam.png")}
              style={[style.icons, { borderWidth: 2 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Xbox")}>
            <Image source={require("../../img/Xbox.png")} style={style.icons} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Setcheck("Nada")}>
            <Image
              source={require("../../img/Eshop.png")}
              style={[
                style.icons,
                { borderWidth: 2, borderRadius: 40, borderColor: "#800000" },
              ]}
            />
          </TouchableOpacity>
        </View>
      );
      break;
  }
  const [fontsLoaded] = useFonts({
    Bungee: require("../../../assets/fonts/Bungee-Regular.ttf"),
    Arcade: require("../../../assets/fonts/PublicPixel-z84yD.ttf"),
    GameStation: require("../../../assets/fonts/GamestationCond.otf"),
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
    <ScrollView>
      <View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <View>
              <Text
                style={[
                  { fontFamily: "Bungee", color: "#70266a", fontSize: 18 },
                ]}
              >
                Bem-Vindo de volta
              </Text>
              <Text
                style={[
                  {
                    color: theme.color,
                    fontFamily: "GameStation",
                    fontSize: 20,
                  },
                ]}
              >
                Qual a boa?
              </Text>
              {icon}
            </View>
          </View>
          <View style={{ marginLeft: 10, marginRight: 10 }}>{gif}</View>
        </View>
        <View>
          <View
            style={{
              marginTop: 10,
              borderTopWidth: 5,
              borderBottomWidth: 3,
              borderColor: "#228b22",
            }}
          >
            <Image
              source={require("../../img/Home_initial/Spider.jpg")}
              style={{ width: "100%", height: SIZE }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 50,
              borderBottomWidth: 2,
              borderBottomColor: theme.input_border,
            }}
          >
            <View
              style={{
                backgroundColor: theme.input_border,
                marginTop: 10,
                borderRadius: 15,
                paddingBottom: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={[
                  { color: theme.color, fontFamily: "GameStation" },
                  style.info_text,
                ]}
              >
                Ultima vez jogado: xx/xx/xxxx-xx:xx
              </Text>
              <Text
                style={[
                  { color: theme.color, fontFamily: "GameStation" },
                  style.info_text,
                ]}
              >
                Ultima Conquista: xxxxxxxxxx
              </Text>
              <Text
                style={[
                  { color: theme.color, fontFamily: "GameStation" },
                  style.info_text,
                ]}
              >
                Progresso: xx%
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                {
                  color: theme.color,
                  fontFamily: "Bungee",
                  marginLeft: 10,
                  fontSize: 20,
                  marginTop: 5,
                  marginBottom: 5,
                },
              ]}
            >
              Notícias:
            </Text>
            <View style={{ height: "74%" }}>
              <Carousel data={data} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
