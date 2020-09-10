import DaoInterface from './DaoInterface'

export default class Dao<T> implements DaoInterface<T>{

    nomeTable = ''

    inserir(object: T): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: T): boolean {
        console.log('logica de update')
        return true

    }
    remover(id: number): T {
        console.log('logicar de delete')
        return Object();

    }
    selecionar(id: number): T {
        console.log('logica de select')
        return Object();

    }
    selecionarTodos(): [T] {
        console.log('logica de selectAll')
        return [Object()]

    }



} 