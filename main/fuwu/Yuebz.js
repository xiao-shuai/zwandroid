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
import {Button,ListItem,Divider,CheckBox} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Yuebz extends Component {
    constructor (props){
        super(props)
        this.state={

        }
    }
  submit=()=>{
   fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/addpoint',{method:'POST'})
   .then(res=>res.json())
   .then(res=>{})
   .catch(err=>{

   })

   Alert.alert('提示','请填写完整信息',[{'text':'确定'}])    
  }  
    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <KeyboardAwareScrollView>
            <ScrollView contentContainerStyle={{}}>
             <View style={styles.t}>
              <Text style={{color:global.t_hui}}>办证大厅</Text>
             </View>
             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>户口所在地</Text>
                 </View>
              
               <TextInput placeholder='请输入户口所在地' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>
             
             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>拼音姓</Text>
                 </View>
               <TextInput placeholder='请输入拼音姓' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>

             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>拼音名</Text>
                 </View>
               <TextInput placeholder='请输入拼音名' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>

             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>中文姓</Text>
                 </View>
               <TextInput placeholder='请输入中文姓' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>

             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>中文名</Text>
                 </View>
               <TextInput placeholder='请输入中文名' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>

             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>身份证号</Text>
                 </View>
               <TextInput placeholder='请输入身份证号码' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>

             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>手机号</Text>
                 </View>
               <TextInput placeholder='请输入手机号' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>

             <View style={styles.t}>
              <Text style={{color:global.t_hui}}>紧急联系人</Text>
             </View>
             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>手机号</Text>
                 </View>
               <TextInput placeholder='紧急联系人手机号' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>
             <View style={styles.item_v}>
                 <View style={{width:'25%'}}>
                 <Text style={{fontSize:16}}>姓名</Text>
                 </View>
               <TextInput placeholder='紧急联系人姓名' style={{
                   marginLeft:'5%',fontSize:16,width:global.g_w*.6
               }} />
             </View>
             <View style={styles.t}>
              <Text style={{color:global.t_hui}}>办理证件类型</Text>
             </View>
             <View style={{borderBottomColor:global.t_bg,borderBottomWidth:1}}>
                 
                <CheckBox 
              
               title='普通护照'
               containerStyle={{backgroundColor:'white',borderColor:'white'}}
              checked={this.state.checked}
              
              onPress={()=>{
                  this.setState({checked:!this.state.checked})
              }}
              />
             </View>
             <View style={{borderBottomColor:global.t_bg,borderBottomWidth:1}}>
                 
                <CheckBox 
              
               title='往来港澳通行证'
               containerStyle={{backgroundColor:'white',borderColor:'white'}}
              checked={this.state.checked2}
              
              onPress={()=>{
                  this.setState({checked2:!this.state.checked2})
              }}
              />
             </View>

             <View style={{borderBottomColor:global.t_bg,borderBottomWidth:1}}>
                 
                <CheckBox 
              
               title='往来台湾通行证'
               containerStyle={{backgroundColor:'white',borderColor:'white'}}
              checked={this.state.checked3}
              
              onPress={()=>{
                  this.setState({checked3:!this.state.checked3})
              }}
              />
             </View>

            <Button title='确认预约' buttonStyle={{
                marginTop:20,marginBottom:20,width:'90%',marginLeft:'5%',backgroundColor:global.t_color
            }} onPress={()=>{
              this.submit()
            }}/>

            


             

            </ScrollView>
            </KeyboardAwareScrollView>
           
        </SafeAreaView>
        )
    }
}
export default Yuebz
const  styles=StyleSheet.create({
    item_v:{
        padding:20,flexDirection:'row',borderBottomColor:global.t_bg,borderBottomWidth:1,
        alignItems:'center'
    },
    t:{
        paddingLeft:20,
        backgroundColor:global.t_bg,marginTop:0,
        width:global.g_w,height:global.g_h*.04,justifyContent:'center'
    },
    but:{
        backgroundColor:global.t_color,width:'90%',padding:10,alignItems:'center',
        justifyContent:'center',marginBottom:20,borderRadius:5,height:global.g_h*.05
    }
})