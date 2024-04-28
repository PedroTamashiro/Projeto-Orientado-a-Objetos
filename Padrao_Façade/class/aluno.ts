export class aluno{
   
    private matricula: string
    private nome: string

    constructor(matricula: string, nome: string){
        this.matricula = matricula
        this.nome = nome
    }

    public getNome(){
        return this.nome
    }
    public getMatricula(){
        return this.matricula
    }
}