import React,{Component} from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";


export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {

        }
        
    }
    render(){
        return(
            <View style = {styles.Container}>
                <View style = {styles.AppTitle}>
                    <Text style = {Styles.Apptitletext}> Sports App</Text>
                </View>

            <TouchableOpacity 
            onPress = {()=>{
                this.props.navigation.navigate("Footballscreen")
            }}
            style = {styles.Sportsbutton}>
                
            </TouchableOpacity>
                <TouchableOpacity
                onPress = {()=>{
                    this.props.navigation.navigate("Basketballscreen")
                }}
                style = {styles.Sportsbutton}>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {()=>{
                    this.props.navigation.navigate("AmericanFootballscreen")
                }}
                style = {styles.Sportsbutton}>
                </TouchableOpacity>
                
            </View>
            
            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    AppTitle:{
        jusifyContent:"center",
        alignItems:"center"
    },
    Apptitletext:{
        fontSize:20,
        fontWeight:"bold",
        fontFamily:"arial",
        color:"black",
        marginTop:10
    },
    Sportsbutton:{
        marginTop:40,
        hieght:30,
        width:60,
        backgroundColor:"white",
        jusifyContent:"center",
        alignItems:'center'
    }
})