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


class Ywcx extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    componentWillMount(){
        fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/recorde')
        .then(res=>res.json())
        .then(res=>{})
        .catch(err=>{})
    }
    render(){
        const val=[
            {
            icons:'ios-airplane',
            tit:'出入境记录查询',
            con:'查询或下载本人的出入境记录',

           },
           {
            icons:'ios-speedometer',
            tit:'办证进度查询',
            con:'查看本人或他人的证件办理进度',

           },
           {
            icons:'ios-calendar',
            tit:'预约查询',
            con:'查看预约办证记录',

           },
           {
            icons:'ios-copy',
            tit:'再次签注查询',
            con:'查看再次签注记录',

           },
    ]
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView contentContainerStyle={{alignItems:'center',padding:20,flex:1,backgroundColor:global.t_bg}}>
                 <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
                 <View></View>
                 <View></View>
                 {
                     val.map((i,k)=>{
                    return(
                    <View style={{padding:10,width:'100%',
                    backgroundColor:'white',
                    borderRadius:8,marginTop:20,
                    flexDirection:'row',
                    justifyContent:'space-between',alignItems:'center'
                    }}>
                    <View>
                     <Ionicons name={i.icons} style={{fontSize:18,color:global.t_color}}/>
                     </View>
                     <View style={{width:'60%'}}>
                         <Text style={{fontSize:18,fontWeight:'500'}}>{i.tit}</Text>
                         <Text style={{marginTop:10,color:global.t_hui}}>{i.con}</Text>
                     </View>

                     <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Jieguo')
                     }}>
                     <View style={{width:50,height:30,backgroundColor:global.t_color,alignItems:'center',justifyContent:'center'}}>
                         <Text style={{color:'white'}}>查询</Text>
                     </View>
                     </TouchableOpacity>
                    </View>
                    )
                     })
                 }
              
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Ywcx
const styles=StyleSheet.create({
    vtext:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',width:'100%',
    }
})


