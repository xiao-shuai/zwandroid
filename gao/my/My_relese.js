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
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {gao} from '../sty/sty'
import { Divider ,Button} from 'react-native-elements'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class My_relese extends Component{

    static navigationOptions = {
        title: 'My release',
        headerStyle: {
            backgroundColor: gao.theme,
          },
          headerTintColor: '#fff',
      };

    constructor(props){
        super(props)
        this.state={
          loading:true
        }
    }

   get_data=()=>{
       fetch('https://www.fastmock.site/mock/a714e9c2b1cb027f235d6991f2b4b3f1/pastry/get_myrelise')
       .then(res=>res.json())
       .then(res=>{
           this.setState({loading:false})
       })
       .catch()
   } 
componentDidMount(){
    this.get_data()
}
    render(){
        const login=this.props.mbx.login
        return(

            <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
             {
                 this.state.loading?
                 <ActivityIndicator color={gao.theme} />
                 :
                 <View style={{alignItems:'center'}}>
                 <Image source={require('../img/no.png')} style={{
                     width:100,height:100
                 }}/>
                 <Text style={{fontSize:16,color:'#BDC3C7'}}>No data for the time being</Text>
               </View>

             }
             
            </SafeAreaView>
        )
    }
}

export default My_relese