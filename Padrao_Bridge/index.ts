import { ArrayListQueue } from "./class/ArrayListQueue";
import { FIFOQueue } from "./class/FIFOQueue";
import { VectorQueue } from "./class/VectorQueue";

var a = new ArrayListQueue()
var i = new FIFOQueue(a);
var b = new VectorQueue()
var v = new FIFOQueue(b); 

i.enQueue({
    "chave": "valor"
})
i.enQueue({
    "a": "b"
})
i.enQueue({
    "1": "2"
})
console.log(i)
console.log(i.size())
console.log(i.isEmpty())
i.deQueue()
console.log(i)

v.enQueue({
    "chave": "valor"
})
v.enQueue({
    "a": "b"
})
v.enQueue({
    "1": "2"
})
console.log(v)
console.log(v.size())
console.log(v.isEmpty())
v.deQueue()
console.log(v)