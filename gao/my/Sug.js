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
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS,
    
} from 'react-native'
import {gao} from '../sty/sty'
import { Divider ,Button} from 'react-native-elements'
import  Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation';
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class Sug extends Component{
    static navigationOptions = {
        title: 'feedback',
        headerStyle: {
            backgroundColor: gao.theme,
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        super(props)
        this.state={

        }
    }

subaa=()=>{
    if(this.state.aa==undefined){
        Alert.alert('Tips','Please enter the content',[{'text':'ok'}])
    }else{
        Alert.alert('Tips','Feedback success',[{'text':'ok'}]) 
        fetch('https://www.fastmock.site/mock/a714e9c2b1cb027f235d6991f2b4b3f1/pastry/feefback')
        .then(res=>res.json())
        .then(res=>{

        })
        .catch()
    }
}
 render(){
        const login=this.props.mbx.login
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
             <View style={{width:'90%',backgroundColor:'#E5E7E9',
             height:gao.h*.2,
             padding:20,
             marginTop:20,
             borderRadius:6
             }}>
                 <TextInput style={{height:'100%'}} multiline={true} 
                 placeholder='Please enter feedback' 
                   onChangeText={(aa)=>{
                    this.setState({aa})
                   }}
                 />
             </View>
             <Button title='Submission' buttonStyle={{marginTop:20,width:gao.w*.9,backgroundColor:gao.theme}}
               onPress={()=>{
                   this.subaa()
               }}
             />

            </SafeAreaView>
        )
    }
}

export default Sug