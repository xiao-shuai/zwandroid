import { observable, action } from "mobx";
class  Gao {
    @observable login;
    @observable data;
    constructor(){
        this.login=false,
        this.data=[
            {
              uimg:'https://c-ssl.duitang.com/uploads/item/201202/04/20120204174220_Xw2Lf.thumb.700_0.jpg',
              name:'Tom',
              time:'2019/8/9',
              content:'"Buffett" is a transliteration of Parfait in French. Adjectives are perfect in English. France is really a dessert country. There are many classic recipes. My aunt must go to this dessert to study religiously if she has the chance.',
              tit:'Plain muffin',
              zan:false,
              con_img:[
                  {
                   img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094243_UiTW5.thumb.700_0.jpeg',   
                  },
                  {
                    img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094248_3eMFn.thumb.700_0.jpeg',   
                   },
                   {
                    img:'https://c-ssl.duitang.com/uploads/item/201506/15/20150615103608_f8rYx.thumb.700_0.jpeg',   
                   },

              ]   
            },
            {
                uimg:'https://c-ssl.duitang.com/uploads/item/201212/11/20121211232626_QM2eE.thumb.700_0.jpeg',
                name:'Alice',
                time:'2019/8/8',
                tit:'Food every day',
                zan:false,
                content:'Prepare all the ingredients, pour an egg into the bowl and add sugar.Stir well until the color is white, add milk, add honey and stir evenly.Add corn oil and mix well with low gluten flour and baking powder. Sift in low gluten flour and baking powder.',
                con_img:[
                    {
                     img:'https://a-ssl.duitang.com/uploads/item/201603/09/20160309112948_C2PUQ.thumb.700_0.jpeg',   
                    },
                    {
                      img:'https://c-ssl.duitang.com/uploads/item/201710/07/20171007034517_wNVYZ.thumb.700_0.jpeg',   
                     },
                     {
                      img:'https://c-ssl.duitang.com/uploads/item/201603/09/20160309112954_QdLVM.thumb.700_0.jpeg',   
                     },
  
                ]   
              },
              {
                uimg:'https://c-ssl.duitang.com/uploads/item/201710/07/20171007034510_kLRvH.thumb.700_0.jpeg',
                name:'Leonard',
                time:'2019/8/18',
                tit:'Oil residue sesame cake',
                zan:false,
                content:'This is a crisp and tender cake. Every time I branded some crisp and fragrant cakes for Xiaobao, and tender cakes for Dad. If friends like it and adjust it according to their needs, do not stick to the pan, burn it thoroughly with a big fire and then a small one, that`s all.',
                con_img:[
                    {
                     img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094245_yZveH.thumb.700_0.jpeg',   
                    },
                    {
                      img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094010_zvWmK.thumb.700_0.jpeg',   
                     },
                     {
                      img:'https://c-ssl.duitang.com/uploads/item/201509/09/20150909185727_RfZHs.thumb.700_0.jpeg',   
                     },
  
                ]   
              },

        ]
    }

    change_login=(e)=>{
        this.login=e
    }
    zan=(e)=>{
        this.data[e].zan=this.data[e].zan?false:true
    }
   
}
const mbx=new Gao()

const store={
    mbx
}
export default store