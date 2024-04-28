import { amazonData } from "./class/AmazonData";
import { observerA } from "./class/ObserverA";
import { observerB } from "./class/ObserverB";
import { observerC } from "./class/ObserverC";

const UFRJ = new observerA()
const UFMG = new observerB()
const UNIFESP = new observerC()

const Amazonia = new amazonData()

Amazonia.attach(UFMG)
Amazonia.attach(UFRJ)
Amazonia.attach(UNIFESP)

Amazonia.notify()

for(let i=0; i<10; i++){
    Amazonia.getPCD()
}