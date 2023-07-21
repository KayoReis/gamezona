import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return (
    <View style={style.containe}>
      <Text>
        Oi
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  containe:{
    paddingVertical:10,
    paddingHorizontal:20
  }
})