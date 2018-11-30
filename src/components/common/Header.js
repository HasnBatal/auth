import React from 'react';
import { Text ,StyleSheet , View} from 'react-native';



const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.headerText}</Text>
        </View>
    )
}; 

 
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center',
      height:60,
      paddingTop :15, 
      shadowColor:'#000',
      shadowOffset:{width:0 , height:2},
      shadowOpacity:0.5,
      elevation:2, 
      position:'relative'
    },
  });

  


export default Header;
