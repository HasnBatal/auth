
import React , {Component} from 'react';
import Card from './common/Card';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner';

import firebase from 'firebase';
import {  Text } from 'react-native';


class LoginForm extends Component{

    state = { 
                  email:'',
                  password:'',
                  error : '' ,
                  loading : false
            };
 
            
    /**
     * 
     */
    onButtonPress(){


            const {email,password} = this.state;

            this.setState({error: '',loading: true})

            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(this.onLoginSUccess.bind(this))
                .catch(()=>{
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then(this.onLoginSUccess.bind(this))
                        .catch(this.onLoginFail.bind(this))
                });        
    }



    /**
     * 
     */
    onLoginFail(){
        this.setState({
            error:'Authentication Failded.',
            loading : false,
        })

    }

    /**
     * 
     */
    onLoginSUccess(){
        this.setState({
            email : '',
            password : '',
            loading : false,
            error : ''
        });
    }

    /**
     * 
     */
    renderButton(){
       

        if(this.state.loading === true ){
                return <Spinner size={'small'} />;
        }
  
        return  <Button 
                    title={' Login In'}
                    onPress={this.onButtonPress.bind(this)}
                />;
 
 
    }

    /**
     * 
     */
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


                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                   {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
};

const styles = {

    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export  default  LoginForm;

