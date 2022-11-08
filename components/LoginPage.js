import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Styles from '../Styles/Styles';




export default function LoginPage() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Blog</Text>
      <View>
       <TextInput
          placeholder="Email"
          placeholderTextColor="#BEBDC0"
          autoComplete="gmail"
          style={Styles.textInputBox}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#BEBDC0"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          style={Styles.textInputBox}
        />
      </View>
      <View>
        <TouchableOpacity style={Styles.logInButton}>
          <Text style={Styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 15, marginTop:50 }}>
          Dont have Account?
          <Text style={{ color: '#6565F1' }}> Register</Text>
        </Text>

      </View>
    </View>
  );
}
