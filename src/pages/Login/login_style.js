import { StyleSheet } from "react-native";

export const Estilo = StyleSheet.create({
  texto_login: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "lime",
    borderRadius: 50,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  inputs_form: {
    width: "100%",
    height: "auto",
  },
  inputs: {
    width: "90%",
    borderRadius: 10,
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  logar_button: {
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#2E8B57",
    marginLeft: 12,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    marginVertical: 30,
  },
  logar_text: { fontSize: 20, 
    color: "#0000CD" },
  text_options: {
    marginHorizontal: 10,
    marginBottom: 150,
    
  },
  option_style:{
    color:"#00FFFF",
    textShadowRadius:5,
    textShadowColor:'black',
    textShadowOffset:{width:3},
    paddingBottom:20
  },
});
