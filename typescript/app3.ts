import Carro from './carro'
import Moto from './moto'
import Concessionaria   from './concessionaria'

let carro = new Carro('Ecosport', 4)
let moto = new Moto()
let concessioanaria = new Concessionaria('',[])




moto.acelerar()

console.log(moto)
console.log(carro)
console.log(concessioanaria.fornecerHorariodeFuncionamento())