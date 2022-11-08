import React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CreatePost=()=>{
  return (
    <View style={Styles.container}>
      <TextInput 
        placeholder='Enter Title' 
        placeholderTextColor="#BEBDC0"
        
        style={Styles.textInputBox}
      />
      <View >
      <TextInput 
          placeholder="What's on your mind..." 
          multiline
          placeholderTextColor="#BEBDC0"
          
          style={Styles.textInputBoxBlog}
      />
      <TextInput 
        placeholder='Author' 
        placeholderTextColor="#BEBDC0"
        
        style={Styles.textInputAuthor}
      />
      </View>
      <View style={Styles.btnContainer}>
        <TouchableOpacity style={Styles.doneButton}>
          <Text style={Styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>

      </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    marginTop:50
  },
  textInputBox:{
      fontWeight:600,
      padding:15,
      paddingLeft:5,
      marginTop:20,
      width:windowWidth-10,
      fontSize:20,
      border:'none',
      color:'#323232',
  },
  textInputBoxBlog:{
      color:'#A0A0A0',
      backgroundColor:'white',
      width:windowWidth-10,
      height:windowHeight-500,
      padding:50,
      paddingLeft:5,
      marginTop:15,
      fontSize:18,
  },
  textInputAuthor:{
      color:'#A0A0A0',
      backgroundColor:'white',
      width:windowWidth-10,
      padding:15,
      paddingLeft:10,
      marginTop:15,
      
      fontSize:18,
  },

  doneButton:{
    marginTop:40,
    backgroundColor:'#6565F1',
    width:120,
    paddingTop:12,
    paddingBottom:12,
    paddingLeft:5,
    paddingRight:5,
    borderRadius:8, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btnText:{
    color:'white',
    fontSize:18,
    fontWeight:'500',
    marginTop:2,
  },
  btnContainer: {
    backgroundColor:'white',
    marginTop:1,
    alignItems:'flex-end',
    marginRight:15,
  },


  // logo: {
  //   height: 128,
  //   width: 128,
  // }
});
export default CreatePost;