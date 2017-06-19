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

export default class ProductScreen extends React.Component {  
 
  static navigationOptions = ({ navigation }) => ({
    //  传递的参数在state.params中
    // 导航栏按钮
    title: `ProductScreen ${navigation .state.params.price}`,
    headerRight:
      <Button
        title=' info'
        onPress={() => {}}
      />
    ,
  });

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, ProductScreen!</Text>
      </View>
    );
  }
 
}