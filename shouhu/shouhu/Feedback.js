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

class Feedback extends Component {

    static navigationOptions = {
        title: 'Feedback',
        // header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };

      constructor(props){
          super(props)
          this.state={

          }
      }
feed=()=>{
    if(this.state.e==undefined){
        Alert.alert('Tips','Please enter the content',[{'text':'ok'}])
    }else {
        Alert.alert('Tips','Feedback success! We will deal with it as soon as possible.',[{'text':'ok'}])

        fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/feedback',{method:'POST'})
        .then(res=>res.json())
        .then(res=>{
            
        })
        .catch()
    }
}

      render(){
          return (
              <SafeAreaView style={{flex:1,
                padding:20,backgroundColor:'#000000',
              alignItems:'center'}}>
               <View style={{width:pk.w*.9,height:pk.h*.25,
               marginTop:20,
                backgroundColor:'white',
                padding:10
                }}>
                   <TextInput style={{height:'100%'}} multiline={true} 
                    onChangeText={(e)=>{
                        this.setState({e})
                    }}
                   />
               </View>
               <Button title='Submission' buttonStyle={{
                backgroundColor:'#17A589',width:pk.w*.9,marginTop:20
               }} onPress={()=>{
                   this.feed()
               }}/>
              </SafeAreaView>
          )
      }
}

export default Feedback