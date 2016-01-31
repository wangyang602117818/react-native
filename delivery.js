'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ListView,
  View
} from 'react-native';

//
class Title extends Component {
   render(){
     return(
       <View style={styles.title}>
         <View style={styles.back_con}>
           <Image source={require('./images/back.png')}></Image>
         </View>
         <View style={styles.supplier_text_con}>
           <Text style={styles.supplier_text}>单店演示</Text>
         </View>
         <View style={styles.supplier_con}>
           <Image source={require('./images/shop.png')}></Image>
         </View>
       </View>
     )
   }
}
class Location extends Component{
   render(){
     return(
       <View style={styles.location_con}>
         <View style={styles.location_left}>
           <Image source={require('./images/location.png')}></Image>
           <Text style={styles.text}>收餐地址:定位失败</Text>
         </View>
         <View style={styles.location_edit}>
           <Image source={require('./images/edit.png')}></Image>
         </View>
       </View>
     )
   }
}
var delivery = React.createClass({
   getInitialState: function() {
      var dish_m = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var dish_l = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        dish_menu: dish_m.cloneWithRows(this._getMenu()),
        dish_list: dish_l.cloneWithRows(this._getDishList())
      };
    },
    _getMenu:function(){
      return [{"id":12,"name":"凉菜"},
              {"id":13,"name":"热菜"},
              {"id":14,"name":"面食"}
             ];
    },
    _getDishList:function(){
      return [{"id":12,"dish_name":"凉菜1","price":12.3,"pic":""},
              {"id":13,"dish_name":"凉菜2","price":12,"pic":""},
              {"id":13,"dish_name":"凉菜2","price":12,"pic":""},
              {"id":13,"dish_name":"凉菜2","price":12,"pic":""},
              {"id":13,"dish_name":"凉菜2","price":12,"pic":""},
              {"id":13,"dish_name":"凉菜2","price":12,"pic":""},
              {"id":13,"dish_name":"凉菜2","price":12,"pic":""}
            ]
    },
    _onPressButton:function(){
       const { navigator } = this.props;
       if(navigator){
        navigator.pop();
       }else{
        Alert.alert('title','error');
       }
    },
    _renderMenuRow:function(rowData, sectionID: number, rowID: number){
      if(rowID==0){
        return(
          <View style={[styles.menu_item,styles.menu_item_on]}>
            <Text>{rowData.name}</Text>
          </View>
        )
      }else{
        return(
          <View style={styles.menu_item}>
            <Text>{rowData.name}</Text>
          </View>
        )
      }
    },
    _renderDishRow:function(rowData, sectionID: number, rowID: number){
      return(
        <View style={styles.dish_item}>
          <Text>{rowData.id}</Text>
        </View>
      )
    },
    render:function(){
        return(
          <View style={styles.container}>
            <Title/>
            <Location/>
            <View style={styles.main}>
              <View style={styles.menu_con}>
                <ListView
                dataSource={this.state.dish_menu}
                renderRow={this._renderMenuRow}
                >
                </ListView>
              </View>
              <View style={styles.dish_con}>
                <View style={styles.dish_title}>
                  <Text style={styles.text}>主食</Text>
                </View>
                <ListView
                    dataSource={this.state.dish_list}
                    renderRow={this._renderDishRow}>
                </ListView>
              </View>
            </View>
          </View>
        )
    },
    componentDidMount:function(){

    }
})

var styles = StyleSheet.create({
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


module.exports = delivery;
