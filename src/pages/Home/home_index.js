import React from "react";
import { View, Text, Image,ScrollView } from "react-native";
import Carousel from "../../Components/Carousel";



export default function Home() {
    const data = [{ image: require('../../img/Home_carrousel/Geraldao.jpg') },
    {
        image: require("../../img/Home_carrousel/Geraldao.jpg")
    },
    { image: require("../../img/Home_carrousel/Geraldao.jpg") }]
    return (
        <ScrollView>
        <View>
            <View>
                <Text>Bem-Vindo de volta, usuário</Text>
                <Text>Qual a boa?</Text>
            </View>
            <View>
              <View>
                <Image source={require("../../img/Home_initial/Spider.jpg")} style={{width:"100%",height:undefined,aspectRatio:1.7}}  />
               </View>
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
                    <View style={{height:"74%"}}>
                        <Carousel data={data}/>
                    </View>
                </View>
            </View>
           
        </View>
        </ScrollView>
    )
}