
 import React, { Component } from 'react';
 import { Text, TextInput, View } from 'react-native';
 import RestrictionInput from './RestrictionInput';
  import Restrictions from './Restrictions';
 import Header from './Header';
 import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
 import { Alert} from 'react-native'


 export default class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       // startOfRestriction: '',
       //  endOfRestriction:'',
        // status: null
     };
        Alert.alert('Welcome', 'This is a test.')

   }

// userPer = async()=> {
//   const { status } = await PERMISSIONS.askAsync(PERMISSIONS.IOS.CONTACTS);
//   this.setState({ status })
//   console.log("hi",this.state.status);
// }




   //   async fetchData() {
   //     const response = await fetch()
   //     const json = await response.json()
   //     const stars = json.stargazers_count
   //     this.setState({stars})
   //   }
   render() {

     return (
       <View >
         <Header/>
         <RestrictionInput/>
       </View>
     );
   }
 }
