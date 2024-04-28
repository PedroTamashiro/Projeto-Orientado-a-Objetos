import { Queue } from "./Queue";

export class FIFOQueue extends Queue{
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
