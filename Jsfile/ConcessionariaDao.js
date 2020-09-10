"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var concessionaria_1 = __importDefault(require("./concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTable = 'TbName';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logicar de delete');
        return new concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return new concessionaria_1.default('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('logica de selectAll');
        return [new concessionaria_1.default('', [])];
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
