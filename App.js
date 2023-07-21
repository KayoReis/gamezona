//imports
import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home/home_index'
import Shop from './src/pages/Shop/shop_index'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login/Login_index'
import Perfil from './src/pages/Perfil/perfil_index';
import Community from './src/pages/Community/community_index';
import Game from './src/pages/Game/game.index';
//constates e variaveis
const Tab=createBottomTabNavigator()
//functions
//executavel
export default function App(){
  return (
    //login na navegção apenas para teste
    <NavigationContainer >
      <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='Login' component={Login}/>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Loja' component={Shop}/>
      <Tab.Screen name='Comunidade' component={Community}/>
      <Tab.Screen name='Perfil' component={Perfil}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
//estilo da pagina
const style = StyleSheet.create({
  containe:{
    paddingVertical:10,
    paddingHorizontal:20
  }
})