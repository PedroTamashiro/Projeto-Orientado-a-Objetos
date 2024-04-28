import { facade } from "./Facade"

export class interfaceUI {
    private Facade: facade

    constructor(){
        this.Facade = new facade()
    }    
    public matriculaUI(codAluno, codCurso, turma){
        this.Facade.matricular(codAluno, codCurso, turma)
        console.log("Matriculado via UI")
    }
    public exibirStatus(turma){
        this.Facade.exibirStatus(turma) 
        console.log("conferido via UI")
    }
}