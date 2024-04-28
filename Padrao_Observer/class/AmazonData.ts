import { observer } from "../interface/Observer";
import { subject } from "../interface/Subject";

export class amazonData implements subject{
    public ph = 7
    public ATM = 1
    public Temp = 28

    private observers: observer[] = []

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