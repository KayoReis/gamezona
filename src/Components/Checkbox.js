import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes, { func } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CheckBox(props) {
  const syles = StyleSheet.create({
    WrapperCheckBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    CheckBox: {
      width: 25,
      height: 25,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    LabelCheck: {
      color: "#fff",
      marginLeft: 6,
    },
  });

  function handleChange() {
    const { onChange } = props;
    if (onChange) {
      return onChange();
    }
  }

  CheckBox.protoTypes = {
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    iconColor: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    checkColor: PropTypes.string,
  };

  return (
    <View style={syles.WrapperCheckBox}>
      <TouchableOpacity
        onPress={handleChange}
        style={[
          syles.CheckBox,
          { borderColor: props.checkColor ? props.checkColor : "#fff" },
        ]}
      >
        {props.value ? (
          <Icon
            name="check"
            style={{
              fontSize: 16,
              color: props.iconColor ? props.iconColor : "#fff",
            }}
          />
        ) : null}
      </TouchableOpacity>
      <Text style={[syles.LabelCheck, props.labelStyle]}>{props.label}</Text>
    </View>
  );
}
