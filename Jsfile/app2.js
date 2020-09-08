"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./carro"));
var concessionaria_1 = require("./concessionaria");
var pessoa_1 = require("./pessoa");
var carroA = new carro_1.default('EcoSport', 4);
var carroB = new carro_1.default('Tucson', 4);
var carroC = new carro_1.default('Ranger', 4);
/* ====== lista da conseionaria ====*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1.Concessionaria('Av Paulista', listaDeCarros);
console.log(concessionaria.mostrarListadeCarros());
/* compra carro */
var cliente = new pessoa_1.Pessoa('Jose', 'Tucson');
concessionaria.mostrarListadeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroPreferido());
