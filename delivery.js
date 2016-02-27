'use strict';
import React,{
  Component,
  StyleSheet,
  Navigator,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  ListView,
  View,
} from 'react-native';

var styles = require('./styles/delivery.css');  //样式文件
var dish_source_list = require('./dish_list');   //菜单数据
//
class Title extends Component {
   render(){
     return(
       <View style={styles.title}>
         <View style={styles.back_con}>
            <TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
              <Image source={require('./images/back.png')}></Image>
            </TouchableOpacity>
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
      var menuList = this._getMenuList();
      var dishList = this._getDishList();
      return {
        menu_dataSource: dish_m.cloneWithRows(menuList),
        dish_dataSource: dish_l.cloneWithRows(dishList)
      };
    },
    _getMenuList: function(){  //获取菜单
      var menu_list = [];
      for(var i = 0;i < dish_source_list.length; i++){
          if(i==0){
            menu_list.push({"category_name" : dish_source_list[i].category_name , "checked" : "1"});
            continue;
          }
          menu_list.push({"category_name" : dish_source_list[i].category_name , "checked" : "0"});
      }
      return menu_list;
    },
    _getDishList: function(){   //获取菜品列表
      return dish_source_list;
    },
    _renderMenuRow:function(rowData, sectionID, rowID){  //渲染菜单栏
        return(
          <TouchableWithoutFeedback onPress={()=>{this._onPressMenu(rowID)}}>
            <View style={[styles.menu_item,rowData.checked=='1'?styles.menu_item_on:'']}>
              <Text>{rowData.category_name}</Text>
            </View>
          </TouchableWithoutFeedback>
        )
    },
    _onPressMenu:function(rowID){
        var newMenuList = this._getMenuList();
        newMenuList.forEach(function(obj){obj.checked='0'});
        newMenuList[rowID].checked='1';

        this.setState({
           menu_dataSource:this.state.menu_dataSource.cloneWithRows(newMenuList)
        })
    },
    _renderDishRow:function(rowData, sectionID: number, rowID: number){  //渲染菜品栏
      return(
        <View style={styles.dish_item}>
          <Text>{rowData.id}</Text>
        </View>
      )
    },
    _renderSectionHeader:function(sectionData: string, sectionID: string) {

    },
    render:function(){
        return(
          <View style={styles.container}>
            <Title navigator={this.props.navigator}/>
            <Location/>
            <View style={styles.main}>
              <View style={styles.menu_con}>
                <ListView
                dataSource={this.state.menu_dataSource}
                renderRow={this._renderMenuRow}
                >
                </ListView>
              </View>
              <View style={styles.dish_con}>
                <View style={styles.dish_title}>
                  <Text style={styles.text}>主食</Text>
                </View>
                <ListView
                    dataSource={this.state.dish_dataSource}
                    renderRow={this._renderDishRow}>
                </ListView>
              </View>
            </View>
          </View>
        )
    },
    componentDidMount:function(){
        // Alert.alert(typeof this.refs);
    }
})


module.exports = delivery;
