import DaoInterface  from './DaoInterface'
import Pessoa from './pessoa' 
    

export default class PessoaDao implements DaoInterface<any> {

    nomeTable = 'TbName'

    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('logica de update')
        return true

    }
    remover(id: number): Pessoa {
        console.log('logicar de delete')
        return new Pessoa('', '')

    }
    selecionar(id: number): Pessoa {
        console.log('logica de select')
        return new Pessoa('','')

    }
    selecionarTodos(): [any] {
        console.log('logica de selectAll')
        return [new Pessoa('','')]

    }

}
