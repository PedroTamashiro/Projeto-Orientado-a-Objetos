import { list } from "./list";
import { implementacion } from "../interface/implementacion";

export class VectorQueue implements implementacion{
    list: list = new list()

    enQueue(o: object) {
        this.list.add(o)
        console.log("adicionado com VectorQueue")
    }
    deQueue(): object {
        this.list.remove(0)
        console.log("Removido com VectorQueue")
        return this.list.list
    }
    isEmpty(): boolean {
        return this.list.list.length === 0
    }
    size(): number {
        return this.list.list.length
    }
}