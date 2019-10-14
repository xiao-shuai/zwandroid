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
import {Button,ListItem,SearchBar} from 'react-native-elements'
import {inject,observer} from 'mobx-react'
import { NavigationActions } from 'react-navigation';
@inject(["mbx"])
@observer // 监听当前组件
class Cha extends Component {
  static navigationOptions = {
    title: '查询',
  };
    constructor(props){
        super(props)
        this.state={
          show:false,
        }
    }
componentWillMount(){
  fetch('https://www.easy-mock.com/mock/5d3c363bf0de8870c9ba1b18/zhegnfu/gonggao')
  .then(res=>res.json())
  .then(res=>{})
  .catch()

}
login=()=>{
  this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
}
  show_login = () => {
    Alert.alert('提示', '您暂未登录，请登录！', [
      {text: '取消', onPress: () => {}},
      {
        text: '确定',
        onPress: () => {
          this.login();
        },
      },
    ]);
   }
  componentDidMount() {
    const a = this.props.mbx.login;

    a ? '' : this.show_login();

}

cha=()=>{
    this.setState({show:true})
    fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/record')
    .then(res=>res.json())
    .then(res=>{
        this.setState({show:false})
    })
    .catch(err=>{

    })
}
    render(){
        const login=this.props.mbx.login
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <View style={{width:global.g_w,height:global.g_h*.1,backgroundColor:global.t_color}}>
                 <SearchBar  
                 onChangeText={(val)=>{
                 this.setState({val})
                 }}
                 value={this.state.val}
                placeholder='请输入查询的关键词(记录查询)'
                 containerStyle={{
                  backgroundColor:null,
                 marginTop:10,
                 borderTopWidth:0,
                 borderBottomWidth:0}} 
                   inputContainerStyle={{backgroundColor:'#F2F3F4'}}
                   returnKeyType='search'
                   onSubmitEditing={()=>{
                      login?
                      this.cha()
                      :
                      this.show_login()
                   }}
                 />

               </View>

               {  
                   this.state.show?
                   <ActivityIndicator  style={{marginTop:150}}/>
                   :
               <View style={{alignItems:'center'}}>
                   <Image source={require('../images/nosj.png')} 
                    style={{width:global.g_w*.2,height:global.g_w*.2,marginTop:150}}
                   />
                   <Text style={{marginTop:10,color:'#A6ACAF'}}>暂无数据</Text>
                   </View>
               }
            </SafeAreaView>
        
        )
    }

}
export default Cha


