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
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {gao} from '../sty/sty'
import { Divider ,Button} from 'react-native-elements'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
import Login from '../login/Login'
@inject(["mbx"])
@observer // 监听当前组件
class My extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }
    login=()=>{
        Alert.alert('Tips','Please log in and do it again.',[{'text':'Later on'},{'text':'ok',onPress:()=>{
          this.props.navigation.navigate('Login')
        }}])
    }         
exit_out=()=>{
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
    AsyncStorage.removeItem('ok')
}
    render(){
        const login=this.props.mbx.login
        return(
            <SafeAreaView style={{flex:1}}>
               <View style={{width:gao.w,height:gao.h*.25,backgroundColor:gao.theme,
              alignItems:'center',justifyContent:'center'
            }}>
                {
                  login?  
             <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201608/28/20160828091235_EdXQA.thumb.700_0.jpeg'}}
               style={{
                  width:gao.w*.26,height:gao.w*.26,borderRadius:gao.w*.13
              }}/>
              :
              <Image source={require('../img/wdl.png')}
               style={{
                  width:gao.w*.26,height:gao.w*.26,borderRadius:gao.w*.13
              }}/>
                }
              {
                  login?
             <View style={{alignItems:'center'}}>
              <Text style={{fontSize:20,color:'white',marginTop:10,fontWeight:'500'}}>Eat sugar</Text>
              <Text style={{marginTop:10,color:'white'}}>The man was lazy and left nothing behind.</Text>
              </View>
              :
              <Text style={{marginTop:10,color:'white'}}>Not logged in</Text>
              }
              
               </View>
               <Divider style={{width:'100%',height:15,backgroundColor:'#F2F3F4'}}/>
               
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }} onPress={()=>{
                   login?
                   this.props.navigation.navigate('My_relese')
                   :
                   this.login()
               }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My release</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }} onPress={()=>{
                login?
                this.props.navigation.navigate('My_relese')
                :
                this.login()
            }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My compliments</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }} onPress={()=>{
                login?
                this.props.navigation.navigate('My_relese')
                :
                this.login()
            }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My favorite</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',
               justifyContent:'space-between',padding:20,
               borderBottomWidth:1,borderBottomColor:'#F2F3F4'
               }} onPress={()=>{
                   login?
                   this.props.navigation.navigate('Sug')
                   :
                   this.login()
               }}>
                   <Text style={{fontSize:18,color:'#797D7F'}}>My suggestion</Text>
                   <Ionicons  name='ios-arrow-forward'  style={{fontSize:25,color:'#A6ACAF'}}/>
               </TouchableOpacity>
           <Button buttonStyle={{width:'92%',marginLeft:'4%',marginTop:25,backgroundColor:gao.theme}} 
             title={
                 login?
                 'Sign out'
                 :
                 'Please login'
             }
             onPress={()=>{

               this.exit_out()
             }}
           />
               

            </SafeAreaView>
        )
    }
}

export default My