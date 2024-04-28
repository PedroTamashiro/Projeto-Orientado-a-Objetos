import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";
import { amazonData } from "./AmazonData";

export class observerC implements observer{

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
        if(subject.Temp > 80){
            this.mediator.redButton()
        }
        if(subject.Temp < 10){
            this.mediator.redButton()
        }
        if(subject.Temp >35){
            console.log("Temperatura maior que 35")
        }
    }    
}