var React = require('react-native');
var {height, width} = React.Dimensions.get('window');  //设备的宽高
const styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F5',
    // borderWidth:1,
    // borderColor:'red',
  },
  logo_con:{
    alignItems:'flex-start',
  },
  logo_img:{
    height:30,
    width:80,
    resizeMode:'stretch',
  },
  banner_con:{

  },
  banner_img:{
    height:95,
    width:360,    //这里不科学
    resizeMode:'stretch',
  },
  waimai_bg:{
    backgroundColor:'#FF5844',
    margin:5,
    height:80,
    borderRadius:3,
    flexDirection:'row',
  },
  tip_con:{
    flex:5,
    justifyContent:'flex-end',
    padding:5,
  },
  tip_biger:{
    color:'#FFF1EF'
  },
  tip_smaller:{
    color:'#FFF1EF',
    fontSize:11
  },
  img_con:{
    flex:3,
    alignItems:'flex-end',
    justifyContent:'center',
    padding:3,
  },
  single_logo:{
    width:70,
    height:50,
    resizeMode:'stretch'
  },
  additional_con:{
    height:80,
    marginLeft:4,
    marginRight:4,
    flexDirection:'row',
  },
  pay_con:{
    flex:1,
    backgroundColor:'#5DC549',
    borderRadius:3,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#fff',
  },
  dine_con:{
    flex:1,
    backgroundColor:'#F7B540',
    borderRadius:3,
    marginLeft:5,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#fff',
  },
  footer:{
    height:45,
    // alignSelf:'center',
    backgroundColor:'#323232',

  }
});
module.exports = styles;
