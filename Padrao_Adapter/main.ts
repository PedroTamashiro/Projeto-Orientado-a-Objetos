import { adaptadorPush } from "./Adapter/pushAdapter";
import { adaptadorSMS } from "./Adapter/smsAdapter";
import { cliente } from "./class/cliente";
import { NotificadorEmail } from "./class/notificadorEmail";
import { notificadorPush } from "./class/notificadorPush";
import { NotificadorSMS } from "./class/notificadorSMS";

const client = new cliente()
const NotificadorPush = new notificadorPush()
const notificadorSMS = new NotificadorSMS()
const notificadorEmail = new NotificadorEmail()
const adapterSMS = new adaptadorSMS(notificadorSMS)
const AdaptadorPush = new adaptadorPush(NotificadorPush)

client.enviar(notificadorEmail, 'insira um texto aqui', 'Pedro Tamashiro');
client.enviar(adapterSMS, '123456789', 'insira outro texto aqui');
client.enviar(AdaptadorPush, '555.55.5555', 'insira mais um texto aqui');
