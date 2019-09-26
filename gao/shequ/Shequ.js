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
import  {gao} from '../sty/sty'
import {Button,Divider} from 'react-native-elements'
import  AntDesign  from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import {inject,observer} from 'mobx-react'

@inject(["mbx"])
@observer // 监听当前组件
class Shequ extends Component{
    static navigationOptions = {
        title: 'Community',
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
    login=()=>{
        Alert.alert('Tips','Please log in and do it again.',[{'text':'Later on'},{'text':'ok',onPress:()=>{
          this.props.navigation.navigate('Login')
        }}])
    }
    warn=()=>{
        Alert.alert('Tips','Thank you for your report. We will proceed with this information.',[{'text':'ok'}])
        fetch('https://www.fastmock.site/mock/a714e9c2b1cb027f235d6991f2b4b3f1/pastry/warn')
        .then(res=>res.json())
        .then()
        .catch()
    }    
    componentDidMount(){
        fetch('https://www.fastmock.site/mock/a714e9c2b1cb027f235d6991f2b4b3f1/pastry/get_myrelise')
        .then(res=>res.json())
        .then(res=>{

        })
        .catch()
    }
    render(){
        const login=this.props.mbx.login
        const data=this.props.mbx.data
       
        return(
            <SafeAreaView style={{flex:1}}>
                      
           <View style={{width:gao.w,height:gao.h*.1,
            backgroundColor:gao.theme,
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Text style={{fontSize:18,color:'white',fontWeight:'500'}}>Community</Text>
           </View>
           
           <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
          
          {
             data.map((i,k)=>{
                return   <View style={{width:'100%',marginTop:k==0?0:20}}>
                       <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
             <Image source={{uri:i.uimg}} 
              style={{width:60,height:60,borderRadius:30}}
             />
             <View style={{marginLeft:10}}>
                 <Text style={{fontSize:18,fontWeight:'500'}}>{i.name}</Text>
                 <Text style={{marginTop:5,color:gao.hui2}}>{i.time}</Text>
             </View>
               </View>

               <TouchableOpacity onPress={()=>{
                    login?
                   this.props.navigation.navigate('Shequxq',{info:i})
                   :
                   this.login()
               }}>

               <Text style={{fontSize:16,marginTop:20,lineHeight:22,letterSpacing:1}}>
               {i.content}
               </Text>
               </TouchableOpacity>
              
               <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:20}}>
{
    i.con_img.map((m,k)=>{
return (
    <TouchableOpacity onPress={()=>{
        login?
        this.props.navigation.navigate('Shequxq',{info:i})
        :
        this.login()
    }}>
        <Image source={{uri:m.img}} 
         style={{width:gao.w*.28,height:gao.w*.28}}
        />
    </TouchableOpacity>
  )
    })
}
               </View>
               
               <View style={{flexDirection:'row',justifyContent:'space-between',
               width:'100%',marginTop:20}}>
                 <TouchableOpacity onPress={()=>{
                     login?
                     this.warn()
                     :
                     this.login()
                 }}>
                  <AntDesign name='warning' style={{fontSize:18,color:'#909497'}} />
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>{
                      login?
                      this.props.navigation.navigate('Shequxq',{info:i})
                      :
                      this.login()
                 }}>
                  <AntDesign name='message1' style={{fontSize:18,color:'#909497'}} />
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>{
                     login?
                     this.props.mbx.zan(k)
                    :
                    this.login()
                 }}>
                  <AntDesign name='like1' style={{fontSize:18,color:i.zan?'red':'#909497'}} />
                 </TouchableOpacity>

               </View>
               <Divider style={{width:'100%',height:10,backgroundColor:'#D7DBDD',marginTop:20}}/>
              
                       </View>
              })
          }
             

              

           </ScrollView>
           <TouchableOpacity onPress={()=>{
                  login?
                  this.props.navigation.navigate('Relese')
                  :
                  this.login()
             }}>
                 <Icon name='ios-add-circle' style={{
                     fontSize:50,color:gao.theme,
                     position:'absolute',bottom:80,
                     right:20
                 }}/>
             </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Shequ