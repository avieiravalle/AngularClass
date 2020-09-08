"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listadeCarros) {
        this.endereco = endereco;
        this.listadeCarros = listadeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListadeCarros = function () {
        return this.listadeCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
// let concessionaria = new Concessionaria('Av paulista', 5);
// console.log(concessionaria);
