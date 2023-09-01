import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Text,
} from "react-native";
import { useContext, useEffect } from "react";
import ThemeContext from "./context/Theme";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function Carousel({ data }) {
  const [newData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.7;
  const SPACER = (width - SIZE) / 2;
  const theme = useContext(ThemeContext);
  const [fontsLoaded] = useFonts({
    Bungee: require("../../assets/fonts/Bungee-Regular.ttf"),
    Arcade: require("../../assets/fonts/PublicPixel-z84yD.ttf"),
    GameStation: require("../../assets/fonts/GamestationCond.otf"),
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
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={SIZE}
      decelerationRate={"fast"}
    >
      {newData.map((item, index) => {
        if (!item.image) {
          return <View style={{ width: SPACER }} key={index} />;
        }
        return (
          <View style={{ width: SIZE }} key={index}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <View
                style={{
                  alignItems: "center",
                  alignContent: "center",
                  alignSelf: "flex-start",
                  backgroundColor: theme.input_border,
                  paddingRight: 0.5,
                  borderWidth: 2,
                  marginBottom: 10,
                  borderLeftColor: "#228b22",
                  borderRightColor: "#228b22",
                  borderBottomColor: "#228b22",
                }}
              >
                <Text style={[styles.text, { color: theme.color }]}>
                  {item.text}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 0,
    overflow: "hidden",
  },
  image: {
    width: "95%",
    height: undefined,
    aspectRatio: 1,
  },
  text: {
    fontFamily: "GameStation",
    fontSize: 19,
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
});
