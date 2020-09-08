import Carro from './carro'



export class Concessionaria {
    private endereco: string
    private listadeCarros: Array<Carro>

    constructor(endereco: string, listadeCarros: Carro[]) {
        this.endereco = endereco
        this.listadeCarros = listadeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListadeCarros(): Array<Carro> {
        return this.listadeCarros
    }
}

// let concessionaria = new Concessionaria('Av paulista', 5);
// console.log(concessionaria);
