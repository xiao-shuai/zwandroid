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
import {Button,ListItem} from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class Jian_yi extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
jian=()=>{
    if(this.state.con==undefined){
      Alert.alert('提示','请输入内容',[{'text':'知道了'}])
    }else{
      Alert.alert('提示','反馈成功，我们将尽快处理',[{'text':'知道了'}]) 
      fetch('https://www.fastmock.site/mock/a81b9e8ab453b4f3d0e70963138bc7e7/japenweixiu/jianyi')
      .then(res=>res.json())
      .then()
      .catch()
    }
}
    render(){
       
        return(
            <SafeAreaView style={{flex:1}}>
         <KeyboardAwareScrollView contentContainerStyle={{
             alignItems:'center',
         }}>
         <View style={{width:global.g_w*.9,height:global.g_h*.2,
            backgroundColor:'#D7DBDD',padding:20,marginTop:20}}>    
         <TextInput style={{
             height:'100%'

         }} multiline={true} 
          onChangeText={(con)=>{
             this.setState({con})
          }}
         />
         </View>
         <Button title='提交' style={{marginTop:20,width:global.g_w*.9}}
            onPress={()=>{
             this.jian()
            }}
         />

         </KeyboardAwareScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Jian_yi
const styles=StyleSheet.create({
   
})


