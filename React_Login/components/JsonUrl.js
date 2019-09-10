import React, { Component } from 'react'
import { StyleSheet, Text,TextInput, View, Button } from 'react-native';


const styles = StyleSheet.create({
    container: {   
      alignItems:"center",  
      justifyContent: 'center',
      marginTop: 50,
      backgroundColor: '#ffffff',
    },


    inputContainer: {
        paddingTop: 15
      },

      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
      }
  });


export class JsonUrl extends Component {
  constructor(props) {
        super(props);
      
        this.state = { url: '' }
      
        this.handleUrlChange = this.handleUrlChange.bind(this);
      }

      extract=()=>
      {
        this.setState({url: null});
      }
      handleUrlChange(url) {
        this.setState({ url });
      }

      /* 
    
// change state on my url
    handleUrlChange(url) {
        this.setState({ url });
        <TextInput
        style={styles.textInput}
        placeholder="Enter URL"
        onBlur={Keyboard.dismiss}
        value={this.state.url}
        onChangeText={this.handleUrlChange}   
     />         
        <Button title='Extract' onPress={this.extract}/>

   
    }*/
    render() 
    {
        const { params } = this.props.navigation.state;
        const formData = params ? params.data : 'NO Email Provided';
     // const val = this.props.navigation.getParam('FormValues');
      return  (
      <View style={styles.container}>
        <Text>Hello {formData.username}</Text>
        <Text h1>Email: {JSON.stringify(formData.email)}</Text>
        <TextInput
        style={styles.textInput}
        placeholder="Enter URL"
        value={this.state.url}
        onChangeText={this.handleUrlChange}   
        />
        <Button title='Extract' onPress={this.extract}/>
        <Button title="<- Back" onPress={() => { this.props.navigation.goBack() }} />
      </View>
    );
    }
}

export default JsonUrl




