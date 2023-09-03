import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const style = StyleSheet.create({
  viewicon_direita: {
    marginLeft: 15,
    alignItems: "center",
  },
  icon_image: {
    width: 45,
    height: 45,
  },
  console_text: {
    fontFamily: "GameStation",
    fontSize: 17,
    fontWeight: "600",
    alignSelf: "center",
    textAlign: "center",
  },
  viewicon_down: {
    marginVertical: 15,
    alignItems: "center",
  },
  buttons: {
    alignItems: "center",
    borderRadius: 2,
    justifyContent: "center",
    width: "40%",
    backgroundColor: "#1c1c1c",
    marginLeft: "7%",
    paddingTop: 0,
    paddingBottom: 1,
    borderWidth: 2,
  },
  button_text: {
    fontFamily: "Arcade",
    fontSize: 12,
    textAlign: "center",
    color: "white",
    marginVertical: 2,
  },
  perfil_info: {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: "14%",
    marginVertical: 15,
  },
  number_info: {
    fontFamily: "GameStation",
    fontSize: 24,
  },
  text_info: {
    fontFamily: "Cristik",
    fontSize: 18,
  },
  carousel_view: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical:10,
    marginLeft:"5%"
  },
  carousel_icon:{
    width:54,
    height:54
  },
  carousel_text:{
    fontFamily:"Cristik",
    fontSize: 18,
    marginLeft:10
  },
  carousel:{
    height:200,
    paddingRight:50,
    marginVertical:5
  }
});
