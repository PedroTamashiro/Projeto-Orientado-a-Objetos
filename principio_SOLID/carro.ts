// Princípio da Responsabilidade Única (Single Responsibility Principle)
class Carro {
    private modelo: string;
    private cor: string;
    private velocidade: number;

    constructor(modelo: string, cor: string) {
        this.modelo = modelo;
        this.cor = cor;
        this.velocidade = 0;
    }

    getModelo(): string {
        return this.modelo;
    }

    getCor(): string {
        return this.cor;
    }

    getVelocidade(): number {
        return this.velocidade;
    }

    acelerar(quantidade: number): void {
        this.velocidade += quantidade;
    }

    frear(quantidade: number): void {
        this.velocidade -= quantidade;
    }
}
    
// Princípio Aberto/Fechado (Open/Closed Principle)
interface FuncionalidadeExtra {
    executar(): void;
}

class SensorDeColisao implements FuncionalidadeExtra {
    executar(): void {
        console.log("Alerta de colisão!");
    }
}

// Princípio da Substituição de Liskov (Liskov Substitution Principle)
class CarroComSensor extends Carro {
    private funcionalidadeExtra: FuncionalidadeExtra | null;

    constructor(modelo: string, cor: string) {
        super(modelo, cor);
        this.funcionalidadeExtra = null;
    }

    adicionarFuncionalidadeExtra(funcionalidade: FuncionalidadeExtra): void {
        this.funcionalidadeExtra = funcionalidade;
    }

    acelerar(quantidade: number): void {
        super.acelerar(quantidade);
        if (this.funcionalidadeExtra) {
            this.funcionalidadeExtra.executar();
        }   
    }
}

// Princípio da Segregação de Interfaces (Interface Segregation Principle)
interface Notificavel {
    notificar(): void;
}

class EmailService implements Notificavel {
    notificar(): void {
        console.log("Enviando e-mail de notificação...");
    }
}

class SMSNotificationService implements Notificavel {
    notificar(): void {
        console.log("Enviando SMS de notificação...");
    }
}

// Princípio da Inversão de Dependências (Dependency Inversion Principle)
class Notificador {
    private servico: Notificavel;

    constructor(servico: Notificavel) {
        this.servico = servico;
    }

    notificar(): void {
        this.servico.notificar();
    }
}