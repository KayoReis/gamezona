import React,{useState} from "react";
import { View, Text, Image, Button, ScrollView,Pressable } from "react-native";
import { useContext } from "react";
import ThemeContext  from "../../Components/context/Theme";
import { EventRegister } from "react-native-event-listeners";

export default function Perfil() {
    const theme = useContext(ThemeContext)
    const [darkMode,setDarkMode] = useState(false)
    return (
        
        <ScrollView>
            <View>
                <View style={{marginStart:370}}>
                    <Pressable  onPress={()=>{darkMode===true?setDarkMode(false):setDarkMode(true);
                        EventRegister.emit('ChangeTheme',darkMode)}}>
                    <Image source={require('../../img/Config.png')} style={{width:undefined,height:undefined,aspectRatio:1}}/>
                </Pressable>
                </View>
                <View>
                  
                    
                    <Image source={require('../../img/perfil_selected.png')} style={{width:200,height:200,borderRadius:100,}} />
                 
                </View>

                <View>
                    <Text style={[{color:theme.color}]}> Nickname</Text>
                </View>
                <View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text style={[{color:theme.color}]}>
                            Playstation_nick
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text style={[{color:theme.color}]}>
                            Xbox_nick
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text style={[{color:theme.color}]}>
                            Steam_nick
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text style={[{color:theme.color}]}>
                            Nintendo_nick
                        </Text>
                    </View>

                </View>
                <View>
                    <View>
                        <Button title="Editar perfil" />
                        <Button title="Conectar contas" />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <View>
                        <Text style={[{color:theme.color}]}>27</Text>
                        <Text style={[{color:theme.color}]}> Consquitas</Text>
                    </View>
                    <View>
                        <Text style={[{color:theme.color}]}>98</Text>
                        <Text style={[{color:theme.color}]}>Jogos</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={[{color:theme.color}]}>Carousel_Playstation</Text>
                    </View>
                    <View>
                        <Text style={[{color:theme.color}]}>Carousel_Steam</Text>
                    </View>
                    <View>
                        <Text style={[{color:theme.color}]}>Carousel_Xbox</Text>
                    </View>
                    <View>
                        <Text style={[{color:theme.color}]}>Carousel_Nintendo</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}