import { aluno } from "./aluno";
import { curso } from "./curso";
import { escola } from "./escola";
import { turma } from "./turma";
import { interfaceGUI } from "./InterfaceGUI";
import { interfaceUI } from "./InterfaceUI";
import { interfaceWEB } from "./InterfaceWEB";

export class facade {
    private GUI: interfaceGUI
    private UI: interfaceUI
    private WEB: interfaceWEB
    private escola: escola

    constructor(){
        this.GUI = new interfaceGUI()
        this.UI = new interfaceUI()
        this.WEB = new interfaceWEB()
        this.escola = new escola()

    }
    public matricular(codAluno, codCurso, turma){
        var c = ""
        if(turma == null){
            turma = new turma()
            c = this.escola.getCurso(codCurso)
            turma.setCurso(c)
        }
        c = this.escola.getAluno(codAluno)
        turma.addAluno(c)
    }

    public exibirStatus(turma){
        console.log("status")    
    }
}