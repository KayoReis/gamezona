import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Carousel from "../../Components/Carousel";



export default function Home() {
    const data = [{ image: require('../../img/Home_carrousel/Geraldao.jpg') },
    {
        image: require("../../img/Home_carrousel/Geraldao.jpg")
    },
    { image: require("../../img/Home_carrousel/Geraldao.jpg") }];

    let numero = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    alert(numero);
    let gif;
    let teste ='Foda-se'
    switch (numero) {
        case 1:
           gif=<View><Text>oi</Text><Image source={require('../../img/favicon.png')}/></View>
            break;
        case 2:
            
        gif=<View><Text>oi</Text><Image source={require('../../img/shop.png')}/></View>
            break;
        case 3:
            gif=<View><Text>oi</Text><Image source={require('../../img/hand.png')}/></View>
            break;
        case 4:
            gif=<View><Text>oi</Text><Image source={require('../../img/among-us-fortnite.gif')}/></View>
            break;
        case 5:
            gif=<View><Text>oi</Text><Image source={require('../../img/Greenhill.png')}/></View>
            break;
        default:
            break;
    }
    return (
        <ScrollView>
            <View>
                <View>
                    <View id="fi"></View>
                    <Text>Bem-Vindo de volta, {teste}</Text>
                    <Text>Qual a boa?</Text>
                </View>
                {gif}
                
                <View>
                    <View>
                        <Image source={require("../../img/Home_initial/Spider.jpg")} style={{ width: "100%", height: undefined, aspectRatio: 1.7 }} />
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
                        <View style={{ height: "74%" }}>
                            <Carousel data={data} />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}