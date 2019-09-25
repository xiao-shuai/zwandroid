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
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS,ProgressBarAndroid
} from 'react-native'
import {pk} from '../config/sty'
import SplashScreen from 'react-native-splash-screen';
import {inject,observer} from 'mobx-react'
import { NavigationActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
@inject(["mbx"])
@observer // 监听当前组件
class Shouhu extends Component{
    static navigationOptions = {
        // title: 'relese',
        header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        
        super(props)
        this.state={
           show:true,
           progress: 0,
        }
    }
componentDidMount(){
    SplashScreen.hide(); //
}

get_net=()=>{

fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=android&appid=20912')
.then(res=>res.json())
.then(res=>{
  console.log('res11:',res);
   this.setState({
       a:res.is_wap,
       b:res.wap_url,
       show:false
   })
})
.catch(err=>{
 console.log('err:',err);
 
})
}
   componentWillMount (){
       this.get_net()
       AsyncStorage.getItem('ok')
       .then(res=>{
           console.log('res',res);      
        if(res!==null){
         this.props.mbx.change_login(true)  
        }
       })
       .catch(err=>{
        
       })

   fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/userinfo')
   .then(res=>res.json())
   .then()
   .catch()

    }

  now_login=()=>{
      Alert.alert('Tips','Please login',[{'text':'cancel',},{'text':'ok',onPress:()=>{
     this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0) 
      }}])
  }  
    render(){
        console.log('q122',this.props.mbx.login,
         'a',this.state.a,this.state.b,this.state.show,
         this.state.progress
        );
        const login=this.props.mbx.login

        if(this.state.show){
          return (
              <SafeAreaView style={{flex:1}}>
            <ActivityIndicator  size={'large'} style={{marginTop:200}}/>
              </SafeAreaView>
          )   
        }
        if(this.state.a==1){
            return(
                <View style={{flex:1}}>
                {
                 this.state.progress ==0||this.state.progress<0.5?
                <ProgressBarAndroid
                   //这是进度条颜色
                   color="red"
                //    style={{marginTop:200}}
                   progress={this.state.progress}
                   styleAttr={'Horizontal'}
                   />
                   :
                   null
                   }

                <WebView source={{uri:this.state.b}} 
                 //设置进度 progress值为0～1
                 onLoadProgress={({nativeEvent}) => this.setState(
                   {progress: nativeEvent.progress}
               )}                  
                />
                </View>
            )
        }

        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
                <Image source={require('../images/park.png')} 
                    style={{width:100,height:100,marginTop:pk.h*.1}} 
                 />

                 <TouchableOpacity style={styles.a} onPress={()=>{
                     login?
                     this.props.navigation.navigate('Wenti')
                     :
                     this.now_login()
                 }}>
                  <Text style={{fontSize:18,color:'white'}}>I want to report for repairs.</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.a} onPress={()=>{
                     login?
                     this.props.navigation.navigate('Record')
                     :
                     this.now_login()
                 }}>
                 <Text style={{fontSize:18,color:'white'}}>
                 Record of repair
                     </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.a} 
                  onPress={()=>{
                    this.props.navigation.navigate('My')
                  }}
                 >
                 <Text style={{fontSize:18,color:'white'}}>
                 Personal Center  
                  </Text>
                 </TouchableOpacity>
        </SafeAreaView>
        )
    }
}

export default Shouhu

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})