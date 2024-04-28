export class curso{
    private codigo: string

    constructor(codigo: string){
        this.codigo = codigo
    }

    public getNome(){
        return this.codigo
    }
}