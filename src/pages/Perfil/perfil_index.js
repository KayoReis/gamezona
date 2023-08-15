import React,{useState} from "react";
import { View, Text, Image, Button, ScrollView,Pressable } from "react-native";
import _default from "react-native-restart";



export var Esquemacor = true

export default function Perfil() {
    [Esquemacor,setEsquemacor]=useState(null)
    
    return (
        
        <ScrollView>
            <View>
                <View style={{marginStart:370}}>
                    <Pressable onPress={()=> {setEsquemacor(Esquemacor===false?true:false);}}>
                    <Image source={require('../../img/Config.png')} style={{width:32,height:32}}/>
                </Pressable>
                </View>
                <View>
                    <Pressable onPress={()=> alert(Esquemacor)}>
                    
                    <Image source={require('../../img/perfil_selected.png')} style={{width:200,height:200,borderRadius:100,}} />
                    </Pressable>               
                </View>

                <View>
                    <Text> Nickname</Text>
                </View>
                <View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text>
                            Playstation_nick
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text>
                            Xbox_nick
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text>
                            Steam_nick
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Image source={require('../../img/perfil_selected.png')} />
                        </View>
                        <Text>
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
                        <Text>27</Text>
                        <Text>Consquitas</Text>
                    </View>
                    <View>
                        <Text>98</Text>
                        <Text>Jogos</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Carousel_Playstation</Text>
                    </View>
                    <View>
                        <Text>Carousel_Steam</Text>
                    </View>
                    <View>
                        <Text>Carousel_Xbox</Text>
                    </View>
                    <View>
                        <Text>Carousel_Nintendo</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}