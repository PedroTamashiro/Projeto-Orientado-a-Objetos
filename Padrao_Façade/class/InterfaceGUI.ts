import { facade } from "./Facade"

export class interfaceGUI {
    private Facade: facade

    constructor(){
        this.Facade = new facade()
    }

    public matriculaGUI(codAluno, codCurso, turma){
        this.Facade.matricular(codAluno, codCurso, turma)    
        console.log("Matriculado via GUI")
    }
    public exibirStatus(turma){
        this.Facade.exibirStatus(turma)
        console.log("conferido via GUI")
    }
}