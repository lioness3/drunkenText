
 import React from 'react';
 import { Text, TextInput, StyleSheet, View } from 'react-native';


 function  Header() {

const styles = StyleSheet.create({

  header: {
  backgroundColor: 'yellow',
  height:150,

  },
  viewRestrictionText:{
    padding:50,
  },

});


     return (
       <View style={styles.header}>
         <Text style={styles.viewRestrictionText}>View Restrictions</Text>
          <Text></Text>
       </View>
     );

 };
 export default Header;
