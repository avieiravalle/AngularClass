export default interface DaoInterface <T>{
    nomeTable: string;

    inserir(object: T): boolean
    atualizar(object: T): boolean
    remover(id: number): T
    selecionar(id: number): T
    selecionarTodos(): [T]

}