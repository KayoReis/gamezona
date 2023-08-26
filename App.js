//imports
import React, { useCallback, useEffect } from 'react';
import { StatusBar, Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/home_index'
import Shop from './src/pages/Shop/shop_index'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login/Login_index'
import Perfil from './src/pages/Perfil/perfil_index';
import Community from './src/pages/Community/community_index';
import Game from './src/pages/Game/game_index';
import { useState } from 'react';
import Cadastro from './src/pages/Cadastro/Cadastro_index';
import Theme from './src/Components/Esquemacor';
import ThemeContext from './src/Components/context/Theme';
import { EventRegister } from "react-native-event-listeners";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
//constates e variaveis
const Tab = createBottomTabNavigator()
const LoginStack = createStackNavigator()



//functions
export function LoginStackScreen() {



  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false,animationEnabled:true,animationTypeForReplace:'pop' }} initialRouteName='Login'>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="Cadastro" component={Cadastro} />
    </LoginStack.Navigator>
  )
}
//executavel
export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  

  return (

    //login na navegção apenas para teste
    <ThemeContext.Provider value={darkMode === true ? Theme.dark : Theme.light} >
      < NavigationContainer theme={darkMode === true ? Theme.dark : Theme.light}  >
   
        <StatusBar hidden={true} />
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarHideOnKeyboard:true}} >
          <Tab.Screen name='LoginStack' component={LoginStackScreen}/>



          <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={size = { size }}>
                <Image source={focused ? require('./src/img/home_color.png') : require('./src/img/Home_nocolor.png')} />
              </View>
            )
          }} />
          <Tab.Screen name='Loja' component={Shop} options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={size = 10000} >
                <Image source={focused ? require('./src/img/shop_color.png') : require('./src/img/shop.png')} />
              </View>
            )
          }} />
          <Tab.Screen name='Comunidade' component={Community} options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={size = { size }}>
                <Image source={focused ? require('./src/img/hand_color.png') : require('./src/img/hand.png')} />
              </View>
            )
          }} />
          <Tab.Screen name='Perfil' component={Perfil} options={{
            tabBarIcon: ({ focused, size }) => (
              <View style={size = { size }}>
                <Image source={focused ? require('./src/img/perfil_selected.png') : require('./src/img/perfil_unselected.png')} />
              </View>
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>

    </ThemeContext.Provider>

  );
}
//estilo da pagina
