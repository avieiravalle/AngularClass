import { DaoInterface } from './DaoInterface'
import Conssecionaria from './concessionaria' 
    

export default class ConcessionariaDao implements DaoInterface {

    nomeTable = 'TbName'

    inserir(object: Conssecionaria): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: Conssecionaria): boolean {
        console.log('logica de update')
        return true

    }
    remover(id: number): Conssecionaria {
        console.log('logicar de delete')
        return new Conssecionaria('', [])

    }
    selecionar(id: number): Conssecionaria {
        console.log('logica de select')
        return new Conssecionaria('',[])

    }
    selecionarTodos(): [any] {
        console.log('logica de selectAll')
        return [new Conssecionaria('',[])]

    }

}
