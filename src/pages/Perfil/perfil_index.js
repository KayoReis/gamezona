import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";

export default function Perfil() {
    return (
        <ScrollView>
            <View>
                <View>
                    <Image source={require('../../img/perfil_selected.png')} />
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