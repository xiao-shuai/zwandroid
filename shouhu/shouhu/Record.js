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
import {inject,observer} from 'mobx-react'

@inject(["mbx"])
@observer // 监听当前组件
class Record extends Component{
    static navigationOptions = {
        title: 'Maintenance record',
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
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

   componentDidMount(){
       fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/record')
       .then(res=>res.json())
       .then(res=>{

       })
       .catch(err=>{

       })
   }   
    render(){
        const buttons = ['Pending maintenance', 'Completed']
        const { selectedIndex } = this.state
        const data=this.props.mbx.record
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
     <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      selectedButtonStyle={{backgroundColor:'#48C9B0'}}
      buttons={buttons} 
      containerStyle={{height:pk.h*.05}}

    />
    {
        selectedIndex==0?
        <ScrollView>
            {
                data.map((i,k)=>{
             return (
                <View style={{width:pk.w*.9,
                    backgroundColor:'white',
                    borderRadius:6,
                    padding:10,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginTop:20
                    }} key={k}> 
        
                    <View>
                     <Text style={{fontSize:18,color:'#424949'}}>
                      title: {i.tit.length>10? i.tit.substr(0,10)+'..':i.tit}
                     </Text>            
                     <Text style={{fontSize:18,color:'#424949',marginTop:10}}>
                      address: {i.add.length>10? i.add.substr(0,10)+'..':i.add}
                     </Text>
                      </View>
                      <Button title='Waiting' buttonStyle={{
                          backgroundColor:'#E74C3C'
                      }}/>
                 </View>
             )
                })
            }
        
        </ScrollView>
        :
        <ScrollView>
           <View style={{width:pk.w*.9,
            backgroundColor:'white',
            borderRadius:6,
            padding:10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginTop:20
            }}> 

            <View>
             <Text style={{fontSize:18,color:'#424949'}}>
              title: Lamp tube
             </Text>            
             <Text style={{fontSize:18,color:'#424949',marginTop:10}}>
              address: Fragrant Park
             </Text>
              </View>
              <Button title='Completed' buttonStyle={{
                  backgroundColor:'#28B463'
              }}/>
         </View>
        </ScrollView>
    }
        </SafeAreaView>
        )
    }
}

export default Record

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
      }
})