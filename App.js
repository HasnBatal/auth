import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';
import Spinner from './src/components/common/Spinner';

export default class App extends React.Component {


  state = {
    loggedIn: null
  };

  /**
   * 
   */
  componentWillMount(){
  
    firebase.initializeApp({
      apiKey: "AIzaSyDyH15wIbUpeP2CidOwWWKATc3M5fkuNdk",
      authDomain: "auth-6c35d.firebaseapp.com",
      databaseURL: "https://auth-6c35d.firebaseio.com",
      projectId: "auth-6c35d",
      storageBucket: "auth-6c35d.appspot.com",
      messagingSenderId: "650861942756"
    }); 

    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({loggedIn:true});
        }else{
          this.setState({loggedIn:false});
        }
    }) 
      
  } 

  /**
   * 
   */
  renderContent(){

    switch(this.state.loggedIn){      
      case true :   return <Button title={' Log Out'} onPress={()=>firebase.auth().signOut()}>Log Out</Button>
      case false:   return <LoginForm/> ;
      default   :   return <Spinner size="large" />;
    }

  } 


  /**
   * 
   */
  render() {  
    return (       
      <View>   
        <Header  headerText={'Authentication'}/>
        {this.renderContent()}
      </View>     
    );     
  }
};
