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



class Zhiyinxq extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const tit=this.props.navigation.getParam('tit')
        const con=this.props.navigation.getParam('con')
        const time=this.props.navigation.getParam('time')
        console.log('tit:',tit,'con',con)
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
                <Text style={{fontSize:18,fontWeight:'500'}}>{tit}</Text>
                <Text style={{fontSize:16,marginTop:20,lineHeight:25,color:global.t_hui}}>{con}</Text>
                <View style={styles.vtext}>
                <Text></Text>
                 <Text style={{fontSize:16,color:global.t_hui}}>北京移民政务平台发言人办公室</Text>
                </View>
                <View style={styles.vtext}>
                <Text></Text>
                 <Text style={{fontSize:16,color:global.t_hui}}>{time}</Text>
                </View>
              
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Zhiyinxq
const styles=StyleSheet.create({
    vtext:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',width:'100%',
    }
})


