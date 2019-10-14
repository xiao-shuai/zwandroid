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
    SafeAreaView,KeyboardAvoidingView,Alert
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,ListItem,Input,CheckBox} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation';
class Creat extends Component {
    constructor(props){
        super(props)
        this.state={
                  
        }
    }
creat=()=>{
    if(this.state.cj_zh==undefined){
        return Alert.alert('提示','请输入账号',[{'text':'确定',onPress:()=>{}}])
    }else if(this.state.cj_mm==undefined){
        return Alert.alert('提示','请输入密码',[{'text':'确定',onPress:()=>{}}])
    }else {
        fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/creataccount',{
            method:'POST'
        }).then(res=>res.json())
        .then(res=>{})
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
                    <Text style={{fontSize:25,fontWeight:'500',color:global.t_color}}>创建账号</Text>
                    </View>
                    <View style={{width:'100%',marginTop:20,flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>已有账号</Text>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate('Login')
                        }}>
 
                        <Text style={{marginLeft:'10%',fontSize:16,color:global.t_color}}>去登陆.</Text>
                        </TouchableOpacity>
                    </View>
                  
                  <Input placeholder='请输入账号' containerStyle={styles.inputcon} 
                     inputContainerStyle={{borderBottomWidth:0}}
                     onChangeText={(cj_zh)=>{this.setState({cj_zh})}}
                     rightIcon={<Ionicons name='ios-person' style={{fontSize:20,color:global.t_color}} />}
                  />

                  <Input placeholder='请输入密码' 
                  containerStyle={styles.inputcon} 
                  secureTextEntry={true}
                  onChangeText={(cj_mm)=>{this.setState({cj_mm})}}
                  inputContainerStyle={{borderBottomWidth:0}}
                  rightIcon={<Ionicons name='ios-lock' style={{fontSize:20,color:global.t_color}} />}
                  />
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,alignItems:'center',width:'100%'}}>
                     <CheckBox checked={this.state.checked} 
                      title='记住密码'
                      containerStyle={{backgroundColor:'white',borderWidth:0}}
                     onPress={()=>{
                          this.setState({checked:!this.state.checked})
                     }}/> 
                      {/* <TouchableOpacity>
                          <Text style={{fontSize:16,color:global.t_color}}>忘记密码?</Text>
                      </TouchableOpacity> */}
                  </View>
               
               <TouchableOpacity style={styles.dl} onPress={()=>{
                   this.creat()
               }}>
                   <Text style={{fontSize:18,color:'white'}}>创建</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Xy')
               }} style={{marginTop:20}}>
              <Text style={{fontWeight:'500',color:'#797D7F'}}>注册即代表阅读并同意《服务协议》</Text>
               </TouchableOpacity>
                </ScrollView>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Creat
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


