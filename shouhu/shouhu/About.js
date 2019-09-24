import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {ButtonGroup,Button} from 'react-native-elements'
import {pk} from '../config/sty'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  AntDesign from 'react-native-vector-icons/AntDesign'
class About extends Component{
    static navigationOptions = {
        title: 'About',
        // header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0
        }
       
    }
    

    render(){

        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
         <ScrollView contentContainerStyle={{alignItems:'center'}}>       
         <View style={{width:pk.w,height:pk.h*.25,
                alignItems:'center',
                justifyContent:'center'
                }}>
           <Image source={require('../images/park.png')} 
            style={{width:100,height:100}} 
           />
           </View>

           <View style={{width:pk.w,height:pk.h*.03,backgroundColor:'#F2F3F4'}}>

           </View>
            <View style={{alignItems:'center',padding:20}}>

            <Text style={{color:'white',marginTop:20,lineHeight:30,fontSize:18,letterSpacing:1}}>
            Our APP is used for online repair of public facilities. If users find that there are problems in public facilities, they can report online repair, which greatly saves the time of our maintenance personnel, can accurately locate the problem, and give full play to the strength of the people to maintain public facilities together.
1) Our APP and its simplicity
2) Our APP can be easily repaired online.
2) Our APP adapter uses dark mode. Thematic novelty
Welcome to join us. Let's safeguard public facilities together.
            </Text>
            </View>

           </ScrollView>
        </SafeAreaView>
        )
    }
}

export default About

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})