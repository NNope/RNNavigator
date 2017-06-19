
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ListView,
  TouchableHighlight,
  RefreshControl,
  RCTRefreshControl
} from 'react-native';

import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

// 场景
// 创建一个HomeScreen的场景
export default class HomeScreen extends Component {  

  // 1.在此处设置导航的属性 如标题
  // 2.TabNavigator中的navigationOptions中设置

  // static navigationOptions = {
  //   title: 'HomeScreen',//在导航中显示的标题内容
  // };
  constructor(props) {
        super(props);
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 设置state 会自动刷新数据
        this.state = {
            dataSource: ds.cloneWithRows([]),
            // 初始化属性
            isRefreshing: false
        };

  }

  static navigationOptions = {  
        drawerLabel: '首页',  
        drawerIcon:({tintColor}) => (  
            <Image  
                source={require('./../img/tab1_normal.png')}  
                style={[styles.icon, {tintColor: tintColor}]}/>  
        ),  
    };  
  
  getTypeString(type){
    if (type == 'govnews') {
      return '官方';
    }
    else if(type == 'matchnews')
    {
      return '赛事';
    }
    else if(type == 'hotnews')
    {
      return '热门';
    }
  }

  // 网络请求
  getMoviesFromApiAsync(){
            return fetch('http://www.dota2.com.cn/wapnews/hotnewsList.html')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                // return responseJson.movies;
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.data)
                })
                this.setState({isRefreshing:false});
            })
            .catch((error) => {
                console.log('错误是'+error);
            });
  }
  
  // 刷新列表
    _onRefresh() {
    this.setState({isRefreshing: true});
    this.getMoviesFromApiAsync();
  }

  // 点击cell进入详情
  _pressRow(rowData){

    this.props.navigation.navigate("Product",{ url: rowData.url,title:rowData.title });  
    // this.props.navigation.push({
    //   title:'详情',
    //   component:DetailView
    // })
  }

  // 绘制cell
  renderRow=(rowData)=> {
    // 获取type
   var typestring = this.getTypeString(rowData.type);
  return (
    <TouchableHighlight  onPress={() => this._pressRow(rowData)}>
      <View style = {{ height:95,backgroundColor:'rgb(225, 225, 230)'}}>

        {/*content*/}
        <View style={styles.cellContent}>

            {/*图片*/}
            <View style = {{marginLeft: 5,marginTop:10}}>
              <Image source={{uri:rowData.pic}} style={{width: 75, height: 57}} />
            </View>

            {/*标题 内容 日期*/}
            <View style = {styles.viewTextContent}>
              <View style = {{marginTop:10}}>
                <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode='clip'>{rowData.title}</Text>
              </View>
              <View style = {{marginTop:5}}>
                <Text style={styles.textDetail} numberOfLines={2} ellipsizeMode='clip'>{rowData.desc}</Text>
              </View>
              {/*日期*/}
              <View style = {styles.viewDateType}> 
                <Text style={styles.textDate}>{rowData.date}</Text>
                <Text style={styles.textType}>{typestring}</Text>
              </View>
            </View>
        </View> 
      </View>

    </TouchableHighlight>
      
        );
  
  }
  componentDidMount() {

    this.getMoviesFromApiAsync();
  }

  render() {
      return (
        
        <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ListView  style = {{width:ScreenWidth} }
      enableEmptySections = {true}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            //{/*onRefresh={() => this.onHeaderRefresh()}*/}
            onRefresh={this._onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
            //{/*onRefresh={this._onRefresh}*/}
            progressBackgroundColor="#ffff00"
          />}
      />
      </View>

      );
  }

}


const styles = StyleSheet.create({
  // 字体灰色
  textGreyColor:{
    color:'rgb(225, 225, 230)'
  },
  // 背景灰色
  backGreyColor:{
    color:'rgb(115, 115, 115)'
  }
  ,
  // cell样式
  cellStyle:{
    height:95,
    backgroundColor:'rgb(225, 225, 230)'
  },
  // cell内容样式
  cellContent:{
    flex: 1, 
    marginBottom:5,
    flexDirection: 'row',
    backgroundColor:'white'
  },
  // 日期文字样式
  textDate:{
    fontSize: 12
  },
  // 类别文字样式
  textType:{
    fontSize:12,
    marginLeft:5,
    backgroundColor:'rgb(225, 225, 230)',
    color:'rgb(115, 115, 115)'
  },
  // 日期view样式
  viewDateType:{
    flexDirection:'row',
    right:0,
    alignItems:'center',
    bottom:2,
    position:'absolute'
  },
  // detail文字样式
  textDetail:{
    fontSize:15,
    width:ScreenWidth-5-7-75-10,
    color:'rgb(115, 115, 115)'
  },
  // 标题文字样式
  textTitle:{
    fontSize:18,
    width:ScreenWidth-5-7-75-10
  },
  // 全部文本内容view样式
  viewTextContent:{
    justifyContent:'flex-start',
    marginLeft:7,
    position:'relative'
  },
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
