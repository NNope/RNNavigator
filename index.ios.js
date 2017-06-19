/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//导入stack导航组件
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  
import TabBarItem from './TabBarItem';
import HomeScreen from './Screen/HomeScreen';  
import MineScreen from './Screen/MineScreen';  
import ProductScreen from './Screen/ProductScreen';  


// 定义Tabbar
const Tab = TabNavigator(  
  {  
    // 场景设置 一个tab
    Home:{  
        // 场景
        screen:HomeScreen,  
        // 单个tab的属性
        navigationOptions:({navigation}) => ({  
          // 1.在此处设置该tab的导航栏标题
          // 2.在场景的实现中 设置
          title:'资讯列表',
          // 文字
          tabBarLabel:'首页',  
          // Icon属性
          tabBarIcon:({focused,tintColor}) => (  
            // 自定义的组件
            <TabBarItem   
              // 如果设置了2份图片资源就不需要使用tintColor属性了，这个属性应该是用于一份资源时，会自动根据tinColor去渲染原图做一个高亮图片出来
              // tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./img/tab1_normal.png')}  
              selectedImage={require('./img/tab1_highlight.png')}  
            />  
            // <Image
        // {/*source={require('./img/tab1_normal.png')}*/}
        // {/*style={[styles.icon, {tintColor: tintColor}]}*/}
      // />
          )  
      }),  
    },  
    // 一个tab
    Mine:{  
        screen:MineScreen,  
        // 单个tab的属性
        navigationOptions:({navigation}) => ({  
          tabBarLabel:'我',  
          // Icon属性
          tabBarIcon:({focused,tintColor}) => (  
            <TabBarItem  
              focused={focused}  
              normalImage={require('./img/tab2_normal.png')}  
              selectedImage={require('./img/tab2_highlight.png')}  
            />  
            )  
        }),  
      },  
    },  
    // 属性设置
    {  
      tabBarComponent:TabBarBottom,  
      // tabbar位置 默认底部
      tabBarPosition:'bottom',  
      // 是否可滑动切换
      swipeEnabled:false,  
      // 是否在更改标签有动画,icon动画和tab跳转动画
      animationEnabled:false,  
      // 是否根据需要懒惰呈现标签
      lazy:true,  
      // 配置标签栏的样式属性
      tabBarOptions:{  
        // 活跃状态下前景色  选中tab时的tintcolor
        activeTintColor:'rgb(24,150,229)',  
        // 非活跃状态下的前景色
        inactiveTintColor:'#979797',  
        // tabbar的背景色
        style:{backgroundColor:'#ffffff',},  
        labelStyle: {  
              fontSize: 12, // 文字大小  
          },  
      }  
        
    }  
  
  );  

  // 定义Navigation
  const Navigator = StackNavigator(
    // 场景设置
    { 
      // 首页为tab控制器 
      Tab:{screen:Tab},  
      Product:{screen:ProductScreen}  
    },  
    // 属性设置
    {  
      // 导航栏样式属性 应该是公共属性，单个场景依旧可以设置
      navigationOptions:{  
        // 设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null 
        headerBackTitle:null, 
        // 设置导航栏tincolor 文字颜色 
        headerTintColor:'#000', 
        headerStyle:{
          backgroundColor:'rgb(204,204,204)',
        },
        showIcon:true,  
        swipeEnabled:false,  
        animationEnabled:false,  
      },  
      // push或者modal
      mode:'card',  
  });  

export default class RNNavigator extends Component {
  render() {
          // 1.直接在初始场景使用navigator
          // 2.或者 以注册名定义navigator
                  //进行导航的注册
                  // const SimpleApp = StackNavigator({
                  //   Home: { screen: MainScreenNavigator },
                  //   Chat: { screen: ChatScreen },//新添加的screen
                  // });
          return(
            <Navigator/>
          ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNNavigator', () => RNNavigator);
