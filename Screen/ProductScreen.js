import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  WebView
} from 'react-native';

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  

var WEBVIEW_REF = 'webview';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class ProductScreen extends React.Component {  
 
  constructor(props) {
        super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    //  传递的参数在state.params中
    // 导航栏按钮
    title: navigation.state.params.title,
    headerTitleStyle:styles.navititle,
    // headerRight:
    //   <Button
    //     title=' info'
    //     onPress={() => {}}
    //   />
    // ,
  });

  render() {
    const navigate = this.props.navigation;
    return (
      <View style={styles.container }>
        <WebView
        ref={WEBVIEW_REF}
        automaticallyAdjustContentInsets={false}
        style={styles.webView}
        source={{uri: navigate.state.params.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        startInLoadingState={true}
        scalesPageToFit={true}
        />
      </View>

      
    );
  }
 
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
  },
  webView: {
  },
  navititle:{
    fontSize: 12,
    width:ScreenWidth
  }
})