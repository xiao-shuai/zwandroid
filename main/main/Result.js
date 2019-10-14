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
    SafeAreaView
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,ListItem} from 'react-native-elements'


class Result extends Component {
    constructor(props){
        super(props)
        this.state={
         loading:true
        }
    }

 componentDidMount(){
     fetch('https://www.fastmock.site/mock/a81b9e8ab453b4f3d0e70963138bc7e7/japenweixiu/get')
     .then(res=>res.json())
     .then(res=>{
     this.setState({loading:false})
     })
     .catch(

     )
 }   
    render(){
        if(this.state.loading){
            return (
            <SafeAreaView style={{flex:1}}>
            <ActivityIndicator style={{marginTop:100}}/>
            </SafeAreaView>
            )
        }
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView contentContainerStyle={{
                    alignItems:'center',padding:20,
                   
                flex:1,backgroundColor:global.t_bg}}>
             <Image source={require('../images/no.png')} style={{
                 width:global.g_w*.5,height:global.g_w*.5,
             }} resizeMode='contain'/>
              <Text style={{fontSize:18,}}>暂无数据</Text>
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Result
const styles=StyleSheet.create({
   
})


