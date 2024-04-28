import { NotificadorSMS } from "../class/notificadorSMS";
import { iNotificador } from "../interface/iNotificador";

export class adaptadorSMS implements iNotificador{

    private notificadorSMS: NotificadorSMS

    constructor(notificador: NotificadorSMS){
        this.notificadorSMS = notificador
    }

    enviar(mensagem: string, destinatario: string) {
        this.notificadorSMS.enviarSMS(destinatario, mensagem)
    }
}