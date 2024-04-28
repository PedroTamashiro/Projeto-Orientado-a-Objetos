import { subject } from "../interface/subject";
import { realSubject } from "./realSubject";

export class proxySubject implements subject{
    private realSubject: realSubject

    constructor(realSubject: realSubject){
        this.realSubject = realSubject
    }

    operation(a: number, b: number, device: number): number {
        return this.realSubject.operation(a, b, device)
    }
}