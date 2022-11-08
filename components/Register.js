import React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Register() {

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.header}>Blog</Text>
      </View>
      <View >
        <TextInput 
        placeholder='UserName' 
        placeholderTextColor="#BEBDC0"
        autoComplete='gmail'
        style={Styles.textInputBox}
        />
        <TextInput 
        placeholder='Email' 
        placeholderTextColor="#BEBDC0"
        autoComplete='gmail'

        style={Styles.textInputBox}
        />
        <TextInput 
          placeholder="Password"
          placeholderTextColor="#BEBDC0"
          returnKeyType='go'
          secureTextEntry
          autoCorrect={false} 
          style={Styles.textInputBox}
        />
        <TextInput 
          placeholder="Re enter Password"
          placeholderTextColor="#BEBDC0"
          returnKeyType='go'
          secureTextEntry
          autoCorrect={false} 
          style={Styles.textInputBox}
          
        />
      </View>

      <View >
        <TouchableOpacity style={Styles.logInButton}>
          <Text style={Styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginBottom:40
  },
  header:{
      color:'#323232',
      fontFamily:'Arial',
      fontSize:40,
      fontWeight:'bold',
  },

  textInputBox:{
      backgroundColor:'',
      padding:15,
      marginTop:15,
      width:windowWidth-30,
      fontSize:20,
      borderWidth:2,
      borderColor:'#BEBDC0',
      borderRadius:10,
  },

  logInButton:{
    marginTop:25,
    backgroundColor:'#6565F1',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:50,
    paddingRight:50,
    borderRadius:50, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btnText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:2,
  },


  // logo: {
  //   height: 128,
  //   width: 128,
  // }
});
