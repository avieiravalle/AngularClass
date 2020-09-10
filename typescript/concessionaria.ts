import Carro from './carro'
import ConcecessionariaInterface from './Concessionariainterface'


export default class Concessionaria implements ConcecessionariaInterface {
    private endereco: string
    private listadeCarros: Array<Carro>

    constructor(endereco: string, listadeCarros: Carro[]) {
        this.endereco = endereco
        this.listadeCarros = listadeCarros
    }
    fornecerHorariodeFuncionamento(): string {
       return 'De segunda a Sexta das 9 as 18 Hrs'
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
