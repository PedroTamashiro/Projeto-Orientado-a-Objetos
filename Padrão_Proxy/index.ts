import { user } from "./class/User";
import { proxySubject } from "./class/proxy";
import { realSubject } from "./class/realSubject";

const real1 = new realSubject()
const proxy = new proxySubject(real1)

const Joao = new user(5, 4, proxy)
const Lucas = new user(10, 8, proxy)

Joao.calculate()
console.log('\n')
Lucas.calculate()