import { iNotificador } from "../interface/iNotificador";

export class NotificadorEmail implements iNotificador{
    enviar(mensagem: string, destinatario: string) {
        return console.log('De ', destinatario, '\n', mensagem);
    }
}