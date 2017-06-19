import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  

export default class MineScreen extends Component {  

  static navigationOptions = {  
        title: 'MineScreen',//在导航中显示的标题内容
        drawerLabel: '我的',  
        drawerIcon:({tintColor}) => (  
            <Image  
                source={require('./../img/tab2_normal.png')}  
                style={[styles.icon, {tintColor: tintColor}]}/>  
        ),  
    };  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, MineScreen!</Text>
        <Text onPress={this._skip.bind(this)}>点击跳转tab</Text>  
      </View>
    );
  }

    _skip() {  
        this.props.navigation.navigate("Home");  
    }  
}