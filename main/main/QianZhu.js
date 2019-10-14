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


class QianZhu extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const val=[
            {
                title:'往来港澳通行证',
                content:'你暂无港澳通行证，无法申请签注',
            },
            {
                title:'往来台湾行证',
                content:'你暂无台湾通行证，无法申请签注',
            }
        ]
        return(
            <SafeAreaView style={{flex:1}}>
                <Image source={require('../images/vv.jpg')} style={{width:0,height:0}}/>
                 <View></View>
                 <View></View>
                 <View></View>
                <ScrollView contentContainerStyle={{alignItems:'center',backgroundColor:global.t_bg,flex:1,padding:20}}>
                    {
                        val.map((i,k)=>{
                      return(
                 <View style={styles.wai}>
                    <View>
                    <Text style={{fontSize:18,fontWeight:'500'}}>{i.title}</Text>
                    <Text style={{marginTop:10,color:global.t_hui}}>{i.content}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        Alert.alert('暂无通行证 无法申请签注','',[{'text':'确定'}])
                    }}>
                    <View style={{padding:10,backgroundColor:global.t_color,borderRadius:6}}>
                        <Text style={{color:'white'}}>去申领</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                      )
                        })
                    }
                    <Text style={{marginTop:10,color:global.t_hui}}>剩余签注次数仅供参考，数据可能存在延时，以证件实际信息为准，如需正确确认，可到公安出入境管理处查验</Text>
                
              
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default QianZhu
const styles=StyleSheet.create({
    wai:{
        flexDirection:'row',
                width:'100%',justifyContent:'space-between',
                alignItems:'center', padding:20,
                backgroundColor:'white',marginTop:10,borderRadius:6
    },
})


