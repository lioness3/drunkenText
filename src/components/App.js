
 import React, { Component } from 'react';
 import { Text, TextInput, View } from 'react-native';
 import RestrictionInput from './RestrictionInput';
 import Header from './Header';

 export default class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       startOfRestriction: '',
        endOfRestriction:''
     };
   }

   render() {
     return (
       <View >
         <Header/>
         <RestrictionInput/>
       </View>
     );
   }
 }
