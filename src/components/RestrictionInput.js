
 import React, { Component } from 'react';
 import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

 export default class RestrictionInput extends Component {
   constructor(props) {
     super(props);
     this.state = {
       startOfRestriction: '',
        endOfRestriction:'',
        
     };
   }

   render() {
     return (
       <View style={styles.outside}>
         <View style={styles.row}>
           <Text>What hours would you like to restrict access to your phone?</Text>
         </View>
         <View style={styles.inputContainer}>
           <Text style= {{padding:20}}>Between:</Text>
           <TextInput
             style={styles.hourInput}
             onChangeText={(startOfRestriction) => this.setState({startOfRestriction})}
             value={this.state.startOfRestriction}/>
           <Text>and</Text>
           <TextInput
              style={styles.hourInput}
              onChangeText={(endOfRestriction) => this.setState({endOfRestriction})}
              value={this.state.endOfRestriction}
            />
         </View>
         <View style={styles.row}>

           <Text>You have been restricted 😈</Text>
         </View>

         <View style={styles.row}>
           <Text style={styles.hourOutput}>
             {this.state.startOfRestriction} - {this.state.endOfRestriction}
           </Text>
         </View>

       </View>
     );
   }
 }
const styles = StyleSheet.create({

  outside:{
    borderColor: 'black',
    borderWidth: 3,
    padding: 30,
    alignItems: 'center',
  },
  row:{
    borderBottomColor: 'blue',
    borderWidth: 3,
    alignItems: 'center',
    width:'80%'
  },
  inputContainer:{
    flexDirection:'row',
    borderColor: 'black',
    borderWidth: 3,
    backgroundColor: 'grey',
    height: 60,
    width:300,
    alignItems:'center',
  },
  hourInput:{
    flex:1,
    backgroundColor:'white',
    height:50,
    margin:3
  },
  hourOutput:{
    backgroundColor: 'blue',
    padding: 90,
    margin: 30,
    borderColor: 'black',
    borderWidth: 3,
  },


})
