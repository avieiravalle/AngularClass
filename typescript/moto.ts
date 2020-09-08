import Veiculo from './veiculo'

 class Moto extends Veiculo {
    public acelerar(): void {
        this.velocidade = this.velocidade + 30
    }

}

export default Moto