import { notificadorPush } from "../class/notificadorPush";
import { iNotificador } from "../interface/iNotificador";

export class adaptadorPush implements iNotificador{

    private notificadorPush: notificadorPush

    constructor(notificador: notificadorPush){
        this.notificadorPush = notificador
    }

    enviar(mensagem: string, destinatario: string) {
        this.notificadorPush.enviarPush(destinatario, mensagem)
    }
}