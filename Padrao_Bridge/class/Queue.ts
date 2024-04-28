import { implementacion } from "../interface/implementacion";

export class Queue{
    protected imp: implementacion;

    constructor(imp: implementacion){
        this.imp = imp
    }
    public enQueue(o: object) {
        this.imp.enQueue(o)
    }
    public deQueue(): object{
        return this.imp.deQueue()
    }
    public isEmpty(){
        return this.imp.isEmpty()
    }
    public size(){
        return this.imp.size()
    }
}