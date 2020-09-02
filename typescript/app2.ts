class Carro {
    private modelo: string
    private numerodePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numerodePortas: number) {
        this.modelo = modelo
        this.numerodePortas = numerodePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }


    public velocidadeAtual(): number {
        return this.velocidade
    }
}
// let carro = new Carro('ecosport', 4);
// console.log(carro)


class Concessionaria {
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


class Pessoa {
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