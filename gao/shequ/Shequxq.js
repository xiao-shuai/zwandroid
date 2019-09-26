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
class Shequxq extends Component{
    static navigationOptions = {
        title: 'Community details',
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
    
    render(){
        const login=this.props.mbx.login
       const info=this.props.navigation.getParam('info')
        const  data=[
            {
              uimg:'https://c-ssl.duitang.com/uploads/item/201202/04/20120204174220_Xw2Lf.thumb.700_0.jpg',
              name:'Tom',
              time:'2019/8/9',
              content:'"Buffett" is a transliteration of Parfait in French. Adjectives are perfect in English. France is really a dessert country. There are many classic recipes. My aunt must go to this dessert to study religiously if she has the chance.',
              tit:'Plain muffin',
              con_img:[
                  {
                   img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                  },
                  {
                    img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                   },
                   {
                    img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                   },

              ]   
            },
            {
                uimg:'https://c-ssl.duitang.com/uploads/item/201212/11/20121211232626_QM2eE.thumb.700_0.jpeg',
                name:'Alice',
                time:'2019/8/8',
                tit:'Food every day',
                content:'Prepare all the ingredients, pour an egg into the bowl and add sugar.Stir well until the color is white, add milk, add honey and stir evenly.Add corn oil and mix well with low gluten flour and baking powder. Sift in low gluten flour and baking powder.',
                con_img:[
                    {
                     img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                    },
                    {
                      img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                     },
                     {
                      img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                     },
  
                ]   
              },

        ]
        return(
            <SafeAreaView style={{flex:1}}>
                      
           
           
           <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
          
         
                 <View style={{width:'100%',marginTop:20}}>
                       <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
             <Image source={{uri:info.uimg}} 
              style={{width:60,height:60,borderRadius:30}}
             />
             <View style={{marginLeft:10}}>
                 <Text style={{fontSize:18,fontWeight:'500'}}>{info.name}</Text>
                 <Text style={{marginTop:5,color:gao.hui2}}>{info.time}</Text>
             </View>
               </View>

               <TouchableOpacity>

               <Text style={{fontSize:16,marginTop:20,lineHeight:22,letterSpacing:1}}>
               {info.content}
               </Text>
               </TouchableOpacity>
              
               <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:20}}>
{      info.con_img.map((m,k)=>{
return (
    <TouchableOpacity onPress={()=>{

    }}>
        <Image source={{uri:m.img}} 
         style={{width:gao.w*.28,height:gao.w*.28}}
        />
    </TouchableOpacity>
  )
     })
}
               </View>
               

               <Divider style={{width:'100%',height:10,backgroundColor:'#D7DBDD',marginTop:20}}/>
              
                       </View>

                  
                       <View style={{width:'100%',marginTop:20}}>
                       <Text style={{color:gao.theme,fontSize:18}}>comment</Text>
                       <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginTop:20}}>
             <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201209/25/20120925205558_kAmTr.thumb.700_0.jpeg'}} 
              style={{width:60,height:60,borderRadius:30}}
             />
             <View style={{marginLeft:10}}>
                 <Text style={{fontSize:18,fontWeight:'500'}}>Hugo</Text>
                 <Text style={{marginTop:5,color:gao.hui2}}>{info.time}</Text>
             </View>
               </View>
               <Text style={{fontSize:16,marginTop:10,color:'#A6ACAF'}}>Do you want yeast powder in the rice cooker when making cake?</Text>
               <Divider style={{backgroundColor:'#E5E7E9',height:1,width:'100%',marginTop:10 }}/>

               <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginTop:20}}>
             <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201503/15/20150315210713_jj5CV.thumb.700_0.jpeg'}} 
              style={{width:60,height:60,borderRadius:30}}
             />
             <View style={{marginLeft:10}}>
                 <Text style={{fontSize:18,fontWeight:'500'}}>Adam</Text>
                 <Text style={{marginTop:5,color:gao.hui2}}>{info.time}</Text>
             </View>
               </View>
               <Text style={{fontSize:16,marginTop:10,color:'#A6ACAF'}}>Do you want yeast powder in the rice cooker when making cake?</Text>
               <Divider style={{backgroundColor:'#E5E7E9',height:1,width:'100%',marginTop:10 }}/>
               
                       </View>
                       
  
           </ScrollView>
           
            </SafeAreaView>
        )
    }
}

export default Shequxq