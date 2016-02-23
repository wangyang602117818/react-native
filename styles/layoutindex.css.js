'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  con:{
    flex:1,
  },
  page_con:{
    flex:1,
  },
   tab_bar:{
     height:48,
     flexDirection:'row',
     backgroundColor:'#323232',
   },
   tab_item:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
   },
   tab_txt:{
     fontSize:10,
     color:'#8F8F8F',
     marginTop:2,
   },
   tab_on:{
     color:'#007AFF'
   }
})
module.exports = styles;
