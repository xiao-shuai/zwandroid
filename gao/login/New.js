import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS,ImageBackground
} from 'react-native'
import {gao} from '../sty/sty'
import {Button,Input} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { NavigationActions } from 'react-navigation';
class New extends Component{
    static navigationOptions = {
        title: 'register',
        headerStyle: {
            backgroundColor: gao.theme,
          },
          headerTintColor: '#fff',
      };
    
    constructor(props){
       super(props)
       this.state={

       }
    }
    go_login=()=>{
        if(this.state.acc==undefined){
            return Alert.alert('Tips','Please enter your account number.',[{'text':'ok'}])
        }
        if(this.state.pwd==undefined){
            return Alert.alert('Tips','Please input a password',[{'text':'ok'}])
        }
        if(this.state.pwd!==this.state.pwd2){
            return Alert.alert('Tips','Inconsistent passwords',[{'text':'ok'}])
        }
         AsyncStorage.setItem('ok','ok')
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Btm' })], 0)
        fetch('https://www.fastmock.site/mock/a714e9c2b1cb027f235d6991f2b4b3f1/pastry/Login',
        {method:'POST'})
        .then(res=>res.json())
        .then(res=>{
   
        })
        .catch()
      } 
    render(){
        
        return (
        <SafeAreaView style={{flex:1,}}>
    <KeyboardAwareScrollView 
            contentContainerStyle={{alignItems:'center'}} 
             
            >
                <ImageBackground source={require('../img/loginbg.png')}
                resizeMode='stretch'
                 style={{
               width:gao.w,height:gao.h*.3
           }}>
                 <Image source={require('../img/logo.png')} 
                 style={{width:100,height:100,
                 marginLeft:'55%',
                 marginTop:gao.h*.1
                 }}  />
                </ImageBackground>

                <View style={{width:gao.w,padding:20}}>
                <Input placeholder='account number.'
                    onChangeText={(acc)=>{
                      this.setState({acc})  
                    }}
                  inputStyle={{
                      marginLeft:10
                  }} 
                  leftIcon={<EvilIcons name='user' style={{fontSize:35,color:'#CACFD2'}}/>}
                />
                <Input placeholder='Password.'
                secureTextEntry={true}
                   onChangeText={(pwd)=>{
                   this.setState({pwd})        
                    }}
                 containerStyle={{marginTop:30}}
                  inputStyle={{
                      marginLeft:10
                  }} 
                  leftIcon={<EvilIcons name='lock' style={{fontSize:35,color:'#CACFD2'}}/>}
                />
                <Input placeholder='Confirm password.'
                 secureTextEntry={true}
                   onChangeText={(pwd2)=>{
                   this.setState({pwd2})        
                    }}
                 containerStyle={{marginTop:30}}
                  inputStyle={{
                      marginLeft:10
                  }} 
                  leftIcon={<EvilIcons name='lock' style={{fontSize:35,color:'#CACFD2'}}/>}
                />
                </View>

                <Button title='register' buttonStyle={{width:gao.w*.9,marginTop:20,backgroundColor:gao.theme}}  
                  onPress={()=>{
                      this.go_login()
                  }}
                />
                <TouchableOpacity>
                    <Text style={{fontSize:18,marginTop:20,color:gao.theme}}>No account. Register.</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    Linking.openURL('https://shimo.im/docs/YrVGjGR66VGYCTp3')
                }}>
                    <Text style={{fontSize:18,marginTop:20,color:'#BDC3C7'}}>register represents that you have read and agreed to the `doughnut` agreement</Text>
                </TouchableOpacity>
                 
        
            </KeyboardAwareScrollView>
   
          
        </SafeAreaView>
        )
    }


}

export default New