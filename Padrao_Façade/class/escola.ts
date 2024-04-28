export class escola{
    public getCurso(codCurso){
        if(codCurso == 101){
            return "Matematica"
        }else if(codCurso == 102){
            return "logistica"
        }else if(codCurso == 103){
            return "Mecatronica"
        }else{
            return "Indefinido"
        }
    }
    public getAluno(codAluno){
        if(codAluno == 301){
            return "Mateus"
        }else if(codAluno == 302){
            return "Pedro"
        }else if(codAluno == 303){
            return "Maria"
        }else{
            return "Indefinido"
        }
    }
}