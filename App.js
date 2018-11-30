import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/Header';

export default class App extends React.Component {
  render() { 
    return (   
      <View>  
        <Header  headerText={'Authentication'}/>
        <Text>An App</Text>  
      </View>     
    );     
  }
};
