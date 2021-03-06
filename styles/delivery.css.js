var React = require('react-native');
const styles = React.StyleSheet.create({
   container:{
     flex:1,
   },
   text:{
     fontSize:12,
   },
   title:{
     flexDirection:'row',
     backgroundColor:'#FAFAFA',
     height:35,
     borderBottomWidth:1,
     borderBottomColor:'#F2F1E7',
   },
   back_con:{
     flex:1,
     justifyContent:'center',
     paddingLeft:5,
   },
   supplier_text_con:{
     justifyContent:'center',
     alignItems:'center',
     flex:2,
   },
   supplier_text:{
     fontSize:16,
   },
   supplier_con:{
     flex:1,
     alignItems:'flex-end',
     paddingRight:10,
     justifyContent:'center',
   },
   location_con:{
     flexDirection:'row',
     height:28,
     backgroundColor:'#FFFCDD',
     paddingRight:10,
     paddingLeft:5,
     borderBottomWidth:1,
     borderBottomColor:'#F2F1E7',
   },
   location_left:{
     flex:2,
     flexDirection:'row',
     justifyContent:'flex-start',
     alignItems:'center',
   },
   location_edit:{
     flex:1,
     justifyContent:'center',
     alignItems:'flex-end',
   },
   main:{
     flex:1,
     flexDirection:'row',
   },
   menu_con:{
     flex:1,
     padding:-1,   //效果,覆盖边框
     borderRightWidth:1,
     borderColor:'#EBEBEB'
   },
   menu_item:{
     alignItems:'center',
     justifyContent:'center',
     height:50,
     borderBottomWidth:1,
     borderBottomColor:'#E6E6E6',
   },
   menu_item_on:{
     borderLeftWidth:4,
     borderLeftColor:'#FF5A00',
     backgroundColor:'#fff',
   },
   dish_con:{
     flex:4,
     backgroundColor:'#fff',
   },
   dish_title:{
     height:25,
     backgroundColor:'#EEEEEE',
     borderBottomWidth:1,
     borderLeftWidth:1,
     borderColor:'#E5E5E5',
     justifyContent:'center',
     paddingLeft:5,
   },
   dish_item:{
     borderColor:'#EEEEEE',
     borderBottomWidth:1,
     marginLeft:15,
     marginRight:5,
     height:80,
     justifyContent:'center',
   }
})
module.exports = styles;
