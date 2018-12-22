
import React , {Component} from 'react';
import Card from './common/Card';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Input from './common/Input';
import firebase from 'firebase';
import {  Text } from 'react-native';


class LoginForm extends Component{

    state = { 
                  email:'',
                  password:'',
                  error : '' 
            };


    onButtonPress(){

        const {email,password} = this.state;

    
        firebase.auth().signInWithEmailAndPassword(email,password)
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .catch(()=>{
                        this.setState({error:'Authentication Failded.'})
                    })
            });
    }


    render(){
        return(
            <Card>
 
                <CardSection>
                    <Input 
                        value={this.state.email} 
                        onChangeText={email=>this.setState({email:email})}
                        lable={'Email'} 
                        placeholder={'user@gmail.com'}
                   />
                </CardSection>
 
                <CardSection>
                    <Input 
                        value={this.state.password} 
                        onChangeText={password=>this.setState({password:password})}
                        lable={'Password'} 
                        placeholder={'password'}
                        secureTextEntry
                    />
                </CardSection>


                <Text>
                    {this.setState.eror}
                </Text>

                <CardSection>
                    <Button 
                        title={' Login In'}
                        onPress={this.onButtonPress.bind(this)}
                     />
                </CardSection>

            </Card>
        );
    }
};

const styles = {
    errorTextStyle:{
        fontSize:20,
        alingSelf:'center',
        
    }
}

export  default  LoginForm;

