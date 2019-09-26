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
class My_fb extends Component{

    constructor(props){
        super(props)
        this.state={
        
        }
    }
exit_out=()=>{
    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
    AsyncStorage.removeItem('ok')
}
    render(){
        const login=this.props.mbx.login
        return(
            <SafeAreaView style={{flex:1}}>
            
            </SafeAreaView>
        )
    }
}

export default My_fb