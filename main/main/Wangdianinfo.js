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
    SafeAreaView,Linking
} from 'react-native'
import {global} from '../pz/styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,ListItem} from 'react-native-elements'


class Wangdianinfo extends Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.value=[
            {
            title:'北京市公安局出入境接待大厅',
            address:'东城区安定门东大街2号',
            phone:'18763567873'
           },
           {
            title:'北京市公安局东城分局',
            address:'东城区东直门北小街西羊管10号',
            phone:'18765356789'
           },
           {
            title:'北京市公安局东城分局和平里',
            address:'东城区和平里六区5号楼',
            phone:'10987378736'
           },
           {
            title:'北京市公安局东城分局东华门',
            address:'东城区板厂胡同7号',
            phone:'16728765260'
           },
    ]

    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <Image source={require('../images/vv.jpg')} 
                style={{width:0,height:0}}/>
                <Image source={require('../images/vv.jpg')} 
                style={{width:0,height:0}}/>
                <Image source={require('../images/vv.jpg')} 
                style={{width:0,height:0}}/>
                <View><Text></Text></View>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                    {
                        this.value.map((i,k)=>{
                      return(
                        <View style={styles.big_v}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{i.title}</Text>
                        <Text style={styles.vtext}>{i.address}</Text>
                        <View style={styles.v}>
                        <Text style={styles.vtext}>营业时间:周一至周五 9:00-18:00</Text>
                        <TouchableOpacity onPress={()=>{
                         Linking.openURL("tel:" + i.phone );
                        }}>
                    <Ionicons name={'ios-call'} style={{fontSize:20,color:global.t_color}} />
                        </TouchableOpacity>
                        </View>
                    </View>
                      )
                        })
                    }
                
              
                </ScrollView>
            </SafeAreaView>
        
        )
    }

}
export default Wangdianinfo
const styles=StyleSheet.create({
    big_v:{
        width:'100%',padding:20,borderBottomColor:global.t_bg,borderBottomWidth:1
    },
    v:{
        flexDirection:'row',width:'100%',
        // marginTop:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    vtext:{
        fontSize:16,color:global.t_hui,marginTop:10,
    }
})


