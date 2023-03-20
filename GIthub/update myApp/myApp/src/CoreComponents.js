import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Gambar from "../img/megachan.jpg";

function CoreComponents(){
    const tes  = "WASSUP DUDE";
    return (
        <ScrollView>
            <View>
                <Text>{tes}</Text>
                <Text>Testing</Text>
                <View style={{width:500, height:100, backgroundColor:'red'}}/>
                <View style={{width:500, height:100, backgroundColor:'black'}}/>
                <Image 
                    source ={require("../img/megachan.jpg")} 
                    style={{width: 500, height:200}}/>
                <Image 
                    source ={Gambar} 
                    style={{width: 500, height:200}}/>
                <Image 
                    source ={Gambar} 
                    style={{width: 500, height:200}}/>
                <Image 
                    source ={Gambar} 
                    style={{width: 500, height:200}}/>
                <Image 
                    source ={Gambar} 
                    style={{width: 500, height:200}}/>
            </View>
        </ScrollView>
    )
};
export default CoreComponents;