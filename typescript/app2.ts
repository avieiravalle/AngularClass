import Carro from './carro'
import {Concessionaria} from './concessionaria'
import {Pessoa} from './pessoa'



let carroA = new Carro('EcoSport', 4)
let carroB = new Carro('Tucson', 4)
let carroC = new Carro('Ranger', 4)

/* ====== lista da conseionaria ====*/

let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

console.log(concessionaria.mostrarListadeCarros())


/* compra carro */

let cliente = new Pessoa('Jose', 'Tucson')
concessionaria.mostrarListadeCarros().map((carro: Carro) => {

    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }

})

console.log(cliente.dizerCarroPreferido())