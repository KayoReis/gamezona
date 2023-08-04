import React from "react";
import { View, Text, Image } from "react-native";


export default function Home() {
    return (
        <View>
            <View>
                <Text>Bem-Vindo de volta, usuário</Text>
                <Text>Qual a boa?</Text>
            </View>
            <View>

                <Image source={require("../../img/Home_initial/Spider.jpg")} style={{ width: "100%", height: "60%" }} />

                <View>
                    <Text>Ultima vez jogado: xx/xx/xxxx-xx:xx
                    </Text>
                    <Text>
                        Ultima Conquista: xxxxxxxxxx
                    </Text>
                    <Text>
                        Progresso: xx%
                    </Text>
                </View>
                <View>
                    <Text>
                        Notícias
                    </Text>
                    <View>
                        
                    </View>
                </View>
            </View>

            <Text>
                essa é a pagina inicial após login
            </Text>
        </View>
    )
}