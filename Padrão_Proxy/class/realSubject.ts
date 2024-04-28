import { subject } from "../interface/subject";

export class realSubject implements subject{
    public operation(a: number, b: number, service: number): number {
        if(service === 1){
            console.log('retornando a multiplicação')
            return a*b
        }else if(service === 2){
            console.log('retornando a divisão')
            return a/b
        }else if(service === 3){
            console.log('retornando a soma')
            return a+b
        }else if(service === 4){
            console.log('retornando a substração')
            return a-b
        }else{
            console.log('serviço invalido')
            return -1
        }
    }
}