import {Carro} from './carro'


export class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido

    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroTem(): Carro {
        return this.carro
    }

}
//  let pessoa = new Pessoa('Anderson', 'EcoSport');
// console.log(pessoa.dizerCarroPreferido())

/*====== Criando Carros ======*/
