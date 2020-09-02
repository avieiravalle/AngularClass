"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numerodePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numerodePortas = numerodePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carro = new Carro('ecosport', 4);
console.log(carro);
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
var concessionaria = new Concessionaria('Av paulista', 5);
console.log(concessionaria);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function () {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('Anderson', 'EcoSport');
console.log(pessoa.dizerCarroPreferido());
