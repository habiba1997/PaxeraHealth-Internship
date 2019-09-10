import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Start from './components/Start';
import t from 'tcomb-form-native'; // 0.6.9
//download this template

const Form = t.form.Form;

const User = t.struct({
  email: t.maybe(t.String),
  username: t.String,
  password: t.maybe(t.String),
  terms: t.Boolean
});


const styles = StyleSheet.create({
    container: {     
      justifyContent: 'center',
      marginTop: 50,
      backgroundColor: '#ffffff',
    },
  });

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 10,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}


const options = {
  fields: {
    terms: {
      label: 'Agree to Terms',
    },
    password: {
      label: 'Pass',
      error: 'Please create your password'
    },
    username: {
      error: 'Please create your username'
    },
    email: {
      error: 'Please enter your email'
    },
  
  },
  stylesheet: formStyles
};


export default class SignUp extends Component {

  constructor(props) {
    super(props);
  
    //used to reset textInputs
    this.state = { value: '' }
  
  }

  resetForm() {
    this.setState({value: null});
  }

    submit =() =>
    {        
      const formValue = this.formData.getValue();
      //this.refs.form.getValue();
      if(!formValue.terms)
      {
        alert("Please Agree to app terms");
      }

      if (formValue && formValue.terms)  
      {
        // clear all fields after submit
        this.resetForm();
        
        this.props.navigation.navigate('JsonUrl',{ data: formValue});
      }
    }
    //this.props.navigation.navigate('JasonUrl');
    //NavigationActions.navigate({ routeName: "JasonUrl" })

    render() 
    {
      return (
      <View style={styles.container}>
        <Text h1>Hello</Text> 
        <Form 
        ref={data => this.formData = data}
        type={User}
        value={this.state.value}
        options={options}
         />
        <Button title='Sign Up' onPress={this.submit}/>
        <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />

      </View>
    );
    }
}

