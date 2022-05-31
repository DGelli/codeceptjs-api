var random_number = require('random-number');
var dth = require('datetime-helper');
var cpf = require("cpf_cnpj").CPF;
var cnpj = require("cpf_cnpj").CNPJ;

/**
 * Gerar numero aleatorio
 * @param {int} minimo interger, default = 0
 * @param {int} maximo interger, default = 1000
 * @param {boolean} inteiro true or false, default true
 * @returns number
 */
const getNumber = (minimo, maximo, inteiro) => {
    var options = {
        min: minimo == undefined ? 0 : minimo,
        max: maximo == undefined ? 1000 : maximo,
        integer: inteiro == undefined ? true : inteiro
    }
    return (random_number(options))
};
exports.getNumber = getNumber;

/**
 * Gera data com o formato desejado
 * @param {string} fomratDate 'YYYY/MM/DD HH/mm/ss/ms'
 * @param {int} addDays 0 to now or +or-
 * @returns date
 */
const getDate = (formatDate, addDays) => {
    addDays = (addDays == undefined ? 0 : addDays)
    return dth.format(dth.dateAdd(new Date(), addDays), formatDate); // 'YYYY/MM/DD HH/mm/ss/ms'
};
exports.getDate = getDate;

/**
 * Gera CPF
 * @param {boolean} formatting 
 * @returns cpf 
 */
const getCPF = (formatting) => {
    return (cpf.generate(formatting));
};
exports.getCPF = getCPF;

/**
 * Gera CNPJ
 * @param {boolean} formatting 
 * @returns cnpj
 */
const getCNPJ = (formatting) => {
    return (cnpj.generate(formatting));
};
exports.getCNPJ = getCNPJ;