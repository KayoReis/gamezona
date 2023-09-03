import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Pressable,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";
import { EventRegister } from "react-native-event-listeners";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { style } from "./perfil_style";
import Carousel2 from "../../Components/Carousel2";
import { xbox_data,sony_data,nintendo_data,steam_data } from "./perfil_carousels";

export default function Perfil() {
  const theme = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);
  let lamp;

  if (theme.lamp == true) {
    lamp = require("../../img/onLamp.png");
  } else {
    lamp = require("../../img/offLamp.png");
  }
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
    <ScrollView>
      <ImageBackground
        resizeMode="cover"
        source={require("../../img/Walpaper/perfil.png")}
        imageStyle={{
          opacity: theme.opacidade,
          width: "100%",
          height: undefined,
        }}
      >
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: theme.border_color2,
          }}
        >
          <View style={{ marginStart: "85%", marginTop:15 }}>
            <Pressable
              onPress={() => {
                darkMode === false ? setDarkMode(true) : setDarkMode(false);
                EventRegister.emit("ChangeTheme", darkMode);
              }}
            >
              <Image source={lamp} style={{ width: 50, height: 50 }} />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={require("../../img/perfil_selected.png")}
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 60,
                  marginLeft: 10,
                }}
              />
            </View>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  marginHorizontal: 50,
                  marginTop: "25%",
                  backgroundColor: "black",
                  width: 120,
                  height: 45,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={[
                    { color: "white", fontFamily: "GameStation", fontSize: 30 },
                  ]}
                >
                  {" "}
                  Nickname
                </Text>
              </View>
              <View
                style={{ marginTop: "25%", marginLeft: "5%", width: "50%" }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ alignItems: "center" }}>
                    <View>
                      <Image
                        source={require("../../img/Sony.png")}
                        style={[style.icon_image]}
                      />
                    </View>
                    <Text
                      style={[{ color: theme.sonytext }, style.console_text]}
                    >
                      Playstation_nick
                    </Text>
                  </View>
                  <View style={[style.viewicon_direita]}>
                    <View>
                      <Image
                        source={require("../../img/Xbox.png")}
                        style={[style.icon_image]}
                      />
                    </View>
                    <Text
                      style={[{ color: theme.xboxtext }, style.console_text]}
                    >
                      Xbox_nick
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={[style.viewicon_down]}>
                    <View>
                      <Image
                        source={require("../../img/Steam.png")}
                        style={[style.icon_image]}
                      />
                    </View>
                    <Text
                      style={[{ color: theme.steamtext }, style.console_text]}
                    >
                      Steam_nick
                    </Text>
                  </View>
                  <View style={[style.viewicon_direita, style.viewicon_down]}>
                    <View>
                      <Image
                        source={require("../../img/Eshop.png")}
                        style={[style.icon_image]}
                      />
                    </View>
                    <Text
                      style={[
                        { color: theme.nintendotext },
                        style.console_text,
                      ]}
                    >
                      Nintendo_nick
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", marginVertical: 20, height: 38 }}
          >
            <TouchableOpacity
              style={[style.buttons, { borderColor: theme.border_color }]}
            >
              <Text style={[style.button_text]}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.buttons, { borderColor: theme.border_color }]}
            >
              <Text style={[style.button_text]}>Conectar Contas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flexDirection: "row" }}>
        <View style={[style.perfil_info]}>
          <Text style={[{ color: theme.color }, style.number_info]}>27</Text>
          <Text style={[{ color: theme.color }, style.text_info]}>
            Consquitas
          </Text>
        </View>
        <View style={[style.perfil_info]}>
          <Text style={[{ color: theme.color }, style.number_info]}>98</Text>
          <Text style={[{ color: theme.color }, style.text_info]}>Jogos</Text>
        </View>
      </View>
      <View>
        <View style={[style.carousel_view]}>
          <Image
            source={require("../../img/Sony.png")}
            style={[style.carousel_icon]}
          />
          <Text style={[{ color: theme.sonytext },style.carousel_text]}>Playstation</Text>
          </View>
          <View style={[style.carousel]}>
            <Carousel2 data={sony_data}/>
        </View>
        <View style={[style.carousel_view]}>
          <Image
            source={require("../../img/Steam.png")}
            style={[style.carousel_icon]}
          />
          <Text style={[{ color:theme.steamtext },style.carousel_text]}>Carousel_Steam</Text>
          </View>
          <View style={[style.carousel]}>
            <Carousel2 data={steam_data}/>
        </View>
        <View style={[style.carousel_view]}>
          <Image
            source={require("../../img/Xbox.png")}
            style={[style.carousel_icon]}
          />
          <Text style={[{ color:  "#7fff00" },style.carousel_text]}>Carousel_Xbox</Text>
          </View>
          <View style={[style.carousel]}>
          <Carousel2 data={xbox_data}/>
        </View>
        <View style={[style.carousel_view]}>
          <Image
            source={require("../../img/Eshop.png")}
            style={[style.carousel_icon]}
          />
          <Text style={[{ color: theme.nintendotext },style.carousel_text]}>Carousel_Nintendo</Text>
          </View>
          <View style={[style.carousel]}>
            <Carousel2 data={nintendo_data}/>
        </View>
      </View>
    </ScrollView>
  );
}
