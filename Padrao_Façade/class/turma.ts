import { curso } from "./curso";
import { aluno } from "./aluno";

export class turma{
    
    private curso: curso 
    private alunos: aluno[] = []

    constructor(curso: curso, aluno: aluno[]){
        this.curso = curso
        this.alunos = aluno
    }

    public setCurso(): curso{
        return this.curso
    }
    public addAluno(aluno: aluno): aluno[]{
        this.alunos.push(aluno)
        return this.alunos
    }
}