import { forEachChild } from "typescript";
import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";
import { observerA } from "./ObserverA";
import { observerB } from "./ObserverB";
import { observerC } from "./ObserverC";

export class amazonData implements subject{
    
    public ph = 7
    public ATM = 1
    public Temp = 28

    private observers: observer[] = []

    private university1: observerA
    private university2: observerA
    private university3: observerB
    private university4: observerC
    private universitys: observer[] = []

    constructor(u1: observerA, u2: observerA, u3: observerB, u4: observerC){
        this.university1 = u1
        this.university1.setMediator(this)
        this.university2 = u2
        this.university2.setMediator(this)
        this.university3 = u3
        this.university3.setMediator(this)
        this.university4 = u4
        this.university4.setMediator(this)
        this.universitys.push(this.university1)
        this.universitys.push(this.university2)
        this.universitys.push(this.university3)
        this.universitys.push(this.university4)
        
    }

    public redButton(){
        for(const university of this.universitys){
            if(university.pressRedButton(this) === -1){
                return console.log('Nenhum estado de emergencia detectado')
            }
        }
    }

    public attach(observer: observer): void {
        const isExist = this.observers.includes(observer)
        if(isExist){
            return console.log("Valor já esta na lista")
        }
        this.observers.push(observer)
        return console.log('Valor adicionado a lista')
    }
    public detach(observer: observer): void {
        const index = this.observers.indexOf(observer)
        if(index === -1){
            return console.log('Valor não existe na lista')
        }

        this.observers.splice(index, 1)
        return console.log('Valor retirado da lista')
    }
    public notify(): void {
        console.log('Notificando observadores...')
        for(const observer of this.observers){
            observer.update(this)
        }
        this.redButton()
    }
    getPH(){
        this.ph = Math.floor(Math.random()*14)
    }
    getATM(){
        this.ATM = Number((97+Math.random() * (107-97)).toFixed())
    }
    getTemp(){
        this.Temp = Number(Math.floor(Math.random() * 100))
    }
    public getPCD(){
        this.getATM()
        this.getPH()
        this.getTemp()

        this.notify()
    }
}