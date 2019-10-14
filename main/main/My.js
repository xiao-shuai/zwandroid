import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,ListItem,Divider} from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import { NavigationActions } from 'react-navigation';
@inject(["mbx"])
@observer // 监听当前组件
class My extends Component {
    static navigationOptions = {
        title: '我的',
      };
    constructor(props){
        super(props)
        this.state={

        }
    }
componentWillMount(){
  fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/gonggao')
  .then(res=>res.json())
  .then(res=>{})
  .catch()

}
show_login=()=>{
    Alert.alert('提示','您暂未登录，请登录！',[{'text':'取消',onPress:()=>{}},
    {'text':'确定',onPress:()=>{this.login()}}])
   }
   login=()=>{
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
 }
   show_exit=()=>{
    Alert.alert('提示','确定退出登录吗?',[{'text':'取消',onPress:()=>{}},
    {'text':'确定',onPress:()=>{
        // this.ban()
        fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/loginout',{method:'POST'})
        .then(res=>res.json())
        .then(res=>{})
        .catch(res=>{})
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
        AsyncStorage.removeItem('yes')
    }}])
} 
    render(){
      const login=this.props.mbx.login
        return(
            <SafeAreaView style={{flex:1}}>
              <View style={{width:'100%',height:global.g_h*.25,
              backgroundColor:global.t_color,alignItems:'center'}}>
              <Image source={require('../images/tx.png')} 
               style={{width:global.g_w*.25,height:global.g_w*.25,marginTop:20}}
              />   
             <Text style={{fontSize:18,color:'white',marginTop:20}}>
                 {
                     login?
                     '张三'
                     :
                     '未登录'
                 }
                 </Text>   
              </View>
            <Divider style={{backgroundColor:'#D7DBDD',height:10}}/>
             <TouchableOpacity style={{
                 padding:20,flexDirection:'row',
                 justifyContent:'space-between',
                 borderBottomColor:'#E5E7E9',
                 borderBottomWidth:1
             }} onPress={()=>{
                 login?
                 this.props.navigation.navigate('Result')
                 :
                 this.show_login()
             }}>
                 <Text style={{fontSize:18,color:'#797D7F'}}>
            我的消息
                 </Text>
                 <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:'#797D7F'}}/>
             </TouchableOpacity>

             <TouchableOpacity style={{
                 padding:20,flexDirection:'row',
                 justifyContent:'space-between',
                 borderBottomColor:'#E5E7E9',
                 borderBottomWidth:1
             }} onPress={()=>{
             login?
             this.props.navigation.navigate('Jian_yi')
             :this.show_login()
             }}>
                 <Text style={{fontSize:18,color:'#797D7F'}}>
            我的建议
                 </Text>
                 <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:'#797D7F'}}/>
             </TouchableOpacity>
             <TouchableOpacity style={{
                 padding:20,flexDirection:'row',
                 justifyContent:'space-between',
                 borderBottomColor:'#E5E7E9',
                 borderBottomWidth:1
             }} onPress={()=>{
                  login?
                 this.props.navigation.navigate('Result')
                 :
                 this.show_login()
             }}>
                 <Text style={{fontSize:18,color:'#797D7F'}}>
            我的签注
                 </Text>
                 <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:'#797D7F'}}/>
             </TouchableOpacity>
             <Divider style={{backgroundColor:'#D7DBDD',height:30}}/>
             <TouchableOpacity style={{
                 padding:20,flexDirection:'row',
                //  justifyContent:'space-between',
                 alignItems:'center',
                 borderBottomColor:'#E5E7E9',
                 borderBottomWidth:1,
                 justifyContent:'center',

             }} onPress={()=>{
                 login?
                 this.show_exit()
                 :
                 this.props.navigation.navigate('Login')
             }}>
                 <Text style={{fontSize:18,color:'red'}}>
            {
                login?'退出':'去登录'
            }
                 </Text>
                 {/* <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:'#797D7F'}}/> */}
             </TouchableOpacity>
            </SafeAreaView>
        
        )
    }

}
export default My


