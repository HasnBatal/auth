
import React , {Component} from 'react';
import { Text , View} from 'react-native';

import Card from './common/Card';
import Button from './common/Button';
import CardSection from './common/CardSection';


class LoginForm extends Component{
    render(){
        return(
            <Card>
                <CardSection/>
                <CardSection/>
                <CardSection>
                    <Button title={' Login In'} />
                </CardSection>
            </Card>
        );
    }
};

export  default  LoginForm;

