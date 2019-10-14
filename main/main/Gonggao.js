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

class Gonggao extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
componentWillMount(){
  fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/gonggao')
  .then(res=>res.json())
  .then(res=>{})
  .catch()

  AsyncStorage.getItem('h').then().catch()

}
    render(){
        const list = [
            {
              name: '网络设备升级公告',
              time:'2019-5-16',
              con:'因中国电信网络设备升级改造，国家移民管理局政务服务平台网页端（网址:https://s.nia.gov.cn)将于5月17日暂停对外服务60分钟，给你带来不便，敬请谅解。',
            },
            {
              name: '新闻发布会通知',
              time:'2019-03-22',
              con:'国家移民管理局将于2019年3月26日（星期二）上午10时举行首场例行新闻发布会。发布会由国家移民管理局新闻发言人陈斌主持，国家移民管理局副局长尹成基介绍内地居民办理出入境证件便利措施及国家移民管理局政务服务平台上线等情况，国家移民管理局公民出入境管理司负责人闵海云、信息科技司负责人陈永利将回答记者提问。欢迎出席。为使记者在发布会上获得更多信息，欢迎通过电子邮件或传真将您对此场发布会感兴趣和关注的问题提供给我们。邮箱：nianews@foxmail.com传真：66261430联系电话：66266702注意：请持有效记者证或采访证出席。地点：北京市正义路7号瑞安宾馆4层迎宾厅'
            },
           
          ]
        return(
            <SafeAreaView style={{flex:1}}>
              <View></View>
              <View></View>
              <View></View>
              <View></View>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <View style={{padding:20,borderBottomColor:global.t_bg,
                borderBottomWidth:3,width:global.g_w
                }}>
                <Text style={{fontSize:18,fontWeight:'500'}}>资讯公告</Text>
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
              <Image source={require('../images/vv.jpg')} 
              style={{width:0,height:0}}/>
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Gonggao


