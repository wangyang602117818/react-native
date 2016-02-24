var React = require('react-native');
const styles = React.StyleSheet.create({   
   title:{
     backgroundColor:'#e7604a',
     height:34,     
     justifyContent:'center',
     flexDirection:'row',
     paddingTop:3,
     
   },
   mbox:{
   	minHeight:53,
   	paddingLeft:11,
   	borderBottomWidth:1,
   	borderBottomColor:'#ebebeb',
   	flexDirection:'row',
   	paddingTop:10
   },
   loginmethod:{
   	 backgroundColor:'#e7604a',
     height:40,  
     // borderWidth:1,
   	 // borderColor:'black',
   	 flexDirection:'row',
   	 paddingTop:0
   },

   phonelogin:{
   	 backgroundColor:'#fff',
     height:27, 
     justifyContent:'center', 
     alignItems: 'center',
     flexDirection:'row',
     marginLeft:50,
     flex:1,
     borderRadius:2,

   },
   accountlogin:{
	 backgroundColor:'#e7604a',
     height:27, 
     justifyContent:'center', 
     alignItems: 'center',     
     borderWidth:1,
   	 borderColor:'#fff',
   	 flexDirection:'row',
   	 width:150,
   	 marginRight:50,
     flex:1,
     borderRadius:2,
   },
   fontwhite:{
   	color:'#FFF1EF',
   	fontSize:14
   },
   red:{
   	color:'#d0503b',
   	fontSize:14,
   },
   sendyzm:{
   	 height:30,
   	 color:'#fff',
   	 alignItems:'center',
   	 justifyContent:'center', 
   	 backgroundColor:'#ccc',
   	 width:95,
   	 top:-87,
   	 left:250
   },
   input:{
   	borderWidth:0,
   },
   loginbtn:{
   	flex:1,
   	height:30,
   	borderRadius:3,
   	backgroundColor:'#d0503b',
   	paddingTop:3,
   	marginLeft:20,
   	marginRight:20,
   	alignItems:'center',
   	 justifyContent:'center', 
   }
})
module.exports = styles;
