import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount(){
  
    firebase.initializeApp({
      apiKey: "AIzaSyDyH15wIbUpeP2CidOwWWKATc3M5fkuNdk",
      authDomain: "auth-6c35d.firebaseapp.com",
      databaseURL: "https://auth-6c35d.firebaseio.com",
      projectId: "auth-6c35d",
      storageBucket: "auth-6c35d.appspot.com",
      messagingSenderId: "650861942756"
    });
      
  } 

  render() {  
    return (     
      <View>   
        <Header  headerText={'Authentication'}/>
        <LoginForm/> 
      </View>     
    );     
  }
};
