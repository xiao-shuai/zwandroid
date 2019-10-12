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
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import {gao} from '../sty/sty'
import {inject,observer} from 'mobx-react'
import SplashScreen from 'react-native-splash-screen';
import { WebView } from 'react-native-webview';
@inject(["mbx"])
@observer // 监听当前组件
class Main extends Component{

    constructor(props){
        super(props)
        this.state={
          show:true,
          progress: 0,
        }
        
    }
componentWillMount(){
  
  AsyncStorage.getItem('ok')
  .then(res=>{
      console.log('qq:',res);
      if(res!==null){
       this.props.mbx.change_login(true) 
      }
      
  })
  .catch()   
}
get_info=()=>{

  fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=android&appid=20913')
  .then(res=>res.json())
  .then(res=>{
    console.log('res11:',res);
     this.setState({
         aa:res.is_wap,
         bb:res.wap_url,
         show:false
     })
  })
  .catch(err=>{
   console.log('err:',err);
   
  })
  }
componentDidMount(){
  // this.get_info()
  SplashScreen.hide(); //
}
  login=()=>{
      Alert.alert('Tips','Please log in and do it again.',[{'text':'Later on'},{'text':'ok',onPress:()=>{
        this.props.navigation.navigate('Login')
      }}])
  }         

    render(){
      console.log('121',this.props.mbx.login);
       const login=this.props.mbx.login
        const aa=[
            {
              img:'https://c-ssl.duitang.com/uploads/item/201706/13/20170613200830_hHMLZ.thumb.700_0.jpeg',
              tit:'Ice-skinned moon cakes filled with pumpkin',
              hot:'125',
              con:'Using pumpkin to make moon cake pie is not only beautiful in color, but also without additional sugar. It tastes sweet, soft and waxy, not greasy, suitable for all ages, especially for people with hyperglycemia. Today is the Mid-Autumn Festival. This kind of moon cake is especially suitable for ready-made and ready-to-eat. It`s simple and easy to do without difficulty. You`ll see it once.',
              con2:'Prepare ingredients, ice-covered mooncake powder 200g; Pumpkin stuffing appropriate amount. Put 200 g ice-covered mooncake powder into a basin, take boiling water above 85 degrees and 200 g, pour water into the powder, cut and mix into dough to cool. Put on disposable gloves and knead into dough. Take a dough flatten slowly and push it thin by hand, or roll it thin with a rolling pin, wrap it in the prepared pumpkin stuffing, and move the tiger mouth upward slowly, so that the skin evenly wraps the stuffing, closes and rubs round, there is no gap, and put the moon cake into the mold to extrude and shape.',  
            },
            {
                img:'https://c-ssl.duitang.com/uploads/item/201601/11/20160111171905_zF5d3.thumb.700_0.jpeg',
                tit:'Fresh meat mooncakes with pickles',
                hot:'234',
                con:'Every Mid-Autumn Festival, we have to make some, crisp skin wrapper with fresh sweet meat filling, a mouthful of some gravy, how can we not love it?. Chop sandwich meat, add onion, ginger foam, sauce, cooking wine, pepper, raw sauce, oyster oil, sugar. Stir in one direction Mix all the ingredients of the crisp together. Mix all the ingredients in water and oil together.',
                con2:'Mixed dough covered with fresh-keeping film wakes up for half an hour. Divide the pastry and water into equal parts. Oil and water wrapped in crispy bread. Roll it up from one side Roll again into thin sheets .Continue to roll up and cover with plastic wrap to wake up for a quarter of an hour. Then fry the surface of the small fire into golden yellow, so that when baking, it won`t bulge badly in the middle, and the crust of the cake is tightly wrapped in the meat filling.'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094010_zvWmK.thumb.700_0.jpeg',
                tit:'Home Moon Cake--Sesame White Sugar Moon Cake',
                con:'Today, I went back to my mother`s home. My mother branded the moon cakes of my hometown. I remember when I was a child. They tasted like when I was a child. They were crisp and sweet. This is the moon cakes of my favorite hometown. Put yeast powder in a larger bowl and add warm water without hot hands. Blend evenly into non-granular shape. Add two eggs to the flour.',
                con2:'Add a little more sugar. Pour in yeast powder water and make a smooth, harder dough. If the bowl of water is not enough, add a little warm water in moderation until the dough is smooth and wake up. Rolling sesame with a rolling pin . Add sugar to it. Mix well and set aside. Just double the dough size. Roll into thick pieces like dumpling skin. Don`t roll too thin. Put sesame candy stuffing on them. Medium-grade electric cake, heated, put into the cake billet, without secondary fermentation',
                hot:'345'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201511/17/20151117211302_SKysX.thumb.700_0.jpeg',
                tit:'Snow skin mooncake',
                con:'Don`t bake moon cakes, soft waxy Q-balls with favorite fillings, especially sweet. Boil lotus seeds in clear water. Cool them slightly and beat them into mud with a cooking machine. Add oil, stir-fry with sugar. Add minced cranberries, coconut and maltose. Mix well and refrigerate. Add all the ingredients in the crust. Mix well and wake up for 20 minutes.',
                con2:'Steam for about 20 minutes over a large heat. Then knead the dough evenly (I beat it in the bread machine for half an hour) and refrigerate it in a fresh-keeping bag for 2 hours. Pie crust, filling divided into equal parts of small dosage. Put a fresh-keeping film on the top and bottom of the facial skin and press it flat. Pack the stuffing. Then wrap it up with fresh-keeping film. Wrap in a cooked glutinous rice flour. Press out the shape with a die. Refrigerators taste better after refrigeration',
                hot:'333'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201508/15/20150815155144_Pd3sn.thumb.700_0.jpeg',
                tit:'Pumpkin iced moon cake stuffing.',
                con:'Pumpkin ice-skinned moon cake stuffing. Pumpkin, a friend sent from home, no fertilizer, no pesticides, wash off the top and root, do not remove the old skin, pumpkin skin nutrition is more abundant, Pumpkin Peel contains pectin, can promote digestion, defecation and detoxification. Steam the pumpkin in the drawer for about 10 minutes, then cook it. Remove the steamed pumpkin and cool it. Pump the yellow part into a bowl and press it into a pumpkin paste. Pump the green part into a bowl and press it into a pumpkin paste. This will make the color more beautiful.',
                con2:' Green part I added a proper amount of milk powder and corn starch, to achieve viscous. Yellow part added a proper amount of corn starch and peanut crushed, peanut crushed is not specially prepared, just make chili sauce left a little, do not waste food, there is no need not add, directly add corn starch, like milk flavor can be added to milk powder. Add a little peanut oil into the non-stick pan and stir-fry pumpkin mud. The main purpose is to stir-fry corn starch, because iced moon cakes are ready to eat directly, and the filling must be ripe.',
                hot:'233'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201504/15/20150415H1746_tjWdz.thumb.700_0.jpeg',
                tit:'Snow skin mooncake',
                hot:'234',
                con:'Today is the annual Mid-Autumn Festival. Ice-skinned moon cakes should not be kept for a long time. Generally, they can be made one or two days in advance on that day. It`s better to put them in the refrigerator. This time, I made iced tea peel with three kinds of fillings: bean paste, bean paste, chestnut, raspberry and tea flavor. Boil 200 g water, add 200 g intervention powder, 2 g tea powder, stir evenly while hot. Weigh the fillings well, with an average of 35g each and 15g mooncake skins, in the same proportion as ordinary mooncakes. The mooncake skins are slightly pinched thin and put into the fillings. The tiger-shaped wrapping method is adopted. Slowly push upward, and the closure is rounded.',
                con2:'Choose a 50g moon cake mould and press it twice gently. If you stick the mould, you can apply a small amount of edible oil. Different fillings can be divided into different pattern sets. When done, you can pack it directly and put it in the refrigerator for several hours before eating. Some of them will melt at room temperature and the pattern will be blurred. Generally, it can be kept in the refrigerator for about three days.'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201801/02/20180102033254_iEPwV.thumb.700_0.jpeg',
                tit:'Blue and White Porcelain Ice Skin Mooncakes',
                hot:'233',
                con:'Tired of eating high-oil and high-sugar Cantonese moon cakes, the Mid-Autumn Festival must pull grass under the ice-skin moon cakes, blue and white porcelain ice-skin moon cakes with both facial value and internal, look at them feel particularly beautiful, pleasant to the eye, wrapped in a homemade butter filling, very delicious, while eating! Wanmu Lifting Pot is used in the recipe. It is equipped with lifting and filtering basket. It is not only convenient to eat hot pot, but also convenient to steam sugar-free rice, steamed buns, steamed buns and dumplings. It is also convenient to cook steamed food. One pot is multi-purpose. The capacity of 5 liters is very cool to eat hot pot.',
                con2:'Prepare the necessary ingredients. The butterfly flower is soaked in 48 grams of boiling water for 10 minutes. Blue ice skin: filter out 45 grams of butterfly flower water, add glutinous rice flour, glutinous rice flour, clear noodles, fine sugar and corn oil, mix well. White ice skin: milk, glutinous rice flour, glutinous rice flour, clear noodles, fine sugar and corn oil, mix well. Cover with fresh-keeping film and tie several holes with toothpick. Put it into the pot. After boiling, continue cooking for 15 minutes until cooked. The surface will be solidified.'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201704/10/20170410170512_NzuBV.thumb.700_0.jpeg',
                tit:'Pumpkin bean paste moon cake',
                con:'Pumpkin bean paste mooncakes. Today, I opened the refrigerator and saw two pieces of pumpkin left behind. Now everyone is busy baking mooncakes. Today, we use pumpkin to make a simple, non-baked mooncakes, that is, steamed mooncakes. Frozen pumpkin in the refrigerator. Steamed in a pot. Make pumpkin into mud, add glutinous rice flour and low flour. Live into a slightly harder flour. Dough (dough should not be too soft, add some glutinous rice flour if it feels soft). After half an hour of relaxation, it is divided into 25 grams of dough. Red bean paste is also divided into 25 grams of each. Take a pumpkin dough and flatten it, wrap it in a red bean paste.',
                con2:'Put the dough, dip in proper amount of hand powder, press the pattern with your favorite mould. Put it on the plate. Put it in the steaming pot. Steam it in cold water and hot water for 12 minutes. Pumpkin bean paste is sweet and sweet. Soft glutinous Q-ball, and it`s also delicious to cool. Put the dough, dip in proper amount of hand powder, press the pattern with your favorite mould. Put it on the plate. Put it in the steaming pot. Steam it in cold water and hot water for 12 minutes. Pumpkin bean paste is sweet and sweet. Soft glutinous Q-ball, and it`s also delicious to cool.',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201506/15/20150615103608_f8rYx.thumb.700_0.jpeg',
                tit:'Raisin glutinous rice cake',
                hot:'234',
                con:'Raisin glutinous rice cake. This "raisin glutinous rice cake" is an original method of production. In the past, when making "glutinous rice zi", "making cakes", "cooked cakes" and other foods with glutinous rice flour, they were all steamed. This production method is stir-fried, a good way to share here, simple, convenient, fast and practical.Main and auxiliary materials: glutinous rice flour, raisins, butter, coconut sugar. Soak and wash the raisins, drain the water and set aside. Add white sugar to the glutinous rice flour and mix well.',
                con2:'Add water and stir to make a sticky paste. Stir in butter in a non-stick pan and melt it over low heat. Pour into glutinous rice paste. Stir-fry until dough has been formed, add a little butter and stir again. Stir-fry until dough is ripe and add raisins. Repeatedly turn and mix the raisins well. Cool and come out of the pot. Place it on the desk. Dip in coconut and serve. Serve it.',  
              },
        ]

      


        return(

            <SafeAreaView style={{flex:1,zIndex:10}}>

             <ScrollView contentContainerStyle={{zIndex:10}}>
                 
            <View style={{height:gao.h*.25}}>
             <Swiper  >
              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Mainxq',{info:require('../img/ban1.png'),s:'1'})
              }}>
             <Image source={require('../img/ban1.png')} style={styles.ban}/>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{
                  this.props.navigation.navigate('Mainxq',{info:require('../img/ban2.png'),s:'1'})
              }}>
            <Image source={require('../img/ban2.png')} style={styles.ban}/>
              </TouchableOpacity>
             </Swiper>
             </View>
              
              {/*  */}
              <View style={{paddingBottom:0,paddingTop:20,paddingLeft:20}}>
                  <Text style={{fontSize:18,fontWeight:'500',color:gao.theme}}>Hot desserts</Text>
              </View>

              <View style={{
              padding:20,
              flexDirection:'row',
              justifyContent:'space-between',
              flexWrap:'wrap'
              }}>
              {
                aa.map((i,k)=>{
                  return (
                      <TouchableOpacity style={{marginTop:20}} key={k} 
                        onPress={()=>{
                            login?
                             this.props.navigation.navigate('Mainxq',{info:i})
                            :
                            this.login()
                        }}
                      >
                       <Image source={{uri:i.img}} style={{width:gao.w*.28,height:gao.w*.28}} />
                       <Text style={{marginTop:8,fontWeight:'500',fontSize:16}}>{i.tit.substr(0,10)+'...'}</Text>
                      </TouchableOpacity>
                  )
                })
              }
              </View>
             </ScrollView>  
             {/* <TouchableOpacity onPress={()=>{
               console.log(22);
              alert(11)
               
                  login?
                  this.props.navigation.navigate('Relese')
                  :
                  this.login()
             }} style={{ zIndex:100}}>
                 <Icon name='ios-add-circle' style={{
                     fontSize:50,
                     color:gao.theme,
                    //  position:'',
                     bottom:80,
                    //  right:20,
                    marginLeft:'60%'
                    
                 }}/>
             </TouchableOpacity> */}
            </SafeAreaView>
        )
    }
}

export default Main
const styles =StyleSheet.create({
    ban:{
        width:gao.w,
        height:gao.h*.25
    }
})