"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=====================================generics==========================
// import {ConcessionariaDao} from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao'
var Dao_1 = __importDefault(require("./Dao"));
var concessionaria_1 = __importDefault(require("./concessionaria"));
var pessoa_1 = __importDefault(require("./pessoa"));
// let dao: ConcessionariaDao = new ConcessionariaDao()
var concessionaria = new concessionaria_1.default('', []);
// let dao2: PessoaDao = new PessoaDao()
var pessoa = new pessoa_1.default('', '');
var dao3 = new Dao_1.default();
var dao4 = new Dao_1.default();
dao3.inserir(concessionaria);
dao4.remover(5);
dao4.atualizar(pessoa);
