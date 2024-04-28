import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";
import { amazonData } from "./AmazonData";

export class observerC implements observer{
    update(subject: amazonData) {
        if(subject.Temp >35){
            console.log("Temperatura maior que 35")
        }
    }    
}