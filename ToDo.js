import React, { Component } from "react"
import {View,Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native"

const {width, height} = Dimensions.get("window")
export default class ToDo extends Component{
    state = {
        isEditing:false,
        isCompleted:false
    }
    render(){
        const { isCompleted } = this.state;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[style.circle, isCompleted ? styles.complteCircle : styles.uncomplteCircle]}></View>
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm a To do</Text>
            </View>
        )
    }
    _toggleComplete = () => {
        this.setState(prevtate=>{
            return {
                isCompleted : !prevtate.isCompleted 
            }
        })
    }
   
}

const styles = StyleSheet.create({
    container : {
        width : width-50,
        borderBottomColor:"#bbbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row"
    
    },
    circle : {
        width:30,
        height:30,
        borderRadius:15,
        borderColor : "red",
        borderWidth:3,
        marginRight:20
    },
    complteCircle :{
        borderColor : "#bbb"
    },
    uncomplteCircle : {
        borderColor : "#F23657"
    },
    text : {
        fontWeight:"600",
        fontSize:20,
        marginVerticall:20
    }
});

