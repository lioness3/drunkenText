
 import React, { Component } from 'react';
 import { Text, TextInput, View } from 'react-native';

 export default class RestrictionInput extends Component {
   constructor(props) {
     super(props);
     this.state = {
       startOfRestriction: '',
        endOfRestriction:''
     };
   }

   render() {
     return (
       <View style={{borderColor: 'black',padding: 100}}>
         <Text>WHat hours would you like to restrict access to your phone?</Text>
         <Text style= {{padding:20}}>Between:</Text>
         <TextInput
           style={{ height: 40}}
           onChangeText={(startOfRestriction) => this.setState({startOfRestriction})}
           value={this.state.startOfRestriction}/>
       <Text>and</Text>
       <TextInput
            style={{height: 40}}
            onChangeText={(endOfRestriction) => this.setState({endOfRestriction})}
            value={this.state.endOfRestriction}
          />
        <Text>Restrict hours between:</Text>
         <Text style={{padding: 10, fontSize: 42}}>

           {this.state.startOfRestriction} - {this.state.endOfRestriction}
         </Text>
       </View>
     );
   }
 }
