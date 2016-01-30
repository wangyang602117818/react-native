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
  View
} from 'react-native';

var delivery = React.createClass({
    _onPressButton:function(){
       const { navigator } = this.props;
       if(navigator){
        navigator.pop();
      }else{
        Alert.alert('title','error');
      }
    },
    render:function(){

        return(
          <View style={{flex:1,backgroundColor:'#F4A499'}}>
             <TouchableOpacity onPress={this._onPressButton}>
               <Text>delivery</Text>
             </TouchableOpacity>
          </View>

        )
    }
})




module.exports = delivery;
