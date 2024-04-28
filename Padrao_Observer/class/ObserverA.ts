import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";
import { amazonData } from "./AmazonData";

export class observerA implements observer{
    update(subject: amazonData) {
        if(subject.ph < 7){
            console.log("Ph menor que 7")
        }
    }    
}