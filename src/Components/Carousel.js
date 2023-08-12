import React, { useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView, useWindowDimensions } from "react-native";

export default function Carousel({ data }) {
    const[newData] = useState([{ key: 'spacer-left' }, ...data, { key: 'spacer-right' }])
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER=(width-SIZE)/2
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={16} snapToInterval={SIZE} decelerationRate={'fast'}>
            {newData.map((item, index) => {
                if(!item.image){
                    return <View style={{width:SPACER}} key={index}/>
                }
                return (
                    <View style={{ width: SIZE }} key={index}>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 55,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: "72%",
        aspectRatio: 1,
    }
})