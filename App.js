import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from "./ToDo"

const {height, width} = Dimensions.get("window");//전체 window 크기

export default class App extends Component {
  
  state = {
    newtodo : ""
  };
  _controlNewTodo = text => {
    this.setState({
      newtodo : text
     }
    )
  };
  render(){
    const { newtodo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Cute TodoList</Text>
        <View style={styles.card}>
        <TextInput 
            style={styles.newinputTxt} 
            placeholder={"New To do"} 
            value = {newtodo}
            onChangeText ={this._controlNewTodo}
            placeholderTextColor = {"#999"}
            returnKeyType={"done"}  
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos} >
            <ToDo/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title:{
    color:"white",
    fontSize:30,
    marginTop:50,
    fontWeight:"200",
    marginBottom:30
  },
  newinputTxt : {
    padding: 20,
    borderBottomColor: "#bbbb",
    borderBottomWidth: 1,
    fontSize : 25,
    
  },
  card : {
    backgroundColor:"white",
    flex:1,
    width:width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowOffset:{
          height:-1,
          width:1
        }
      },
      android : {
        elevation:3
      }
    })
  },
  toDos : {
    alignItems : "center"
  }
  
});
