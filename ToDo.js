import React, { Component } from "react"
import {View,Text, StyleSheet, Dimensions, TouchableOpacity, TextInput} from "react-native";
import PropType from  "prop-types";

const {width, height} = Dimensions.get("window")
export default class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {isEditing:false,toDoValue:props.text}
    }
    
    static propTypes = {
        text: PropType.string.isRequired,
        isCompleted:PropType.bool.isRequired,
        deteleToDo:PropType.func.isRequired,
        id:PropType.string.isCompleted,
        uncompleteToDo:PropType.func.isRequired,
        completeToDo:PropType.func.isRequired,
        updateToDo : PropType.func.isRequired
    };
    state = {
        isEditing:false,
        toDoValue:""
    }
    render(){
        const {isEditing, toDoValue} = this.state;
        const {text, id, deteleToDo, isCompleted } = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[styles.circle, isCompleted ? styles.complteCircle : styles.uncomplteCircle]}></View>
                    </TouchableOpacity>
                    {isEditing ? 
                    (<TextInput 
                        style={[
                             styles.text, styles.input,
                            isCompleted ? styles.complteText : styles.uncomplteText
                        ]} 
                        placeholder={"Hello I'm To do"}
                        value={toDoValue} multiline={true}
                        onChangeText={this._controollInput}
                        returnKeyType={"done"}
                        onBlur={this._finishEditing}
                        />) : 
                    (
                        <Text style={[styles.text, isCompleted ? styles.complteText : styles.uncomplteText]}>
                            {text}
                        </Text>
                    )}
                </View>
                    {isEditing  ? (
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={this._finishEditing}>
                                <View style={styles.actionsContainer}>
                                    <Text style={styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ) : (
                    <View style={styles.actions}>
                            <TouchableOpacity onPress={this._startEditing}>
                                <View style={styles.actionsContainer}>
                                    <Text style={styles.actionText}>✏</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPressOut={()=>deteleToDo(id)}>
                                <View style={styles.actionsContainer}>
                                    <Text style={styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                     </View>
                    )}
                </View>
        )
    }
    _toggleComplete = () => {
       const {isCompleted, uncompleteToDo, completeToDo, id} = this.props;
       if(isCompleted){
           uncompleteToDo(id);
       }
       else completeToDo(id)
    };
    _startEditing = () =>{
        const { text } = this.props;

        this.setState({
            isEditing: true,
            toDoValue : text
        })
    }
    _finishEditing = () => {
        const{toDoValue} = this.state;
        const{id, updateToDo} = this.props;
        updateToDo(id, toDoValue);
        this.setState({
            isEditing: false
        })
    }
   _controollInput = text => {
       this.setState({
           toDoValue : text
       })
   }
  
}

const styles = StyleSheet.create({
    container : {
        width : width-50,
        borderBottomColor:"#bbbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection:"row",
        alignItems : "center",
        justifyContent:"space-between"
    },
    circle : {
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:3,
        margin:20
    },
    complteCircle :{
        borderColor : "#bbb",
    },
    uncomplteCircle : {
        borderColor : "#F23657"
    },
    text : {
        fontWeight:"600",
        fontSize:20,
        marginVertical:20
    },
    complteText :{
        borderColor : "#bbb",
        textDecorationLine : "line-through"
    },
    uncomplteText : {
        borderColor : "#353839"
    },
    column : {
        flexDirection:"row",
        alignItems:"center",
        width:width/2,
    },
    actions:{
        flexDirection:"row"
    },
    actionsContainer:{
        marginVertical:10,
        marginHorizontal:10
    },
    input : {
        marginVertical : 15,
        width:width/2
    }

});

