import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  head_view: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  form: {
    width: "100%",
    height: "auto"
  },
  form_view: {
    alignItems:"center",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 12,
    justifyContent:"space-evenly"
  },
  form_label: {
    flex: 1,
    marginLeft: 5,
  },
  inputs: {
    marginRight:40,
    width: '70%',
    height: 40,
    paddingLeft: 12,
    borderRadius: 12,
    fontSize: 18,
    
  },
  warning_text:{
    color:'#B8921A',
    fontSize:20
  },
  cadastro_button:{
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#2E8B57",
    marginHorizontal:40,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    marginVertical: 30,
  },
  cadastro_text:{
     fontSize: 20, 
      color: "#70266a"
  }
});
