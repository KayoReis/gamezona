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
});
