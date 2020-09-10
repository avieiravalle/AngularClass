/* Interfaces 
 import ConcessionariaDao from './ConcessionariaDao'
 import Concessionaria from "./concessionaria";
 import Pessoa from './pessoa';
 import PessoaDao from './PessoaDao'

// let dao: ConcessionariaDao = new ConcessionariaDao()
// let concessionaria = new Concessionaria('',[])

// dao.atualizar(concessionaria);
// dao.inserir(concessionaria);
// dao.remover(1);
// dao.selecionar(2);


// let daoP: PessoaDao = new PessoaDao();
// let pessoa: Pessoa =  new Pessoa('','');

// daoP.atualizar(pessoa)
 daoP.inserir(pessoa)  */ 

 //=====================================generics==========================

 // import {ConcessionariaDao} from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao'
import Dao  from './Dao'

import Concessionaria from './concessionaria'
import Pessoa from './pessoa'



// let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])



// let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '')

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Pessoa> = new Dao<Pessoa>()

dao3.inserir(concessionaria)
dao4.remover(5)
dao4.atualizar(pessoa)