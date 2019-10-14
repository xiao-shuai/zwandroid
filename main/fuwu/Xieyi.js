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
import {Button,ListItem,Divider} from 'react-native-elements'

class Xieyi extends Component {
    constructor (props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ScrollView contentContainerStyle={{padding:20}}>
            <Text style={{color:global.t_hui,
              lineHeight:20
            }}>由于办理条件限制，不符合受理条件的用户可能无法通过线上办理业务，请仔细阅读下方的《申请协议》，选择符合条件的受理条件的办理大厅进行预约。 </Text>
            <Divider style={{backgroundColor:global.t_hui,marginTop:20}}/>
            {/*  */}
            <Text style={{fontSize:18,fontWeight:'500',marginTop:20}}>预约申请须知</Text>
            <Text style={{marginTop:20,lineHeight:20}}>一 , 申请人确保填写的个人资料属实，如资料不实 将不予受理。</Text>
            <Text style={{marginTop:20,lineHeight:20}}>二 , 申请人在预约申请之前，须认真阅读办理出入境证件的办事指引，若不符合受理条件 将不予受理。</Text>
            <Text style={{marginTop:20,lineHeight:20}}>三 申请人按照预约的顺序办理出境业务前，需按照有关办事指引的要求携带身份证明材料，以及申请事由的相关材料。</Text>
            <Text style={{marginTop:20,lineHeight:20}}>四, 申请人自成功预约之时起至预约时段结束前，不得再次预约，申请人成功预约后 因故未能按照约定时间办理，或变更的时间地点的，请取消重新预约</Text>
            <Text style={{marginTop:20,lineHeight:20}}>五 , 按照有关法律规定，公民不得以同一身份同时持有两本以上同类的有效出入境证件，对于弄虚作假的申请人，公安机关将依法严肃处理。</Text>
            </ScrollView>
            <TouchableOpacity style={styles.but} onPress={()=>{
               this.props.navigation.navigate('Yuebz') 
            }}>
            <Text style={{color:'white',fontWeight:'500',fontSize:16}}>已阅读，开始预约</Text>
            </TouchableOpacity>
        </SafeAreaView>
        )
    }
}
export default Xieyi
const  styles=StyleSheet.create({
    but:{
        backgroundColor:global.t_color,width:'90%',padding:10,alignItems:'center',
        justifyContent:'center',marginBottom:20,borderRadius:5,height:global.g_h*.06
    }
})