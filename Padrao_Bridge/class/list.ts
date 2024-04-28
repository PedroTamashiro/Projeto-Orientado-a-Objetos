export class list {
    list: Array<object> = []

    add(o: object){
        this.list.push(o)
    }
    remove(ind: number){
        this.list.splice(ind, 1)
    }
}