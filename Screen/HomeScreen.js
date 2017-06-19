
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
// 场景
// 创建一个HomeScreen的场景
export default class HomeScreen extends Component {  
  // 1.在此处设置导航的属性 如标题
  // 2.TabNavigator中的navigationOptions中设置

  // static navigationOptions = {
  //   title: 'HomeScreen',//在导航中显示的标题内容
  // };

  static navigationOptions = {  
        drawerLabel: '首页',  
        drawerIcon:({tintColor}) => (  
            <Image  
                source={require('./../img/tab1_normal.png')}  
                style={[styles.icon, {tintColor: tintColor}]}/>  
        ),  
    };  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, HomeScreen!</Text>
        {/*切换tab*/}
        <Text onPress={this._skip.bind(this)}>点击跳转tab</Text>  

        <Button
          // 跳转  场景名称    参数
          onPress={() => navigate('Product', { price: '20' })}
          title="ProductScreen"
        />
      </View>
    );
  }

    _skip() {  
        this.props.navigation.navigate("Mine");  
    }  
}