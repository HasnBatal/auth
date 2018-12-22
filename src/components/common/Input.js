import React from 'react';
import {  TextInput,Text ,View } from 'react-native';


const Input = ({secureTextEntry, lable,onChangeText,value,placeholder}) => {

    return (
            <View style={styles.continerStyle} >
                
                <Text style={styles.lableStyle}>
                    {lable}
                </Text>
        
                 <TextInput  
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.inputStyle}
                 />

            </View>
    );
};


const styles = {

    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },

    lableStyle:{
        lineHeight:20,
        paddingLeft:20,
        flex:1
    },

    continerStyle  :{
        height : 40,
        flex:1,
        flexDirection:'row',
        alignItems : 'center'
    }
}

export default  Input;