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
let carro = new Carro('ecosport', 4);
console.log(carro)


class Concessionaria {
    private endereco: string
    private listadeCarros: any

    constructor(endereco: string, listadeCarros: any) {
        this.endereco = endereco
        this.listadeCarros = listadeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListadeCarros(): any {
        return this.listadeCarros
    }
}

let concessionaria = new Concessionaria('Av paulista', 5);
console.log(concessionaria);


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

    public comprarCarro(): void {
        this.carro = carro
    }

    public dizerCarroTem(): any {
       return this.carro
    }

}
let pessoa = new Pessoa('Anderson', 'EcoSport');
console.log(pessoa.dizerCarroPreferido())