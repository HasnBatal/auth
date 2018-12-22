
import React , {Component} from 'react';
import Card from './common/Card';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Input from './common/Input';


class LoginForm extends Component{

    state = { 
                  email:'',
                  password:''
            };

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

                <CardSection>
                    <Button title={' Login In'} />
                </CardSection>

            </Card>
        );
    }
};

export  default  LoginForm;

