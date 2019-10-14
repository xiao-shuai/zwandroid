import React,{Component} from 'react'
import { 
    
     createAppContainer, 
    } from 'react-navigation';
    import { createBottomTabNavigator } from 'react-navigation-tabs';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Main from '../main/Main'
import Gonggao from '../main/Gonggao'
import Gonggao_xq from '../main/Gonggao_xq'
import Xieyi from '../fuwu/Xieyi'
import Yuebz from '../fuwu/Yuebz'
import QianZhu from '../main/QianZhu'
import Ywcx from '../main/Ywcx'
import Login from '../login/Login'
import Creat from '../login/Creat'
import Wangdianinfo from '../main/Wangdianinfo'
import Zhiyin from '../main/Zhiyin'
import Zhiyinxq from '../main/Zhiyinxq'
import Jieguo from '../main/Jieguo'
import My from '../main/My'
import Cha from '../main/Cha'
import  {global} from './styles'
import Result from '../main/Result'
import Jian_yi from '../main/Jian_yi'
import { createStackNavigator } from 'react-navigation-stack';
import Xy from '../main/Xy'
const DDr=createBottomTabNavigator(
  {
      Main: Main,
      Cha:Cha,
      My:My,
      
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
         
          let iconName;
          if (routeName === 'Main') {
               iconName = 'bank';
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge; 
          } else if (routeName === 'Cha') {
               iconName = `calendar`;
          } else if (routeName==='My'){
               iconName=`account`
          }
  
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} style={{fontSize:25,color:focused?global.t_color:global.t_hui}}/>;
        },
      }),
      tabBarOptions: {
        activeTintColor: global.t_color,
        inactiveTintColor: 'gray',
      },
    }
)

 const THIS_PAGE=createStackNavigator({
   Btm:{
     screen:DDr,
     navigationOptions:()=>({
      header:null,
      headerBackTitle:null,
  })
   },
    Main:{
        screen:Main,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      Gonggao:{
        screen:Gonggao, 
        navigationOptions:()=>({
            title:'北京移民政务平台',
            headerBackTitle:null,
        })
      },
      Gonggao_xq:{
        screen:Gonggao_xq, 
        navigationOptions:()=>({
            title:'北京移民政务平台'
        })
      },
      Xieyi:{
        screen:Xieyi, 
        navigationOptions:()=>({
            title:'阅读协议'
        })
      },
      Yuebz:{
        screen:Yuebz, 
        navigationOptions:()=>({
            title:'预约大厅'
        })
      },
      QianZhu:{
        screen:QianZhu, 
        navigationOptions:()=>({
            title:'签注'
        })
      },
      Ywcx:{
        screen:Ywcx, 
        navigationOptions:()=>({
            title:'查询服务'
        })
      },
      Login:{
        screen:Login, 
        navigationOptions:()=>({
            // title:'查询服务'
            header:null,
            headerBackTitle:null,
        })
      },
      Creat:{
        screen:Creat, 
        navigationOptions:()=>({
            title:'创建账号',
          
            // header:null
        })
      },
      Wangdianinfo:{
        screen:Wangdianinfo, 
        navigationOptions:()=>({
            title:'全部网点',
          
            // header:null
        })
      },
      Zhiyin:{
        screen:Zhiyin, 
        navigationOptions:()=>({
            title:'北京政务服务平台',
            headerBackTitle:null,
            // header:null
        })
      },
      Zhiyinxq:{
        screen:Zhiyinxq, 
        navigationOptions:()=>({
            title:'北京政务服务平台',
          
            // header:null
        })
      },
      Jieguo:{
        screen:Jieguo, 
        navigationOptions:()=>({
            title:'预约查询',
          
            // header:null
        })
      },
      Result:{
        screen:Result, 
        navigationOptions:()=>({
            title:'移民服务',
          
            // header:null
        })
      },
      Jian_yi:{
        screen:Jian_yi, 
        navigationOptions:()=>({
            title:'意见反馈',
        })
      },
      Xy:{
        screen:Xy, 
        navigationOptions:()=>({
            title:'服务协议',
        })
      },
      
      
  
 })   
 export default createAppContainer(THIS_PAGE)