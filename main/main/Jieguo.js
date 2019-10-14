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


class Jieguo extends Component {
    constructor(props){
        super(props)
        this.state={
          loading:true
        }
    }
componentDidMount(){
    fetch('https://www.fastmock.site/mock/19b7b866a6d1e415b64466290ab23c3d/huayidashi/get/info')
    .then(res=>res.json())
    .then(res=>{
       this.setState({loading:false})
    })
    .catch(err=>{

    })
}
    render(){
       if(this.state.loading){
           return <ActivityIndicator style={{marginTop:200}}/>
       }
    
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView contentContainerStyle={{
                    alignItems:'center',padding:20,
                   
                flex:1,backgroundColor:global.t_bg}}>
                    
             <Image source={require('../images/no.png')} style={{
                 width:global.g_w*.5,height:global.g_w*.5,
             }} resizeMode='contain'/>
             <View>
              <Text style={{fontSize:18,}}>查无预约数据！</Text>
              </View>
          <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Jieguo
const styles=StyleSheet.create({
   
})


