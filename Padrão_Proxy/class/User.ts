import { subject } from "../interface/subject";
import { proxySubject } from "./proxy";

export class user {
    private number1: number
    private number2: number
    private subject: subject

    constructor(n1: number, n2:number, subject: subject){
        this.number1 = n1
        this.number2 = n2
        this.subject = subject
    }

    public calculate(){
        console.log(this.subject.operation(this.number1, this.number2, 1))
        console.log(this.subject.operation(this.number1, this.number2, 2))
        console.log(this.subject.operation(this.number1, this.number2, 3))
        console.log(this.subject.operation(this.number1, this.number2, 4))
    }
}