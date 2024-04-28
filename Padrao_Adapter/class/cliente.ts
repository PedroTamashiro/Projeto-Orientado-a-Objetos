import { iNotificador } from "../interface/iNotificador";

export class cliente{
    enviar(notificador: iNotificador, mensagem: string, destinatario:string){
        notificador.enviar(mensagem, destinatario)
    }
}