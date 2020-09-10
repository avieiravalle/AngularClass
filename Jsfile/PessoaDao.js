"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = __importDefault(require("./pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTable = 'TbName';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logicar de delete');
        return new pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return new pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica de selectAll');
        return [new pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.default = PessoaDao;
