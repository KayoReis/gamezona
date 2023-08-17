import React from "react";
import { View, Text, Image, ScrollView,useWindowDimensions } from "react-native";
import Carousel from "../../Components/Carousel";
import { style } from "./home_style";
import { useContext } from "react";
import ThemeContext from "../../Components/context/Theme";


export default function Home() {
    const theme = useContext(ThemeContext)
    const {height}=useWindowDimensions()
    const SIZE = height*0.30
    const data = [{ image: require('../../img/Home_carrousel/Geraldao.jpg') },
    {
        image: require("../../img/Home_carrousel/Geraldao.jpg")
    },
    { image: require("../../img/Home_carrousel/Geraldao.jpg") }];

    let numero = Math.floor(Math.random() * (5 - 1 + 1) + 1);
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
                    <Text style={[{color:theme.color}]}>Bem-Vindo de volta, {teste}</Text>
                    <Text style={[{color:theme.color}]}>Qual a boa?</Text>
                </View>
                {gif}
                
                <View>
                    <View>
                        <Image source={require("../../img/Home_initial/Spider.jpg")} style={{ width: "100%", height: SIZE }} />
                    </View>
                    <View>
                        <Text style={[{color:theme.color}]}>Ultima vez jogado: xx/xx/xxxx-xx:xx
                        </Text>
                        <Text style={[{color:theme.color}]}>
                            Ultima Conquista: xxxxxxxxxx
                        </Text>
                        <Text style={[{color:theme.color}]}>
                            Progresso: xx%
                        </Text>
                    </View>
                    <View>
                        <Text style={[{color:theme.color}]}>
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