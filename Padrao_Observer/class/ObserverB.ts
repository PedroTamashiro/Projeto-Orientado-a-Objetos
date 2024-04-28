import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";
import { amazonData } from "./AmazonData";

export class observerB implements observer{
    update(subject: amazonData) {
        if(subject.ATM > 100){
            console.log("atm maior que 100")
        }
    }    
}