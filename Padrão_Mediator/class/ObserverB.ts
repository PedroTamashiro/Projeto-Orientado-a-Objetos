import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";
import { amazonData } from "./AmazonData";

export class observerB implements observer{
    
    private mediator: subject

    constructor(mediator?: subject){
        this.mediator = mediator!
    }

    setMediator(mediator: subject){
        this.mediator = mediator
    }

    pressRedButton(subject: amazonData){
        if(subject.ph < 4){
            console.log('NÍveis de PH da água em niveis perigosos')
        }else if(subject.Temp > 80){
            console.log('Nível de temperatura da região em nível perigoso')
        }else if(subject.Temp < 15){
            console.log('Queda abrupta de temperatura')
        }else{
            return -1
        }
    }
    update(subject: amazonData) {
        if(subject.ATM > 100){
            console.log("atm maior que 100")
        }
    }    
}