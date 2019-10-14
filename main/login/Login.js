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
    SafeAreaView,Alert,
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,ListItem,Input,CheckBox} from 'react-native-elements'
import { Global } from '@jest/types';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
password_forget=()=>{
  Alert.alert('提示','请发至CZMM至106698746098375,进行密码重置',[{'text':'知道了'}])
}
login_in=()=>{
    if(this.state.account==undefined){
        return Alert.alert('提示','请输入账号',[{'text':'确定',onPress:()=>{}}])
    } if(this.state.password==undefined){
        return Alert.alert('提示','请输入密码',[{'text':'确定',onPress:()=>{}}])
    }else{
        fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/login',{
            method:'POSt'
        }).then(res=>res.json())
        .then(res=>{
        })
        .catch(err=>{})
        AsyncStorage.setItem('yes','ok')
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Btm' })], 0)
    }
}
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
               <KeyboardAwareScrollView>
                <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
                    <Image source={require('../images/zw.png')} style={{width:global.g_w*.25,height:global.g_w*.25}} />
                    <View style={{width:'100%',marginTop:20}}>
                    <Text style={{fontSize:25,fontWeight:'500',color:global.t_color}}>登录</Text>
                    </View>
                    <View></View>
                    <View style={{width:'100%',marginTop:20,flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>没有账号?</Text>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Creat')
                        }}>
                        <Text style={{marginLeft:'10%',fontSize:16,color:global.t_color}}>创建账号.</Text>
                        </TouchableOpacity>
                    </View>
                  <View>
                      <Text></Text>
                      <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
                  </View>
                  <Input placeholder='请输入账号' containerStyle={styles.inputcon} 
                     inputContainerStyle={{borderBottomWidth:0}}
                     rightIcon={<Ionicons name='ios-person' style={{fontSize:20,color:global.t_color}} />}
                     onChangeText={(account)=>{
                      this.setState({account})
                     }}

                  />
                      <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
                  <Input placeholder='请输入密码' 
                  secureTextEntry={true}
                  onChangeText={(password)=>{
                 this.setState({password})
                  }}
                  containerStyle={styles.inputcon} 
                  inputContainerStyle={{borderBottomWidth:0}}
                  rightIcon={<Ionicons name='ios-lock' style={{fontSize:20,color:global.t_color}} />}
                  />
                   <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,alignItems:'center',width:'100%'}}>
                     <CheckBox checked={this.state.checked} 
                      title='记住密码'
                      containerStyle={{backgroundColor:'white',borderWidth:0}}
                     onPress={()=>{
                          this.setState({checked:!this.state.checked})
                     }}/> 
                      <TouchableOpacity onPress={()=>{
                       this.password_forget()
                      }}>
                          <Text style={{fontSize:16,color:global.t_color}}>忘记密码?</Text>
                      </TouchableOpacity>
                  </View>
                  <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
               <TouchableOpacity style={styles.dl} onPress={()=>{
                   this.login_in()
               }}>
                   <Text style={{fontSize:18,color:'white'}}>登录</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Xy')
               }} style={{marginTop:20}}>
              <Text style={{fontWeight:'500',color:'#797D7F'}}>登录即代表阅读并同意《服务协议》</Text>
               </TouchableOpacity>
              
                </ScrollView>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Login
const styles=StyleSheet.create({
    dl:{
        width:'70%',marginTop:20,borderRadius:25,
        alignItems:'center',justifyContent:'center',
        backgroundColor:global.t_color,height:global.g_h*.05,
        shadowColor:global.t_color,
        shadowOpacity:.6,
        shadowOffset:{width:5,height:5}
    },
    top_fz:{
        
    },
    inputcon:{
        marginTop:40,borderBottomColor:global.t_hui,borderBottomWidth:1
    }
})


