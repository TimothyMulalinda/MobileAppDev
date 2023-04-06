import React from "react";
import {
    Image,
    ScrollView, StyleSheet, Text, View
} from "react-native";
import Gambar from "../img/megachan.jpg";

const CoreComponents = ({title, subTitle}) =>{
    return ( 
        <ScrollView>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
                <View style={styles.redBox}/>
                <View style={styles.blackBox}/>
                <Image 
                    source ={require("../img/megachan.jpg")} 
                    style={styles.megachan}/>
                <Image 
                    source ={Gambar} 
                    style={styles.megachan}/>
                <Image 
                    source ={Gambar} 
                    style={styles.megachan}/>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        margin: 20,
        textAlign: 'center',
      },
    subTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        margin: 20,
      },
    redBox:{
        width:500, 
        height:100, 
        backgroundColor:'red',
        flex : 1,
        flexDirection : 'column',
        justifyContent: 'flex-start'
    },
    blackBox:{
        width:500, 
        height:100, 
        backgroundColor:'black'
    },
    megachan:{
        width: 350,
        height:200,
        margin:20,
    }
});

export default CoreComponents;