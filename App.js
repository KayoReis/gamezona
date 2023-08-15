//imports
import React, { useCallback } from 'react';
import { StyleSheet,StatusBar,Image,View,Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/home_index'
import Shop from './src/pages/Shop/shop_index'
import { NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login/Login_index'
import Perfil from './src/pages/Perfil/perfil_index';
import Community from './src/pages/Community/community_index';
import Game from './src/pages/Game/game_index';
import { useState } from 'react';
import Cadastro from './src/pages/Cadastro/Cadastro_index';
import { Esquemacor } from './src/pages/Perfil/perfil_index';

var auxilio = false
//constates e variaveis
const Tab=createBottomTabNavigator()
const LoginStack=createStackNavigator()
//tema
const Temaclaro = {
  dark:false,
  colors: {
    background: 'rgb(192,192,192)',
    card: 'rgb(128,128,128)',
    text: 'rgb(0,0,0)',
    border: 'rgb(0,0,0)',
    notification: 'rgb(255,0,0)'
  },
};
const Temaescuro = {
  dark:true,
  colors: {
    background: 'rgb(0,0,0)',
    card: 'rgb(54,54,54)',
    text: 'rgb(0,0,0)',
    border: 'rgb(255,255,255)',
    notification: 'rgb(255,0,0)'
  },
};

//functions
export function LoginStackScreen(){
  return(
  <LoginStack.Navigator screenOptions={{headerShown: false, animation:'none'}} initialRouteName='Login'>
      <LoginStack.Screen name="Login" component={Login}/>
      <LoginStack.Screen name="Cadastro" component={Cadastro}/>
  </LoginStack.Navigator>
  )
}
//executavel
export default function App(){
  if(Esquemacor==true){
    auxilio= Temaescuro

  }else{
    auxilio= Temaclaro
  }
  
  return (
    //login na navegção apenas para teste
    <NavigationContainer theme={auxilio}  >
      
      <StatusBar hidden={true}  />
     
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false}} >
      <Tab.Screen name='LoginStack' component={LoginStackScreen} />
      


      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon:({focused,size})=>(
          <View  style={size={size}}>
          <Image  source={focused? require('./src/img/home_color.png'):require('./src/img/Home_nocolor.png')}/>
          </View>
        )}} />
      <Tab.Screen name='Loja' component={Shop} options={{
        tabBarIcon:({focused,size})=>(
          <View style={size=10000} >
          <Image source={focused? require('./src/img/shop_color.png'):require('./src/img/shop.png')}/>
          </View>
        )}}/>
      <Tab.Screen name='Comunidade' component={Community} options={{
        tabBarIcon:({focused,size})=>(
          <View  style={size={size}}>
          <Image  source={focused? require('./src/img/hand_color.png'):require('./src/img/hand.png')}/>
          </View>
        )}}/>
      <Tab.Screen name='Perfil' component={Perfil} options={{
        tabBarIcon:({focused,size})=>(
          <View  style={size={size}}>
          <Image  source={focused? require('./src/img/perfil_selected.png'):require('./src/img/perfil_unselected.png')}/>
          </View>
        )}}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
//estilo da pagina
