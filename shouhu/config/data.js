import { observable, action } from "mobx";

class PP {
    @observable login;
    @observable record;
    constructor(props){
        this.login=false,
        this.record=[
            {
             tit:'Chair damage',
             add:'Zhongshan Park',   
            }
        ]

    }

    change_login=(e)=>{
        this.login=e
    }

    save_=(e)=>{
        this.record.unshift(e)
    }
}

const mbx=new PP()

const store ={
    mbx
}
export {store}