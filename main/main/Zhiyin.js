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

class Zhiyin extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const list = [
            {
              name: '普通护照签发指南',
              time:'2019-6-16',
              con:'本指南适用于中国公民申请平台护照，国家移民管理局委托的县级以上地方人民政府公安机关出入境管理机构，（一）中国公民因前往外国定居，探亲，学习，就业，旅行等活动可凭借身份证申请护照 现役军人还需征得所在单位同意后方可提出申请。（二）具有以下条件可申请换发普通护照：签证页面即将使用完毕，有效期不足6个月。户口簿信息变更大',
            },
            {
              name: '出入境边防检查',
              time:'2019-03-22',
              con:'本指南适用于上下外国船舶许可的申请和办理，审批依据《中华人民共和国出境入境管理法》第五十四条第一款，申请条件：因卸载物品，维修作业，参观访问 探望亲人，随船工作等事由需要上下外国船舶的人员，申请材料：（一）申请人本人，或者单位代办人有效身份证件 （二）出入境边防检查站对申请信息齐全切符合法定形式'
            },
           
          ]
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <View style={{padding:20,borderBottomColor:global.t_bg,
                borderBottomWidth:3,width:global.g_w
                }}>
                <Text style={{fontSize:18,fontWeight:'500'}}>办事指引</Text>
               </View>
               <View style={{width:'100%',}}>
               {
    list.map((l, i) => (
      <ListItem
        key={i}
        // leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        titleStyle={{color:global.t_hui}}
        onPress={()=>{
            this.props.navigation.navigate('Gonggao_xq',{
              tit:l.name,
              con:l.con,
              time:l.time
            })
        }}
        bottomDivider={true}
        rightIcon={<Ionicons name={'ios-arrow-forward'} style={{
            fontSize:20,color:global.t_hui
        }}/>}
      />
    ))
  }
               </View>
              
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Zhiyin


