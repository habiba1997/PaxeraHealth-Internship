/*Steps
1- npm install --save react-navigation
2- npm install --save react-native-gesture-handler
3- react-native link react-native-gesture-handler
The third step had a problem: 
I had the same issue and tried the following but didnt work 1) Adding npm path to my Environment variables; both system and user 2) Re install npm and react-native-cli

Both didn't work for me, im using Windows 10;

Solution that worked for me is to install react-native-cli globally You can install it globally by using the below command:

npm install -g react-native-cli
then command (3)
*/



//This is an example code to pass values between two screens using React Navigator// 
import React, { Component } from 'react';
//import react in our code. 
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createStackNavigator,createAppContainer} from 'react-navigation';
//import Navigator in our project
import Start from './components/Start'
import SignUp from './components/SignUp';
import JsonUrl from './components/JsonUrl';
//import all the screens we are going to switch 


const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    Start: { screen: Start }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    SignUp: { screen: SignUp }, 

    JsonUrl: {screen: JsonUrl},
    
   },
  {
    initialRouteName: 'Start',
  }
);
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);


