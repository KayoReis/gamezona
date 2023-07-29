//imports
import React from 'react';
import { StyleSheet,StatusBar,Image,View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home/home_index'
import Shop from './src/pages/Shop/shop_index'
import { NavigationContainer,DarkTheme,DefaultTheme } from '@react-navigation/native';
import Login from './src/pages/Login/Login_index'
import Perfil from './src/pages/Perfil/perfil_index';
import Community from './src/pages/Community/community_index';
import Game from './src/pages/Game/game_index';
//constates e variaveis
const Tab=createBottomTabNavigator()
//functions
//executavel
export default function App(){
  return (
    //login na navegção apenas para teste
    <NavigationContainer theme={DefaultTheme}  >
      <StatusBar barStyle={'light-content'}/>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel:false}} >
      <Tab.Screen name='Login' component={Login} />



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
const style = StyleSheet.create({
  containe:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor: "#000000"
  }
})