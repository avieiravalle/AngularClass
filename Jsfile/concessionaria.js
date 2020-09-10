"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listadeCarros) {
        this.endereco = endereco;
        this.listadeCarros = listadeCarros;
    }
    Concessionaria.prototype.fornecerHorariodeFuncionamento = function () {
        return 'De segunda a Sexta das 9 as 18 Hrs';
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListadeCarros = function () {
        return this.listadeCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
// let concessionaria = new Concessionaria('Av paulista', 5);
// console.log(concessionaria);
