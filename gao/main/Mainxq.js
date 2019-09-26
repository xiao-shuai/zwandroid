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
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import {gao} from '../sty/sty'

class Mainxq extends Component {

    static navigationOptions = {
        title: 'details',
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
         const info =this.props.navigation.getParam('info')
         const s=this.props.navigation.getParam('s')
         console.log('s:',s);
         
         return(
         <SafeAreaView style={{flex:1}}>
          <ScrollView contentContainerStyle={{
              padding:20,alignItems:'center'
          }}>
              {
                  s==undefined?
                  <Text style={{fontSize:18,fontWeight:'500',color:'#797D7F'}}>{info.tit}</Text>
                  :
                  <Text style={{fontSize:18,fontWeight:'500',color:'#797D7F'}}>pastry- Delicious</Text>
              }

               {
                   s==undefined?
                   <Text style={{marginTop:20,lineHeight:20,color:'#A6ACAF',fontSize:16}}>
           {info.con}
             </Text>
             :
             <Text style={{marginTop:20,lineHeight:20,color:'#A6ACAF',fontSize:16}}>
           In 2004, when two young people were worried about what they ate for three meals a day, they created a small personal website.
Unexpectedly, this tiny seed has been loved and cared for by countless people, and has grown into a popular food network.
At present, our registered users exceed 10 million, and more than 3 million people use our services every day. Food users in the world mainly come from northern Shangguangshen and coastal provinces and municipalities. They live happily and enjoy sharing. They are more willing to cook soup for the love of washing hands.
I'm glad you call us "Beautiful Sky". I hope this seedling can grow into a big tree, with abundant branches and leaves, and red fruits.
Let's continue our wonderful journey to heaven.
             </Text>

               }
             
             {
                 s==undefined?
                 <Image source={{uri:info.img}} style={{width:'100%',height:gao.h*.24,borderRadius:8,marginTop:20}}/>
                 :
                 <Image source={info} style={{width:'100%',height:gao.h*.24,borderRadius:8,marginTop:20}}/>
             }
             {
                 s==undefined?
                 <Text style={{marginTop:20,lineHeight:20,color:'#A6ACAF',fontSize:16}}>
              {info.con2}
             </Text>
             :
             <Text style={{marginTop:20,lineHeight:20,color:'#A6ACAF',fontSize:16}}>
              In the world of gourmet food, you can know the ingredients and learn recipes.
From Xiaobai to Dacai, then the brain hole opens to surprise the whole audience; or challenge baking, sweetness fills the room.
Everyone is a gourmet. You are welcome to join us.——
The recipes here are all created by you, me and him. Welcome to share your specialties!
You can also talk about cooking, share your family's breakfast, the food you eat, and all kinds of good things about life.
You can also create your favorite recipes and menus, which belong to your knowledge album.
Every time I participate, I help others.
             </Text>
             }
             
          </ScrollView>
         </SafeAreaView>
         )
     }
}
export default Mainxq