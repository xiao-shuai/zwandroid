import { observable, action } from "mobx";

class ASD {
    @observable login;
    
    constructor(){
        this.login=false
    }

    change_login=(e)=>{
        this.login=e
    }
   
}
const mbx=new ASD()

const store={
    mbx
}
export default store