import React, { Component } from 'react'
import { StyleSheet ,Text,TouchableOpacity , Image, Button, View } from 'react-native';

const styles = StyleSheet.create({
            container: {     
              justifyContent: 'center',
              marginTop: 50,
              backgroundColor: '#ffffff',
            }, 
            buttonStyle: {
            alignItems: "center",
            backgroundColor:'white',
            color:'#0000ff',
            borderColor: 'black',
            borderStyle:'solid',
            borderWidth: 2,
            padding: 10,
            }
        
          });
  
export class Start extends Component 
{        
  
   
    render() 
    {
        return(
            <View style={styles.container}>
                <Image 
                    source={require('./Images/start.png')}
                    style={{width: 400, height: 400}}
                />
                <TouchableOpacity  style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('SignUp')} underlayColor='#99d9f4'>
                     <Text>LeT's Start</Text>
                </TouchableOpacity >
                
            </View>
        
        );

    }
}

export default Start


//<Button title="Back" onPress={() => { this.props.navigation.goBack() }} />

