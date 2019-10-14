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
    SafeAreaView,Alert,Linking
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import {Button} from 'react-native-elements'

import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class Main extends Component{
    static navigationOptions = {
        title: '首页',
      };
    constructor(props){
        super(props)
        this.state={
            is_login:false
        }
        this.fuwu=[
            {
             tit:'预约办证',
             img:require('../images/yuyue.png'),
             xia:'Xieyi'    
            },
            {
             tit:'再次签注',
             img:require('../images/bz.png')
            },
            {
             tit:'业务查询',
             img:require('../images/chaxun.png')
             },
        ]
    }

 componentWillMount(){
    AsyncStorage.getItem('yes').then(res=>{
        console.log('res:',res)
         if(res===null){
         //   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
         }else{
             this.setState({is_login:true})
           this.props.mbx.change_login(true)
         }
    }
    ).catch(err=>{})
 }  
 componentDidMount(){
   
   fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/someinfo')
   .then(res=>res.json())
   .then(res=>{})
   .catch(err=>{})
 } 
 login=()=>{
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
 }
 ban=()=>{
    this.props.navigation.navigate('Xieyi')
 }
 show_login=()=>{
  Alert.alert('提示','您暂未登录，请登录！',[{'text':'取消',onPress:()=>{}},
  {'text':'确定',onPress:()=>{this.login()}}])
 }
 show_ban=()=>{
    Alert.alert('您暂无该证件！','',[{'text':'取消',onPress:()=>{}},
    {'text':'去办证',onPress:()=>{this.ban()}}])
   }

    render(){
        const is_login=this.state.is_login
        console.log('login:12',this.props.mbx.login);
        
      return (
        <SafeAreaView style={{flex:1}}>
            <Image source={require('../images/vv.jpg')} style={{width:1,height:1}}/>
            <View>
            <View style={styles.top_tit}>
           <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>北京移民政务平台</Text>  
         </View>
         </View>
            <ScrollView showsVerticalScrollIndicator={false}>
           <Image source={require('../images/fg.jpg')} style={{width:1,height:1}}/>
          
         {/*  */}
         <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('Gonggao')
         }}>
         <View style={styles.dl_big_v}>
             <View style={{flexDirection:'row',alignItems:'center'}}>
                 <View>
                    <View>
                 <Text style={styles.tz}>通知</Text>
                 </View>
                 <View>
                 <Text style={styles.tz}>公告</Text>
                 </View>
                 </View>
             <Text style={{fontSize:18,fontWeight:'500',marginLeft:10}}>移民管理局通知公告</Text>
             </View>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                 {/* <Text style={{fontSize:16,color:global.t_color}}>去登录</Text> */}
                 <Ionicons name='ios-arrow-forward' style={{fontSize:20,marginLeft:5,color:global.t_font}}/>
             </View>
         </View>
         </TouchableOpacity>
         <View style={{width:'100%',height:10,backgroundColor:global.t_bg}}>

         </View>
         {/* 我的证件 */}
         <View>
             <Text></Text>
             <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
         </View>
         <View>
             <Text></Text>
             <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
         </View>
         
         <View style={{padding:20,height:global.g_h*.25}}>
            <Text style={{fontSize:18,fontWeight:'500'}}>证件夹</Text>
            <Swiper style={{marginTop:20}}>
                <TouchableOpacity onPress={()=>{
                    
                    is_login?this.show_ban():this.show_login()
                }} style={{borderRadius:10}}>
                <Image source={require('../images/luna.jpeg')}  resizeMode='stretch' style={styles.lunb_img}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                 
                    is_login?this.show_ban():this.show_login()
                }}>
                <Image source={require('../images/lunb.jpeg')}  resizeMode='stretch' style={styles.lunb_img}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                   
                    is_login?this.show_ban():this.show_login()
                }}>
                <Image source={require('../images/lunc.jpeg')}  resizeMode='stretch' style={styles.lunb_img}/>
                </TouchableOpacity>
            </Swiper>
         </View>
         <View style={{width:'100%',height:10,backgroundColor:global.t_bg}}>

         </View>
         {/* 常用服务 */}
         <View style={{padding:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <View>
              <Text style={{fontWeight:'500',fontSize:18}}>
               常用服务
              </Text>
              </View>
              {/* <TouchableOpacity>
                  <Text style={{color:global.t_font}}>帮助说明</Text>
              </TouchableOpacity> */}
             </View>
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             {
               this.fuwu.map((item,index)=>{
                   return(
                       <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{
                           is_login?
                           index==0?
                           this.props.navigation.navigate('Xieyi')
                           :
                           index==1?
                           this.props.navigation.navigate('QianZhu')
                           :
                           this.props.navigation.navigate('Ywcx')
                           :this.show_login()
                        //    this.props.navigation.navigate('Xieyi')
                       }} key={index}>
                           <Image source={item.img} style={{width:20,height:20,}}/>
                           <Text style={{marginTop:10}}>{item.tit}</Text>
                       </TouchableOpacity>
                   )
               })
             }  
           </View>
         
         </View>
         {/* 办事网点 */}
         <View style={{width:'100%',height:10,backgroundColor:global.t_bg}}>

         </View>
         <View style={{padding:20}}>
         <View style={{flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center'}}>
              <Text style={{fontWeight:'500',fontSize:18}}>
               办事网点
              </Text>
              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Wangdianinfo')
              }}>
                  <Text style={{color:global.t_font}}>全部</Text>
              </TouchableOpacity>
         </View>
         <View style={styles.wd_tit}>
         <Text style={{fontSize:18}}>北京市公安局海淀分局...</Text>
         <View style={{borderColor:global.t_bg,borderWidth:1}}>
             <Text style={{margin:5,color:global.t_font}}>最近</Text>
        </View>
         </View>

         <View style={styles.wd_tit}>
             <View>
             <Text style={{color:global.t_font}}>海淀区清河朱房路68号</Text>
             <Text style={{marginTop:10,color:global.t_font}}>营业时间: 周一至周六 9:00-18:00</Text>
             </View>
         
           <TouchableOpacity onPress={()=>{
             Linking.openURL("tel:" + 18762678652 );
           }}>
             <Ionicons name={'ios-call'} style={{fontSize:18,color:global.t_color}}/>
          </TouchableOpacity>
         </View>
        
        {/* <MapView initialRegion={{
      latitude: 40.0691300000,
      longitude:116.4037020000,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} style={{width:'100%',height:200,marginTop:20}}>
            
        </MapView> */}

         </View>
         {/*  */}
         <View style={{marginTop:20,
            backgroundColor:global.t_bg,
            alignItems:'center',}}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Zhiyin')
                }}>

             <View style={styles.under_zx}>
                 <Text style={{fontSize:18,color:global.t_hui}}>办事指引，获取更多资讯 >></Text>
             </View>
             </TouchableOpacity>
             <View style={{marginTop:20,marginBottom:20,flexDirection:'row',alignItems:'center'}}>
              <Image source={require('../images/zw.png')} 
              style={{width:40,height:40}}/>
              <View style={{backgroundColor:global.t_hui,opacity:.5,
                padding:5,height:30,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white'}}>北京移民政务平台</Text>  
              </View>
             </View>
         </View>
         

         
         
         </ScrollView>
       </SafeAreaView>
      )
    }
}
export default Main
const styles=StyleSheet.create({
    tx:{
        width:global.g_w*.1,height:global.g_w*.1,borderRadius:global.g_w*.05
    },
    under_zx:{
        width:global.g_w*.7,padding:10,
        backgroundColor:'white',marginTop:20,alignItems:'center',
        justifyContent:'center'
    },
    wd_tit:{
        flexDirection:'row',
        justifyContent:'space-between',marginTop:20,alignItems:'center'
    },
    lunb_img:{
        width:global.g_w*.9,height:global.g_h*.18
    },
    top_tit:{
        width:'100%',height:global.g_h*.06,
        backgroundColor:global.t_color,
        alignItems:'center',
        justifyContent:'center',
    },
    dl_big_v:{
        padding:20,flexDirection:'row',
         justifyContent:'space-between',alignItems:'center',
         borderBottomColor:global.t_bg,borderBottomWidth:1
    },
    tz:{
        fontSize:18,fontWeight:'500',color:global.t_color
    }
})